// =================================
//  INTERFACE
// =================================
interface ScoreCounterProps {
  lambScore: number;
}

// =================================
//  COMPONENT
// =================================
export default function ScoreCounter({ lambScore }: ScoreCounterProps) {
  // =================================
  //  RENDER
  // =================================
  return (
    <>
      <div className="absolute bottom-3/7 left-1/2 -translate-x-1/2 rounded-md border border-[#B52A2E]/50 bg-gray-600 px-4 py-2 lg:top-[calc(50%_-_210px)] lg:bottom-auto lg:left-3/4">
        <p>{lambScore}</p>
      </div>
    </>
  );
}
