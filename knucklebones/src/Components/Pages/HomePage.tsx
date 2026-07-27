// =================================
//  IMPORTS
// =================================
import LambHomePage from "./../Images/Home/LambHomePage.webp";
import KnuckleBonesLogo from "./../Images/Home/KnuckleBonesLogo.png";
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
            className="mb-6 w-40 object-contain drop-shadow-[0_0_15px_rgba(181,42,46,0.5)] w-62 lg:w-56"
          />
          <img
            src={KnuckleBonesLogo}
            alt="Knucklebones"
            className="-my-8 w-[88vw] max-w-[620px] object-contain drop-shadow-[0_0_15px_rgba(181,42,46,0.5)] lg:max-h-[42vh] lg:max-w-[680px]"
          />
          <p className="mb-8 max-w-[90vw] px-4 text-center font-mono text-base text-white sm:text-lg">
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
