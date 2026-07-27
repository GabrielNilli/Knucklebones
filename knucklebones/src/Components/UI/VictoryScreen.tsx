// =================================
// IMPORTS
// =================================
import GoatWin from "../Images/Characters/Goat/GoatWin.gif";
import LambWin from "../Images/Characters/Lamb/LambWin.gif";
import GenericButton from "./GenericButton";
import { useNavigate } from "react-router";

import type { CoinTossWinner } from "./CoinTossEvent";

// =================================
// TYPES
// =================================
type GameResult = CoinTossWinner | "draw";

// =================================
// INTERFACE
// =================================
interface VictoryScreenProps {
  result: GameResult;
  goatScore: number;
  lambScore: number;
  onPlayAgain: () => void;
}

// =================================
// COMPONENT
// =================================
export default function VictoryScreen({
  result,
  goatScore,
  lambScore,
  onPlayAgain,
}: VictoryScreenProps) {
  // =================================
  // CONSTS
  // =================================
  const navigate = useNavigate();
  const winnerImage = result === "goat" ? GoatWin : LambWin;
  const winnerLabel = result === "goat" ? "Goat Wins" : "Lamb Wins";
  const actionsPosition =
    result === "goat"
      ? "top-[16%] rotate-180 lg:top-auto lg:bottom-[14%] lg:rotate-0"
      : "bottom-[14%]";

  // =================================
  // RENDER
  // =================================
  return (
    <div
      className="fixed inset-0 isolate flex items-center justify-center bg-[#0a0a0a]"
      style={{ zIndex: 9999 }}
    >
      {result === "draw" ? (
        <div className="font-mono text-5xl font-bold uppercase text-white">
          Draw
        </div>
      ) : (
        <>
          <img
            src={winnerImage}
            alt={winnerLabel}
            className={`h-[92vh] w-[92vw] object-contain ${
              result === "goat" ? "rotate-180 lg:rotate-0" : ""
            }`}
          />

          <div
            className={`
              absolute
              left-1/2
              -translate-x-1/2
              font-mono
              text-3xl
              font-bold
              uppercase
              tracking-widest
              text-white
              ${
                result === "goat"
                  ? "top-8 rotate-180 lg:top-auto lg:bottom-8 lg:rotate-0"
                  : "bottom-8"
              }
            `}
          >
            {winnerLabel}
          </div>
        </>
      )}

      <div className="absolute right-3 bottom-3 font-mono text-sm uppercase text-[#B52A2E]">
        Goat {goatScore} / Lamb {lambScore}
      </div>

      <div
        className={`
          absolute
          left-1/2
          z-10
          flex
          -translate-x-1/2
          flex-row
          gap-3
          ${actionsPosition}
        `}
      >
        <GenericButton
          variant="secondary"
          className="h-11 px-5 py-2 text-sm md:h-14 md:px-8 md:text-xl"
          onClick={() => navigate("/")}
        >
          Home
        </GenericButton>

        <GenericButton
          variant="primary"
          className="h-11 px-5 py-2 text-sm md:h-14 md:px-8 md:text-xl"
          onClick={onPlayAgain}
        >
          Replay
        </GenericButton>
      </div>
    </div>
  );
}
