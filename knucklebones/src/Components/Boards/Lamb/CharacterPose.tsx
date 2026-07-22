// =================================
//  IMPORTS
// =================================
import { useState } from "react";
import LambIdle from "./../../Images/Characters/Lamb/LambIdle.gif";

// =================================
//  COMPONENT
// =================================
export default function CharacterPose() {
  // =================================
  //  CONSTS
  // =================================
  const [lambPose, setLambPose] = useState(LambIdle);

  // =================================
  //  RENDER
  // =================================
  return (
    <div className="absolute left-1 bottom-8 md:bottom-4 z-10">
      <img
        src={lambPose}
        alt="Lamb Character"
        className="w-34 h-34 md:w-32 md:h-32 object-contain scale-x-[-1]"
      />
    </div>
  );
}
