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
        top-1/25
        left-1/2
        -translate-x-1/2
        rotate-180
        lg:top-[calc(50%_+_165px)]
        lg:left-1/4
        lg:rotate-0
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
