// =================================
//  IMPORTS
// =================================
import GenericButton from "./../UI/GenericButton";
import { useNavigate } from "react-router";
import ScoresTable from "./../UI/ScoresTable";
import ForneusIdle from "./../Images/Characters/Forneus/ForneusIdle.gif";

// =================================
//  COMPONENT
// =================================
export default function RulesPage() {
  // =================================
  //  CONSTS
  // =================================
  const navigate = useNavigate();

  // =================================
  //  RENDER
  // =================================
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-12 flex flex-col items-center justify-start">
      <div className="w-full max-w-3xl space-y-8">
        {/* HEADER */}
        <div className="text-center space-y-4">
          {/* GIF DEL PERSONAGGIO */}
          <div className="flex justify-center mb-3">
            <img
              src={ForneusIdle}
              alt="Game Character"
              className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-[0_0_15px_rgba(181,42,46,0.5)] rounded-full border-2 border-[#B52A2E]/50"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#B52A2E] uppercase tracking-widest font-mono drop-shadow-md">
            How to Play
          </h1>
          <p className="text-xl text-gray-300 font-mono italic border-l-4 border-[#B52A2E] pl-4 mx-auto max-w-lg text-left">
            Knucklebones is a dice game of risk and reward.
          </p>
        </div>

        {/* CORE MECHANICS */}
        <div className="space-y-6 text-gray-200 font-mono leading-relaxed text-sm md:text-base">
          <p>
            The game consists of two{" "}
            <span className="text-[#E63946] font-bold">3x3 boards</span>, each
            belonging to their respective player.
          </p>
          <p>
            Players take turns. On a player's turn, they roll a single 6-sided
            die and must place it in a column on their board. A filled column
            does not accept any more dice.
          </p>
        </div>

        {/* SCORING SECTION (Highlighted Box) */}
        <div className="bg-[#1a1a1a] border border-[#B52A2E]/30 rounded-xl p-6 md:p-8 shadow-2xl">
          <h2 className="text-[#E63946] font-bold text-lg mb-4 uppercase tracking-wide flex items-center gap-2">
            <span className="text-2xl">🎲</span> Scoring Mechanic
          </h2>

          <p className="mb-4 text-gray-300">
            Each player has a score, which is the sum of all the dice values on
            their board. If a player places multiple dice of the{" "}
            <span className="text-white font-bold">same value</span> in the same
            column, the score awarded for each of those dice is multiplied by
            the number of dice of that value in that column.
          </p>

          <div className="bg-[#0a0a0a] rounded-lg p-4 mb-6 border border-gray-800">
            <p className="text-sm text-gray-400 mb-2 uppercase tracking-wider font-bold">
              Example:
            </p>
            <p className="text-gray-300">
              If a column contains{" "}
              <span className="text-[#E63946] font-bold text-lg">
                4 - 1 - 4
              </span>
              , the score for that column is calculated as:
            </p>
            <p className="text-white font-bold text-lg mt-2 font-mono text-center">
              (4 × 2) + (1 × 1) + (4 × 2) ={" "}
              <span className="text-[#E63946]">17</span>
            </p>
          </div>

          <p className="text-sm text-gray-400 mb-4 text-center uppercase tracking-wider">
            Multiplication Reference Table
          </p>
          <div className="flex justify-center">
            <ScoresTable />
          </div>
        </div>

        {/* COMBAT & VICTORY */}
        <div className="space-y-6 text-gray-200 font-mono leading-relaxed text-sm md:text-base">
          <div className="flex gap-4 items-start">
            <span className="text-[#E63946] text-2xl mt-1">⚔️</span>
            <p>
              <span className="text-white font-bold">Destruction:</span> When a
              player places a die, all dice of the{" "}
              <span className="text-[#E63946]">same value</span> in the
              corresponding column of the opponent's board get destroyed. Use
              this mechanic strategically to dismantle your opponent's
              high-scoring combos.
            </p>
          </div>

          <div className="flex gap-4 items-start">
            <span className="text-[#E63946] text-2xl mt-1">🏆</span>
            <p>
              <span className="text-white font-bold">Victory:</span> The game
              ends when either player completely fills up their 3x3 board. The
              player with the higher score wins the match.
            </p>
          </div>
        </div>

        {/* FOOTER ACTION */}
        <div className="flex justify-center pt-8 pb-12">
          <GenericButton variant="secondary" onClick={() => navigate(-1)}>
            Go Back
          </GenericButton>
        </div>
      </div>
    </div>
  );
}
