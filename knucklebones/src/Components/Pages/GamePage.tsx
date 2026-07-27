// =================================
// IMPORTS
// =================================
import { useState } from "react";

import RuneBG from "../UI/RuneBG";
import DividerAndButton from "../UI/DividerAndButton";
import LambBoard from "../UI/LambBoard";
import GoatBoard from "../UI/GoatBoard";
import CoinTossEvent from "../UI/CoinTossEvent";
import AnimatedDie from "../UI/AnimateDie";
import VictoryScreen from "../UI/VictoryScreen";

import type { CoinTossWinner } from "../UI/CoinTossEvent";

// =================================
// INTERFACES
// =================================
export interface DiceColumn {
  id: number;
  dice: number[];
}

interface ColumnSelectionResult {
  columns: DiceColumn[];
  wasAdded: boolean;
}

type GameResult = CoinTossWinner | "draw";

function createEmptyColumns(): DiceColumn[] {
  return [
    { id: 1, dice: [] },
    { id: 2, dice: [] },
    { id: 3, dice: [] },
  ];
}

// =================================
// COMPONENT
// =================================
export default function GamePage() {
  // =================================
  // STATES
  // =================================

  // -------------- Current turn --------------
  const [coinTossResult, setCoinTossResult] = useState<CoinTossWinner | null>(
    null,
  );

  const activePlayer = coinTossResult;

  // -------------- Die roll --------------
  const [dieResult, setDieResult] = useState<number | null>(null);

  const [pendingRoll, setPendingRoll] = useState<number | null>(null);

  const [lastRollPlayer, setLastRollPlayer] = useState<CoinTossWinner | null>(
    null,
  );

  const [isRolling, setIsRolling] = useState(false);

  const [rollAnimationId, setRollAnimationId] = useState(0);

  const isWaitingColumnSelection = dieResult !== null || isRolling;

  const [gameResult, setGameResult] = useState<GameResult | null>(null);

  const [gameId, setGameId] = useState(0);

  // -------------- Board columns --------------
  const [goatColumns, setGoatColumns] =
    useState<DiceColumn[]>(createEmptyColumns);

  const [lambColumns, setLambColumns] =
    useState<DiceColumn[]>(createEmptyColumns);

  // -------------- Scores --------------
  const goatScore = calculateScore(goatColumns);
  const lambScore = calculateScore(lambColumns);

  // =================================
  // FUNCTIONS
  // =================================

  // -------------- Initial coin toss --------------
  function handleCoinTossResult(result: CoinTossWinner) {
    setCoinTossResult(result);
  }

  // -------------- Roll button --------------
  function handlePlayerRoll() {
    if (
      activePlayer === null ||
      gameResult !== null ||
      isRolling ||
      isWaitingColumnSelection
    ) {
      return;
    }

    const roll = getDieRoll();

    setPendingRoll(roll);
    setLastRollPlayer(activePlayer);
    setIsRolling(true);

    setRollAnimationId((currentId) => currentId + 1);
  }

  // -------------- Animation completed --------------
  function handleRollAnimationComplete() {
    if (pendingRoll === null || lastRollPlayer === null) {
      return;
    }

    setDieResult(pendingRoll);
    setPendingRoll(null);
    setIsRolling(false);
  }

  // -------------- Random die result --------------
  function getDieRoll(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  // -------------- Reset game --------------
  function resetGame() {
    setCoinTossResult(null);
    setDieResult(null);
    setPendingRoll(null);
    setLastRollPlayer(null);
    setIsRolling(false);
    setRollAnimationId(0);
    setGameResult(null);
    setGoatColumns(createEmptyColumns());
    setLambColumns(createEmptyColumns());
    setGameId((currentId) => currentId + 1);
  }

  // -------------- Column selection --------------
  function handleColumnSelection(player: CoinTossWinner, columnId: number) {
    if (
      gameResult !== null ||
      dieResult === null ||
      lastRollPlayer !== player ||
      isRolling
    ) {
      return;
    }

    const oppositeColumnId = 4 - columnId;
    let nextGoatColumns = goatColumns;
    let nextLambColumns = lambColumns;

    if (player === "lamb") {
      const result = addDieToColumn(lambColumns, columnId, dieResult);

      if (!result.wasAdded) {
        return;
      }

      nextLambColumns = result.columns;
      nextGoatColumns = removeMatchingDice(
        goatColumns,
        oppositeColumnId,
        dieResult,
      );
    }

    if (player === "goat") {
      const result = addDieToColumn(goatColumns, columnId, dieResult);

      if (!result.wasAdded) {
        return;
      }

      nextGoatColumns = result.columns;
      nextLambColumns = removeMatchingDice(
        lambColumns,
        oppositeColumnId,
        dieResult,
      );
    }

    setGoatColumns(nextGoatColumns);
    setLambColumns(nextLambColumns);

    setDieResult(null);
    setLastRollPlayer(null);

    if (isBoardComplete(nextGoatColumns) || isBoardComplete(nextLambColumns)) {
      setGameResult(getGameResult(nextGoatColumns, nextLambColumns));
      return;
    }

    // Il turno cambia soltanto dopo il posizionamento
    setCoinTossResult(player === "lamb" ? "goat" : "lamb");
  }

  // -------------- Add die to selected column --------------
  function addDieToColumn(
    columns: DiceColumn[],
    columnId: number,
    dieValue: number,
  ): ColumnSelectionResult {
    let wasAdded = false;

    const nextColumns = columns.map((column) => {
      if (column.id !== columnId || column.dice.length >= 3) {
        return column;
      }

      wasAdded = true;

      return {
        ...column,
        dice: [...column.dice, dieValue],
      };
    });

    return {
      columns: nextColumns,
      wasAdded,
    };
  }

  // -------------- Remove matching opponent dice --------------
  function removeMatchingDice(
    columns: DiceColumn[],
    columnId: number,
    dieValue: number,
  ): DiceColumn[] {
    return columns.map((column) => {
      if (column.id !== columnId) {
        return column;
      }

      return {
        ...column,
        dice: column.dice.filter((die) => die !== dieValue),
      };
    });
  }

  // -------------- Full board --------------
  function isBoardComplete(columns: DiceColumn[]): boolean {
    return columns.every((column) => column.dice.length === 3);
  }

  // -------------- Winner --------------
  function getGameResult(
    currentGoatColumns: DiceColumn[],
    currentLambColumns: DiceColumn[],
  ): GameResult {
    const currentGoatScore = calculateScore(currentGoatColumns);
    const currentLambScore = calculateScore(currentLambColumns);

    if (currentGoatScore > currentLambScore) {
      return "goat";
    }

    if (currentLambScore > currentGoatScore) {
      return "lamb";
    }

    return "draw";
  }

  // -------------- Total score --------------
  function calculateScore(columns: DiceColumn[]): number {
    return columns.reduce(
      (total, column) => total + calculateColumnScore(column.dice),
      0,
    );
  }

  // -------------- Column score --------------
  function calculateColumnScore(dice: number[]): number {
    return dice.reduce((total, dieValue) => {
      const sameDiceCount = dice.filter((die) => die === dieValue).length;

      return total + dieValue * sameDiceCount;
    }, 0);
  }

  // =================================
  // RENDER
  // =================================
  return (
    <main
      className="
        relative
        flex
        min-h-screen
        flex-col
        items-center
        justify-start
        overflow-hidden
        bg-[#0a0a0a]
        p-6
        text-white
        md:p-12
      "
    >
      <RuneBG count={25} />

      {isRolling && pendingRoll !== null && lastRollPlayer !== null && (
        <AnimatedDie
          key={rollAnimationId}
          value={pendingRoll}
          player={lastRollPlayer}
          onComplete={handleRollAnimationComplete}
        />
      )}

      <CoinTossEvent key={gameId} onResult={handleCoinTossResult} />

      <GoatBoard
        goatScore={goatScore}
        goatColumns={goatColumns}
        activePlayer={activePlayer}
        handlePlayerRoll={handlePlayerRoll}
        handleColumnSelection={(columnId) =>
          handleColumnSelection("goat", columnId)
        }
        dieResult={lastRollPlayer === "goat" ? dieResult : null}
        isWaitingColumnSelection={isWaitingColumnSelection}
      />

      <DividerAndButton />

      <LambBoard
        lambScore={lambScore}
        lambColumns={lambColumns}
        activePlayer={activePlayer}
        handlePlayerRoll={handlePlayerRoll}
        handleColumnSelection={(columnId) =>
          handleColumnSelection("lamb", columnId)
        }
        dieResult={lastRollPlayer === "lamb" ? dieResult : null}
        isWaitingColumnSelection={isWaitingColumnSelection}
        isRolling={isRolling}
      />

      {gameResult !== null && (
        <VictoryScreen
          result={gameResult}
          goatScore={goatScore}
          lambScore={lambScore}
          onPlayAgain={resetGame}
        />
      )}
    </main>
  );
}
