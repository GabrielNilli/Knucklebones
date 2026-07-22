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
      <div className="absolute bottom-1/25 place-self-center">
        <GenericButton variant="primary">Roll</GenericButton>
      </div>
    </>
  );
}
