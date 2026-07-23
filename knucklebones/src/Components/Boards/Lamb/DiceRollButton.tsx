// =================================
//  IMPORTS
// =================================
import type { ButtonHTMLAttributes } from "react";

import GenericButton from "./../../UI/GenericButton";

// =================================
//  INTERFACE
// =================================
interface DiceRollButtonProps extends Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "disabled" | "onClick"
> {}

// =================================
//  COMPONENT
// =================================
export default function DiceRollButton({
  disabled,
  onClick,
}: DiceRollButtonProps) {
  // =================================
  //  CONSTS
  // =================================

  // =================================
  //  RENDER
  // =================================
  return (
    <>
      <div className="absolute bottom-1/25 place-self-center">
        <GenericButton disabled={disabled} onClick={onClick} variant="primary">
          Roll
        </GenericButton>
      </div>
    </>
  );
}
