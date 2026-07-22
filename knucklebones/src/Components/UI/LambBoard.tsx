// =================================
//  IMPORTS
// =================================
import { useState } from "react";

import ScoreCounter from "./../Boards/Lamb/ScoreCounter";
import DiceRollButton from "./../Boards/Lamb/DiceRollButton";
import CharacterPose from "./../Boards/Lamb/CharacterPose";
import DiceBoard from "./../Boards/Lamb/DiceBoard";
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
}

// =================================
//  COMPONENT
// =================================
export default function LambBoard({ activePlayer }: LambBoardProps) {
  // =================================
  //  CONSTS
  // =================================
  const [columns, setColumns] = useState([
    { id: 1, dice: [Die1, Die2, Die3] },
    { id: 2, dice: [Die3, Die4, Die5] },
    { id: 3, dice: [Die6] },
  ]);

  // =================================
  //  RENDER
  // =================================
  return (
    <>
      <div>
        <ScoreCounter />
        <DiceRollButton disabled={activePlayer !== "lamb"} />
        <CharacterPose />
        <DiceBoard columns={columns} />
      </div>
    </>
  );
}
