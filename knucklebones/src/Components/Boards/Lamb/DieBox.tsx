// =================================
//  INTERFACE
// =================================
interface DieBoxProps {
  die: string | null;
}

// =================================
//  COMPONENT
// =================================
export default function DieBox({ die }: DieBoxProps) {
  // =================================
  //  RENDER
  // =================================
  return (
    <>
      <div className="absolute right-12 bottom-8 flex h-[80px] w-[80px] items-center justify-center rounded-xl border-2 border-solid border-[#B52A2E] bg-[#1a1a1a] p-3 shadow-[0_0_20px_rgba(181,42,46,0.3)] lg:top-[calc(50%_+_160px)] lg:right-auto lg:bottom-auto lg:left-[calc(75%_+_90px)]">
        {die && (
          <img
            src={die}
            alt="Last rolled die"
            className="h-full w-full object-contain"
          />
        )}
      </div>
    </>
  );
}
