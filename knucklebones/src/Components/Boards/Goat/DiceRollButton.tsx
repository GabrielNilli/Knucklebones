// =================================
//  IMPORTS
// =================================
import GenericButton from "./../../UI/GenericButton";

// =================================
//  COMPONENT
// =================================
export default function DiceRollButton() {
  // =================================
  //  CONSTS
  // =================================

  // =================================
  //  RENDER
  // =================================
  return (
    <>
      <div className="absolute top-1/25 place-self-center rotate-180">
        <GenericButton variant="primary">Roll</GenericButton>
      </div>
    </>
  );
}
