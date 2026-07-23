// =================================
//  IMPORTS
// =================================
import { useEffect, useState } from "react";
import GoatIdle from "./../../Images/Characters/Goat/GoatIdle.gif";
import GoatHappy from "./../../Images/Characters/Goat/GoatlHappy.gif";
import GoatHangry from "./../../Images/Characters/Goat/GoatHangry.gif";
import GoatLose from "./../../Images/Characters/Goat/GoatLose.gif";
import GoatWin from "./../../Images/Characters/Goat/GoatWin.gif";

// =================================
//  INTERFACE
// =================================
interface CharacterPoseProps {
  dieResult: number | null;
}

// =================================
//  COMPONENT
// =================================
export default function CharacterPose({ dieResult }: CharacterPoseProps) {
  // =================================
  //  CONSTS
  // =================================
  const [goatPose, setGoatPose] = useState(GoatIdle);

  // =================================
  //  FUNCTION
  // =================================
  function getPoseFromDie(dieResult: number) {
    switch (dieResult) {
      case 1:
        return GoatHangry;
      case 2:
        return GoatIdle;
      case 3:
        return GoatIdle;
      case 4:
        return GoatIdle;
      case 5:
        return GoatIdle;
      case 6:
        return GoatHappy;
      default:
        return GoatIdle;
    }
  }

  // =================================
  //  EFFECTS
  // =================================
  useEffect(() => {
    if (!dieResult) {
      setGoatPose(GoatIdle);
      return;
    }

    setGoatPose(getPoseFromDie(dieResult));

    const timer = setTimeout(() => {
      setGoatPose(GoatIdle);
    }, 2500);

    return () => clearTimeout(timer);
  }, [dieResult]);

  // =================================
  //  RENDER
  // =================================
  return (
    <div className="absolute right-1 top-8 z-10 h-[136px] w-[136px] md:bottom-4 md:h-[128px] md:w-[128px]">
      <img
        src={goatPose}
        alt="Goat Character"
        className="h-full w-full object-contain rotate-180"
      />
    </div>
  );
}
