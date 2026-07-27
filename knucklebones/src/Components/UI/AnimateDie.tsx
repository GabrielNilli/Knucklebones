// =================================
// IMPORTS
// =================================
import { useEffect, useState } from "react";
import { motion } from "motion/react";

import type { CoinTossWinner } from "./CoinTossEvent";

import Die1 from "../Images/Items/DieFaces/Die1.png";
import Die2 from "../Images/Items/DieFaces/Die2.png";
import Die3 from "../Images/Items/DieFaces/Die3.png";
import Die4 from "../Images/Items/DieFaces/Die4.png";
import Die5 from "../Images/Items/DieFaces/Die5.png";
import Die6 from "../Images/Items/DieFaces/Die6.png";

// =================================
// INTERFACE
// =================================
interface AnimatedDieProps {
  value: number;
  player: CoinTossWinner;
  onComplete: () => void;
}

interface TargetOffset {
  x: number;
  y: number;
}

// =================================
// CONSTANTS
// =================================
const dieFaces = [Die1, Die2, Die3, Die4, Die5, Die6];
const ROLL_DURATION_MS = 1000;
const RESULT_HOLD_MS = 500;
const MOVE_TO_BOX_MS = 350;
const FACE_CHANGE_MS = 80;
const TOTAL_DURATION_MS = ROLL_DURATION_MS + RESULT_HOLD_MS + MOVE_TO_BOX_MS;
const MOVE_START_TIME = (ROLL_DURATION_MS + RESULT_HOLD_MS) / TOTAL_DURATION_MS;
const DESKTOP_BREAKPOINT = 1024;

// =================================
// COMPONENT
// =================================
export default function AnimatedDie({
  value,
  player,
  onComplete,
}: AnimatedDieProps) {
  // =================================
  // STATES
  // =================================
  const finalFaceIndex = Math.max(0, Math.min(value - 1, dieFaces.length - 1));
  const targetOffset = getTargetOffset(player);
  const [currentFaceIndex, setCurrentFaceIndex] = useState(
    (finalFaceIndex + 1) % dieFaces.length,
  );

  // =================================
  // EFFECTS
  // =================================
  useEffect(() => {
    const faceInterval = window.setInterval(() => {
      setCurrentFaceIndex((currentIndex) => {
        return (currentIndex + 1) % dieFaces.length;
      });
    }, FACE_CHANGE_MS);

    const finishTimer = window.setTimeout(() => {
      window.clearInterval(faceInterval);
      setCurrentFaceIndex(finalFaceIndex);
    }, ROLL_DURATION_MS);

    return () => {
      window.clearInterval(faceInterval);
      window.clearTimeout(finishTimer);
    };
  }, [finalFaceIndex]);

  const dieImage = dieFaces[currentFaceIndex];
  const isDesktop =
    typeof window !== "undefined" && window.innerWidth >= DESKTOP_BREAKPOINT;
  const finalRotation = player === "goat" && !isDesktop ? 180 : 0;

  if (!dieImage) {
    return null;
  }

  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
      "
    >
      <motion.div
        className="h-20 w-20"
        initial={{
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
        }}
        animate={{
          opacity: 1,
          x: [0, 0, targetOffset.x],
          y: [0, 0, targetOffset.y],
          rotate: [0, 0, finalRotation],
          scale: [1, 1, 0.7],
        }}
        transition={{
          duration: TOTAL_DURATION_MS / 1000,
          ease: "easeInOut",
          times: [0, MOVE_START_TIME, 1],
        }}
        onAnimationComplete={onComplete}
      >
        <motion.img
          key={dieImage}
          src={dieImage}
          alt={`Dado con valore ${value}`}
          className="
            h-full
            w-full
            object-contain
            drop-shadow-[0_0_12px_rgba(181,42,46,0.8)]
          "
          initial={{ scale: 0.96 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.08,
            ease: "linear",
          }}
        />
      </motion.div>
    </div>
  );
}

// =================================
// FUNCTIONS
// =================================
function getTargetOffset(player: CoinTossWinner): TargetOffset {
  if (typeof window === "undefined") {
    return { x: 0, y: 0 };
  }

  const boxCenterX = 88;
  const boxCenterY = 72;
  const viewportCenterX = window.innerWidth / 2;
  const viewportCenterY = window.innerHeight / 2;

  if (window.innerWidth >= DESKTOP_BREAKPOINT) {
    const targetCenterY = viewportCenterY + 200;

    if (player === "goat") {
      return {
        x: window.innerWidth * 0.25 - 130 - viewportCenterX,
        y: targetCenterY - viewportCenterY,
      };
    }

    return {
      x: window.innerWidth * 0.75 + 130 - viewportCenterX,
      y: targetCenterY - viewportCenterY,
    };
  }

  if (player === "goat") {
    return {
      x: boxCenterX - viewportCenterX,
      y: boxCenterY - viewportCenterY,
    };
  }

  return {
    x: viewportCenterX - boxCenterX,
    y: viewportCenterY - boxCenterY,
  };
}
