// =================================
//  IMPORTS
// =================================
import { useState } from "react";

import ScoreCounter from "./../Boards/Lamb/ScoreCounter";
import DiceRollButton from "./../Boards/Lamb/DiceRollButton";
import CharacterPose from "./../Boards/Lamb/CharacterPose";
import DiceBoard from "./../Boards/Lamb/DiceBoard";
import DieBox from "./../Boards/Lamb/DieBox";
import type { CoinTossWinner } from "./CoinTossEvent";

import Die1 from "./../Images/Items/DieFaces/Die1.png";
import Die2 from "./../Images/Items/DieFaces/Die2.png";
import Die3 from "./../Images/Items/DieFaces/Die3.png";
import Die4 from "./../Images/Items/DieFaces/Die4.png";
import Die5 from "./../Images/Items/DieFaces/Die5.png";
import Die6 from "./../Images/Items/DieFaces/Die6.png";

// =================================
//  INTERFACE
// =================================
interface LambBoardProps {
  activePlayer: CoinTossWinner | null;
  handlePlayerRoll: () => void;
  dieResult: number | null;
  setDieResult: any;
  isWaitingColumnSelection: boolean;
}

interface DiceColumn {
  id: number;
  dice: number[];
}

// =================================
//  COMPONENT
// =================================
export default function LambBoard({
  activePlayer,
  handlePlayerRoll,
  dieResult,
  setDieResult,
  isWaitingColumnSelection,
}: LambBoardProps) {
  // =================================
  //  CONSTS
  // =================================
  const dieFaces = [Die1, Die2, Die3, Die4, Die5, Die6];
  const die = dieResult ? dieFaces[dieResult - 1] : null;

  const [columns, setColumns] = useState<DiceColumn[]>([
    { id: 1, dice: [] },
    { id: 2, dice: [] },
    { id: 3, dice: [] },
  ]);

  // =================================
  //  FUNCTIONS
  // =================================
  function handleColumnSelection(columnId: number) {
    if (dieResult === null) {
      return;
    }

    setColumns((currentColumns) =>
      currentColumns.map((column) => {
        if (column.id !== columnId) {
          return column;
        }

        if (column.dice.length >= 3) {
          return column;
        }

        setDieResult(null);

        return {
          ...column,
          dice: [...column.dice, dieResult],
          die: null,
        };
      }),
    );
  }

  // =================================
  //  RENDER
  // =================================
  return (
    <>
      <div>
        <ScoreCounter />
        <DiceRollButton
          disabled={activePlayer !== "lamb" || isWaitingColumnSelection}
          onClick={handlePlayerRoll}
        />
        <CharacterPose dieResult={dieResult} />
        <DiceBoard
          columns={columns}
          dieFaces={dieFaces}
          handleColumnSelection={handleColumnSelection}
        />
        <DieBox die={die} />
      </div>
    </>
  );
}
