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
    <div className="absolute left-0 top-1/2 z-10 flex w-full -translate-y-1/2 items-center pr-10 md:pr-16 lg:left-1/2 lg:top-0 lg:h-full lg:w-auto lg:-translate-x-1/2 lg:translate-y-0 lg:flex-col lg:justify-center lg:pr-0">
      <HoldToConfirmButton
        className="-ml-7 shrink-0 lg:order-2 lg:mt-4 lg:ml-0"
        duration={1000}
        onConfirm={() => navigate(-1)}
      >
        Exit
      </HoldToConfirmButton>

      <hr className="-ml-10 -mr-10 h-0 flex-1 border-2 border-[#B52A2E] lg:order-1 lg:mx-0 lg:h-full lg:w-0" />
    </div>
  );
}
