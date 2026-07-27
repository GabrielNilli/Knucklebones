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
      <div className="absolute top-8 left-12 flex h-[80px] w-[80px] rotate-180 items-center justify-center rounded-xl border-2 border-solid border-[#B52A2E] bg-[#1a1a1a] p-3 shadow-[0_0_20px_rgba(181,42,46,0.3)] lg:top-[calc(50%_+_160px)] lg:left-[calc(25%_-_170px)] lg:rotate-0">
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
