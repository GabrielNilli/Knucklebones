// =================================
//  IMPORTS
// =================================
import { useNavigate } from "react-router";
import HoldToConfirmButton from "./HoldToConfirmButton";

// =================================
//  COMPONENT
// =================================
export default function DividerAndButton() {
  // =================================
  //  CONSTS
  // =================================
  const navigate = useNavigate();

  // =================================
  //  RENDER
  // =================================
  return (
    <div className="absolute left-0 top-1/2 z-10 flex w-full -translate-y-1/2 items-center pr-10 md:pr-16">
      <HoldToConfirmButton
        className="-ml-7 shrink-0"
        duration={1000}
        onConfirm={() => navigate(-1)}
      >
        Exit
      </HoldToConfirmButton>

      <hr className="-ml-10 -mr-10 h-0 flex-1 border-2 border-[#B52A2E]" />
    </div>
  );
}
