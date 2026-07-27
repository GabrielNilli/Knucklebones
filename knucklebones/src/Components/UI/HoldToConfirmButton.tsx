// =================================
//  IMPORTS
// =================================
import { useEffect, useRef, useState } from "react";

import type { KeyboardEvent, PointerEvent, ReactNode } from "react";

import GenericButton from "./GenericButton";

// =================================
//  INTERFACE
// =================================
interface HoldToConfirmButtonProps {
  children: ReactNode;
  onConfirm: () => void;
  duration?: number;
  className?: string;
}

// =================================
//  COMPONENT
// =================================
export default function HoldToConfirmButton({
  children,
  onConfirm,
  duration = 1000,
  className = "",
}: HoldToConfirmButtonProps) {
  // =================================
  //  CONSTS
  // =================================
  const [isHolding, setIsHolding] = useState(false);
  const timerRef = useRef<number | null>(null);
  const clearTimer = () => {
    if (timerRef.current === null) {
      return;
    }

    window.clearTimeout(timerRef.current);
    timerRef.current = null;
  };

  const cancelHold = () => {
    clearTimer();
    setIsHolding(false);
  };

  const startHold = () => {
    if (timerRef.current !== null) {
      return;
    }

    setIsHolding(true);

    timerRef.current = window.setTimeout(() => {
      timerRef.current = null;
      setIsHolding(false);
      onConfirm();
    }, duration);
  };

  const handlePointerDown = (event: PointerEvent<HTMLButtonElement>) => {
    if (event.button !== 0) {
      return;
    }

    event.preventDefault();

    event.currentTarget.setPointerCapture(event.pointerId);

    startHold();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const isActivationKey = event.key === "Enter" || event.key === " ";

    if (!isActivationKey || event.repeat) {
      return;
    }

    event.preventDefault();
    startHold();
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      cancelHold();
    }
  };

  // =================================
  //  USE EFFECTS
  // =================================
  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, []);

  // =================================
  //  RENDER
  // =================================
  return (
    <div className={`relative h-24 w-24 ${className}`}>
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        className="
          pointer-events-none
          absolute
          -inset-1
          z-20
          h-[calc(100%_+_0.5rem)]
          w-[calc(100%_+_0.5rem)]
          overflow-visible
        "
      >
        <path
          className="lg:hidden"
          d="M 50 2 A 48 48 0 0 1 50 98"
          pathLength="100"
          fill="none"
          stroke="#FF4A50"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="100"
          style={{
            strokeDashoffset: isHolding ? 0 : 100,

            transition: isHolding
              ? `stroke-dashoffset ${duration}ms linear`
              : "stroke-dashoffset 150ms ease-out",

            filter: "drop-shadow(0 0 5px rgba(255, 74, 80, 0.8))",
          }}
        />

        <path
          className="hidden lg:block"
          d="M 18 8 H 82 Q 92 8 92 18 V 82 Q 92 92 82 92 H 18 Q 8 92 8 82 V 18 Q 8 8 18 8"
          pathLength="100"
          fill="none"
          stroke="#FF4A50"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="100"
          style={{
            strokeDashoffset: isHolding ? 0 : 100,

            transition: isHolding
              ? `stroke-dashoffset ${duration}ms linear`
              : "stroke-dashoffset 150ms ease-out",

            filter: "drop-shadow(0 0 5px rgba(255, 74, 80, 0.8))",
          }}
        />
      </svg>

      <GenericButton
        variant="semi"
        className="
          relative
          z-10
          h-full
          w-full
          touch-none
          select-none
        "
        aria-label="Tieni premuto per uscire"
        aria-pressed={isHolding}
        onPointerDown={handlePointerDown}
        onPointerUp={cancelHold}
        onPointerCancel={cancelHold}
        onPointerLeave={cancelHold}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onBlur={cancelHold}
        onContextMenu={(event) => event.preventDefault()}
      >
        {children}
      </GenericButton>
    </div>
  );
}
