// =================================
//  IMPORTS
// =================================
import LambHomePage from "./../Images/Home/LambHomePage.webp";
import knucklebonesLogoText from "./../Images/Home/knucklebonesLogoText.webp";
import GenericButton from "./../UI/GenericButton";
import RuneBG from "./../UI/RuneBG";
import { useNavigate } from "react-router";

// =================================
//  COMPONENT
// =================================
export default function HomePage() {
  // =================================
  //  CONSTS
  // =================================
  const navigate = useNavigate();

  // =================================
  //  RENDER
  // =================================
  return (
    <>
      <div className="relative bg-[#0a0a0a] h-screen w-screen flex flex-col items-center justify-center overflow-hidden">
        <RuneBG count={25} />

        <div className="relative z-10 flex flex-col items-center">
          <img
            src={LambHomePage}
            alt="Lamb"
            className="mb-8 drop-shadow-[0_0_15px_rgba(181,42,46,0.5)]"
          />
          <img src={knucklebonesLogoText} alt="Knucklebones" className="mb-6" />
          <p className="text-white text-lg mb-8 font-mono">
            An app inspired by the in-game dice game.
          </p>
          <GenericButton variant="primary" onClick={() => navigate("/game")}>
            Begin
          </GenericButton>
          <br />
          <GenericButton variant="secondary" onClick={() => navigate("/rules")}>
            How to play
          </GenericButton>
        </div>
      </div>
    </>
  );
}
