// =================================
//  IMPORTS
// =================================
import type { ButtonHTMLAttributes } from "react";

import GenericButton from "./../../UI/GenericButton";

// =================================
//  INTERFACE
// =================================
interface DiceRollButtonProps
  extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, "disabled" | "onClick"> {}

// =================================
//  COMPONENT
// =================================
export default function DiceRollButton({
  disabled = false,
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
      <div className="absolute top-1/25 place-self-center rotate-180">
        <GenericButton disabled={disabled} onClick={onClick} variant="primary">
          Roll
        </GenericButton>
      </div>
    </>
  );
}
