// =================================
// IMPORTS
// =================================
import type { ButtonHTMLAttributes } from "react";

import GenericButton from "../../UI/GenericButton";

// =================================
// INTERFACE
// =================================
interface DiceRollButtonProps extends Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "disabled" | "onClick"
> {}

// =================================
// COMPONENT
// =================================
export default function DiceRollButton({
  disabled = false,
  onClick,
}: DiceRollButtonProps) {
  return (
    <div
      className="
        absolute
        bottom-1/25
        left-1/2
        -translate-x-1/2
        lg:top-[calc(50%_+_165px)]
        lg:bottom-auto
        lg:left-3/4
      "
    >
      <GenericButton
        type="button"
        disabled={disabled}
        onClick={onClick}
        variant="primary"
      >
        Roll
      </GenericButton>
    </div>
  );
}
