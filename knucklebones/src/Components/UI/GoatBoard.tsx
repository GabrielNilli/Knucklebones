// =================================
//  IMPORTS
// =================================
import ScoreCounter from "./../Boards/Goat/ScoreCounter";
import DiceRollButton from "./../Boards/Goat/DiceRollButton";
import CharacterPose from "./../Boards/Goat/CharacterPose";
import DiceBoard from "./../Boards/Goat/DiceBoard";
import DieBox from "./../Boards/Goat/DieBox";
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
interface GoatBoardProps {
  activePlayer: CoinTossWinner | null;
  handlePlayerRoll: () => void;
  handleColumnSelection: (columnId: number) => void;
  dieResult: number | null;
  isWaitingColumnSelection: boolean;
  goatColumns: DiceColumn[];
  goatScore: number;
}

interface DiceColumn {
  id: number;
  dice: number[];
}

// =================================
//  COMPONENT
// =================================
export default function GoatBoard({
  activePlayer,
  handlePlayerRoll,
  handleColumnSelection,
  dieResult,
  isWaitingColumnSelection,
  goatColumns,
  goatScore,
}: GoatBoardProps) {
  // =================================
  //  CONSTS
  // =================================
  const dieFaces = [Die1, Die2, Die3, Die4, Die5, Die6];
  const die = dieResult ? dieFaces[dieResult - 1] : null;

  // =================================
  //  RENDER
  // =================================
  return (
    <>
      <div>
        <ScoreCounter goatScore={goatScore} />
        <DiceRollButton
          disabled={activePlayer !== "goat" || isWaitingColumnSelection}
          onClick={handlePlayerRoll}
        />
        <CharacterPose dieResult={dieResult} />
        <DiceBoard
          columns={goatColumns}
          dieFaces={dieFaces}
          handleColumnSelection={handleColumnSelection}
        />
        <DieBox die={die} />
      </div>
    </>
  );
}
