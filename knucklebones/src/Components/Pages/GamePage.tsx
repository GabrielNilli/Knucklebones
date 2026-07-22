// =================================
//  IMPORTS
// =================================
import { useState } from "react";

import RuneBG from "./../UI/RuneBG";
import DividerAndButton from "./../UI/DividerAndButton";
import LambBoard from "./../UI/LambBoard";
import GoatBoard from "./../UI/GoatBoard";
import CoinTossEvent from "./../UI/CoinTossEvent";

import GoatCoinFace from "./../Images/Items/CoinFaces/GoatCoinFace.png";
import LambCoinFace from "./../Images/Items/CoinFaces/LambCoinFace.png";

// =================================
//  COMPONENT
// =================================
export default function GamePage() {
  // =================================
  //  CONSTS
  // =================================

  // =================================
  //  FUNCTIONS
  // =================================
  function handleCoinToss() {}

  // =================================
  //  STATES
  // =================================
  useState(() => {}, []);

  // =================================
  //  RENDER
  // =================================
  return (
    <>
      <div className="relative min-h-screen bg-[#0a0a0a] text-white p-6 md:p-12 flex flex-col items-center justify-start overflow-hidden">
        <RuneBG count={25} />
        <CoinTossEvent />
        <GoatBoard />
        <DividerAndButton />
        <LambBoard />
      </div>
    </>
  );
}
