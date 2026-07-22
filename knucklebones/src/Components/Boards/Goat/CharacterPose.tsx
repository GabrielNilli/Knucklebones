// =================================
//  IMPORTS
// =================================
import { useState } from "react";
import GoatIdle from "./../../Images/Characters/Goat/GoatIdle.gif";

// =================================
//  COMPONENT
// =================================
export default function CharacterPose() {
  // =================================
  //  CONSTS
  // =================================
  const [goatPose, setGoatPose] = useState(GoatIdle);

  // =================================
  //  RENDER
  // =================================
  return (
    <div className="absolute right-1 top-8 md:bottom-4 z-10">
      <img
        src={goatPose}
        alt="Lamb Character"
        className="w-34 h-34 md:w-32 md:h-32 object-contain rotate-180"
      />
    </div>
  );
}
