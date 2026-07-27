// =================================
//  INTERFACE
// =================================
interface ScoreCounterProps {
  goatScore: number;
}

// =================================
//  COMPONENT
// =================================
export default function ScoreCounter({ goatScore }: ScoreCounterProps) {
  // =================================
  //  RENDER
  // =================================
  return (
    <>
      <div className="absolute top-3/7 left-1/2 -translate-x-1/2 rotate-180 rounded-md border border-[#B52A2E]/50 bg-gray-600 px-4 py-2 lg:top-[calc(50%_-_210px)] lg:left-1/4 lg:rotate-0">
        <p>{goatScore}</p>
      </div>
    </>
  );
}
