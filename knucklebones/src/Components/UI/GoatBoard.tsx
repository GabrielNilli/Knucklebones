// =================================
//  IMPORTS
// =================================
import { useState } from "react";

import ScoreCounter from "./../Boards/Goat/ScoreCounter";
import DiceRollButton from "./../Boards/Goat/DiceRollButton";
import CharacterPose from "./../Boards/Goat/CharacterPose";
import DiceBoard from "./../Boards/Goat/DiceBoard";
import type { CoinTossWinner } from "./CoinTossEvent";

// =================================
//  INTERFACE
// =================================
interface GoatBoardProps {
  activePlayer: CoinTossWinner | null;
  handlePlayerRoll: () => void;
  dieResult: number | null;
}

// =================================
//  COMPONENT
// =================================
export default function GoatBoard({
  activePlayer,
  handlePlayerRoll,
  dieResult,
}: GoatBoardProps) {
  // =================================
  //  CONSTS
  // =================================
  const [columns, setColumns] = useState([
    { id: 1, dice: [] },
    { id: 2, dice: [] },
    { id: 3, dice: [] },
  ]);

  // =================================
  //  RENDER
  // =================================
  return (
    <>
      <div>
        <ScoreCounter />
        <DiceRollButton
          disabled={activePlayer !== "goat"}
          onClick={handlePlayerRoll}
        />
        <CharacterPose dieResult={dieResult} />
        <DiceBoard columns={columns} />
      </div>
    </>
  );
}
