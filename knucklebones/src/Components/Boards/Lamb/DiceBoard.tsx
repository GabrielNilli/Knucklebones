// =================================
//  INTERFACE
// =================================
interface DiceColumn {
  id: number;
  dice: number[];
}

interface DiceBoardProps {
  columns: DiceColumn[];
  dieFaces: string[];
  handleColumnSelection: (columnId: number) => void;
}

// =================================
//  COMPONENT
// =================================
export default function DiceBoard({
  columns,
  dieFaces,
  handleColumnSelection,
}: DiceBoardProps) {
  // =================================
  //  RENDER
  // =================================
  return (
    <>
      <div className="absolute bottom-30 left-1/2 h-[250px] w-[320px] -translate-x-1/2 transform rounded-xl border-2 border-solid border-[#B52A2E] bg-[#1a1a1a] p-4 shadow-[0_0_20px_rgba(181,42,46,0.3)] lg:top-1/2 lg:bottom-auto lg:left-3/4 lg:h-[255px] lg:w-[340px] lg:-translate-y-1/2">
        {/* Columns */}
        <div className="flex h-[215px] justify-between gap-3 lg:h-[220px]">
          {columns.map((column) => (
            <div
              key={column.id}
              className="flex-1 bg-[#292E34] border-2 border-[#B52A2E]/40 rounded-lg p-2 flex flex-col items-center"
            >
              {/* Dice tray */}
              <div
                className="w-full flex-1 bg-[#0a0a0a]/30 rounded border border-[#B52A2E]/20"
                onClick={() => {
                  handleColumnSelection(column.id);
                }}
              >
                {column.dice.length > 0 ? (
                  column.dice.map((dieValue, index) => (
                    <img
                      key={index}
                      src={dieFaces[dieValue - 1]}
                      alt={`Face ${dieValue}`}
                      className="h-16 w-16 object-contain"
                    />
                  ))
                ) : (
                  <span />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
