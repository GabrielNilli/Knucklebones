// =================================
//  IMPORTS
// =================================
import { useState, useEffect } from "react";
import LambIdle from "./../../Images/Characters/Lamb/LambIdle.gif";
import LambHappy from "./../../Images/Characters/Lamb/LambHappy.gif";
import LambHangry from "./../../Images/Characters/Lamb/LambHangry.gif";

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
  const [lambPose, setLambPose] = useState(LambIdle);

  // =================================
  //  FUNCTION
  // =================================
  function getPoseFromDie(dieResult: number) {
    switch (dieResult) {
      case 1:
        return LambHangry;
      case 2:
        return LambIdle;
      case 3:
        return LambIdle;
      case 4:
        return LambIdle;
      case 5:
        return LambIdle;
      case 6:
        return LambHappy;
      default:
        return LambIdle;
    }
  }

  // =================================
  //  EFFECTS
  // =================================
  useEffect(() => {
    if (!dieResult) {
      setLambPose(LambIdle);
      return;
    }

    setLambPose(getPoseFromDie(dieResult));

    const timer = setTimeout(() => {
      setLambPose(LambIdle);
    }, 2500);

    return () => clearTimeout(timer);
  }, [dieResult]);

  // =================================
  //  RENDER
  // =================================
  return (
    <div className="absolute bottom-8 left-1 z-10 h-[136px] w-[136px] md:bottom-4 md:h-[128px] md:w-[128px] lg:top-1/2 lg:right-auto lg:bottom-auto lg:left-[calc(75%_+_120px)] lg:h-[170px] lg:w-[170px] lg:-translate-y-1/2 xl:left-[calc(75%_+_190px)] lg:rotate-y-180">
      <img
        src={lambPose}
        alt="Lamb Character"
        className="h-full w-full scale-x-[-1] object-contain"
      />
    </div>
  );
}
