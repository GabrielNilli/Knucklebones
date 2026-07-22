// =================================
//  COMPONENT
// =================================
export default function DiceBoard({ columns }) {
  // =================================
  //  RENDER
  // =================================
  return (
    <>
      <div className="absolute bottom-30 left-1/2 transform -translate-x-1/2 bg-[#1a1a1a] border-2 border-solid border-[#B52A2E] rounded-xl p-4 w-[320px] h-[250px] shadow-[0_0_20px_rgba(181,42,46,0.3)]">
        {/* Columns */}
        <div className="flex justify-between gap-3 h-[215px]">
          {columns.map((column) => (
            <div
              key={column.id}
              className="flex-1 bg-[#292E34] border-2 border-[#B52A2E]/40 rounded-lg p-2 flex flex-col items-center"
            >
              {/* Dice tray */}
              <div className="w-full flex-1 bg-[#0a0a0a]/30 rounded border border-[#B52A2E]/20">
                {column.dice.length > 0 ? (
                  column.dice.map((diceImg, index) => (
                    <img
                      key={index}
                      src={diceImg}
                      alt={`Face ${index + 1}`}
                      className="w-16 h-16 object-contain"
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
