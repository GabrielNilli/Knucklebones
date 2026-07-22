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
  const [goatPoints, setGoatPoints] = useState(0);

  // =================================
  //  RENDER
  // =================================
  return (
    <>
      <div className="bg-gray-600 border border-[#B52A2E]/50 rounded-md py-2 px-4 absolute top-3/7 place-self-center rotate-180">
        <p>{goatPoints}</p>
      </div>
    </>
  );
}
