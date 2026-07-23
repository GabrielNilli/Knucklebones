// =================================
//  IMPORTS
// =================================
import { useState } from "react";

import RuneBG from "./../UI/RuneBG";
import DividerAndButton from "./../UI/DividerAndButton";
import LambBoard from "./../UI/LambBoard";
import GoatBoard from "./../UI/GoatBoard";
import CoinTossEvent from "./../UI/CoinTossEvent";
import type { CoinTossWinner } from "./../UI/CoinTossEvent";

// =================================
//  COMPONENT
// =================================
export default function GamePage() {
  // =================================
  //  CONSTS
  // =================================
  const [coinTossResult, setCoinTossResult] = useState<CoinTossWinner | null>(
    null,
  );
  const activePlayer = coinTossResult;
  const [dieResult, setDieResult] = useState<number | null>(null);
  const [lastRollPlayer, setLastRollPlayer] = useState<CoinTossWinner | null>(
    null,
  );

  // =================================
  //  FUNCITONS
  // =================================
  // -------------- Roll button click --------------
  function handlePlayerRoll() {
    if (!activePlayer) {
      return;
    }

    const roll = getDieRoll();

    setDieResult(roll);
    setLastRollPlayer(activePlayer);
    console.log(activePlayer + " rolled a " + roll);
    setCoinTossResult(activePlayer === "lamb" ? "goat" : "lamb");
  }

  // -------------- Get random die roll --------------
  function getDieRoll() {
    return Math.floor(Math.random() * 6) + 1;
  }

  // =================================
  //  RENDER
  // =================================
  return (
    <>
      <div className="relative min-h-screen bg-[#0a0a0a] text-white p-6 md:p-12 flex flex-col items-center justify-start overflow-hidden">
        <RuneBG count={25} />
        <CoinTossEvent onResult={(result) => setCoinTossResult(result)} />

        <GoatBoard
          activePlayer={activePlayer}
          handlePlayerRoll={handlePlayerRoll}
          dieResult={lastRollPlayer === "goat" ? dieResult : null}
        />
        <DividerAndButton />
        <LambBoard
          activePlayer={activePlayer}
          handlePlayerRoll={handlePlayerRoll}
          dieResult={lastRollPlayer === "lamb" ? dieResult : null}
        />
      </div>
    </>
  );
}
