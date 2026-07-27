// =================================
// IMPORTS
// =================================
import ScoreCounter from "../Boards/Lamb/ScoreCounter";
import DiceRollButton from "../Boards/Lamb/DiceRollButton";
import CharacterPose from "../Boards/Lamb/CharacterPose";
import DiceBoard from "../Boards/Lamb/DiceBoard";
import DieBox from "../Boards/Lamb/DieBox";

import type { CoinTossWinner } from "./CoinTossEvent";
import type { DiceColumn } from "../Pages/GamePage";

import Die1 from "../Images/Items/DieFaces/Die1.png";
import Die2 from "../Images/Items/DieFaces/Die2.png";
import Die3 from "../Images/Items/DieFaces/Die3.png";
import Die4 from "../Images/Items/DieFaces/Die4.png";
import Die5 from "../Images/Items/DieFaces/Die5.png";
import Die6 from "../Images/Items/DieFaces/Die6.png";

// =================================
// INTERFACE
// =================================
interface LambBoardProps {
  activePlayer: CoinTossWinner | null;
  handlePlayerRoll: () => void;
  handleColumnSelection: (columnId: number) => void;
  dieResult: number | null;
  isWaitingColumnSelection: boolean;
  isRolling: boolean;
  lambColumns: DiceColumn[];
  lambScore: number;
}

// =================================
// CONSTANTS
// =================================
const dieFaces = [Die1, Die2, Die3, Die4, Die5, Die6];

// =================================
// COMPONENT
// =================================
export default function LambBoard({
  activePlayer,
  handlePlayerRoll,
  handleColumnSelection,
  dieResult,
  isWaitingColumnSelection,
  isRolling,
  lambColumns,
  lambScore,
}: LambBoardProps) {
  const die = dieResult !== null ? dieFaces[dieResult - 1] : null;

  const isLambTurn = activePlayer === "lamb";

  const canSelectColumn =
    isLambTurn && isWaitingColumnSelection && !isRolling && dieResult !== null;

  function handleLambColumnSelection(columnId: number) {
    if (!canSelectColumn) {
      return;
    }

    handleColumnSelection(columnId);
  }

  return (
    <section>
      <ScoreCounter lambScore={lambScore} />

      <DiceRollButton
        disabled={!isLambTurn || isRolling || isWaitingColumnSelection}
        onClick={handlePlayerRoll}
      />

      <CharacterPose dieResult={dieResult} />

      <DiceBoard
        columns={lambColumns}
        dieFaces={dieFaces}
        handleColumnSelection={handleLambColumnSelection}
      />

      <DieBox die={die} />
    </section>
  );
}
