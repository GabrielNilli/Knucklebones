// =================================
//  IMPORTS
// =================================
import { useState } from "react";
import GoatCoinFace from "./../Images/Items/CoinFaces/GoatCoinFace.png";
import LambCoinFace from "./../Images/Items/CoinFaces/LambCoinFace.png";

// =================================
//  TYPES
// =================================
export type CoinTossWinner = "goat" | "lamb";

interface CoinTossEventProps {
  onResult?: (result: CoinTossWinner) => void;
}

// =================================
//  COMPONENT
// =================================
export default function CoinTossEvent({ onResult }: CoinTossEventProps) {
  // =================================
  //  CONSTS
  // =================================
  const [isTossing, setIsTossing] = useState(false);
  const [result, setResult] = useState<CoinTossWinner | null>(null);
  const [showOverlay, setShowOverlay] = useState(true);
  const [rotation, setRotation] = useState(0);

  // =================================
  //  FUNCTIONS
  // =================================
  const handleStartToss = () => {
    if (isTossing) {
      return;
    }

    setIsTossing(true);
    setResult(null);

    const winner: CoinTossWinner = Math.random() < 0.5 ? "goat" : "lamb";
    const targetFaceRotation = winner === "goat" ? 0 : 180;
    const normalizedRotation = ((rotation % 360) + 360) % 360;
    const rotationToWinner =
      (targetFaceRotation - normalizedRotation + 360) % 360;

    setRotation(rotation + 360 * 6 + rotationToWinner);

    window.setTimeout(() => {
      setResult(winner);
      setIsTossing(false);
      onResult?.(winner);
    }, 2000);
  };

  const handleClose = () => {
    setShowOverlay(false);
  };

  // =================================
  //  RENDER
  // =================================
  if (!showOverlay) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0a]/95 flex flex-col items-center justify-center">
      <div className="relative z-10 flex rotate-90 flex-col items-center justify-center">
        {/* Titolo */}
        <h2 className="mb-2 text-2xl font-bold text-[#B52A2E] font-mono uppercase tracking-widest animate-pulse md:mb-12 md:text-6xl">
          Coin Toss
        </h2>

        {/* Contenitore della moneta */}
        <div
          className="h-40 w-40 sm:h-44 sm:w-44 md:h-80 md:w-80"
          style={{ perspective: "1000px" }}
        >
          <div
            className={`h-full w-full transition-transform duration-[2000ms] ease-out ${
              isTossing ? "scale-110 md:scale-150" : "scale-100"
            }`}
          >
            <div
              className="relative h-full w-full transition-transform duration-[2000ms] ease-out"
              style={{
                transform: `rotateY(${rotation}deg)`,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Faccia Goat */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  src={GoatCoinFace}
                  alt="Goat Face"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Faccia Lamb */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <img
                  src={LambCoinFace}
                  alt="Lamb Face"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Risultato */}
        {result && !isTossing && (
          <div className="mt-2 text-center md:mt-12">
            <h3 className="mb-1 text-xl font-bold text-white font-mono uppercase tracking-wider md:mb-2 md:text-5xl">
              {result === "goat" ? "Goat Wins!" : "Lamb Wins!"}
            </h3>
            <p className="text-sm text-[#B52A2E] font-mono uppercase md:text-lg">
              First Turn
            </p>
          </div>
        )}

        {/* Bottone Iniziale */}
        {!isTossing && !result && (
          <button
            onClick={handleStartToss}
            className="mt-2 px-4 py-2 bg-[#B52A2E] hover:bg-[#E63946]
              text-white font-bold font-mono text-sm uppercase tracking-widest md:mt-12 md:px-8 md:py-4 md:text-xl
              border-2 border-[#B52A2E] rounded-lg
              shadow-[0_0_20px_rgba(181,42,46,0.5)]
              hover:shadow-[0_0_30px_rgba(181,42,46,0.8)]
              transition-all duration-300 hover:scale-105"
          >
            Toss Coin
          </button>
        )}

        {/* Bottone per chiudere dopo il risultato */}
        {result && !isTossing && (
          <button
            onClick={handleClose}
            className="mt-2 px-4 py-2 bg-transparent hover:bg-[#B52A2E]/20
              text-[#B52A2E] font-bold font-mono text-sm uppercase tracking-wider md:mt-8 md:px-6 md:py-3 md:text-lg
              border-2 border-[#B52A2E] rounded-lg
              transition-all duration-300 hover:scale-105"
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
}
