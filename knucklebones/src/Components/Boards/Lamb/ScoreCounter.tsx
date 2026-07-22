// =================================
//  IMPORTS
// =================================
import { useState } from "react";

// =================================
//  COMPONENT
// =================================
export default function ScoreCounter() {
  // =================================
  //  CONSTS
  // =================================
  const [lambPoints, setLambPoints] = useState(0);

  // =================================
  //  RENDER
  // =================================
  return (
    <>
      <div className="bg-gray-600 border border-[#B52A2E]/50 rounded-md py-2 px-4 absolute bottom-3/7 place-self-center">
        <p>{lambPoints}</p>
      </div>
    </>
  );
}
