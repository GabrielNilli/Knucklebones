// =================================
//  COMPONENT
// =================================
export default function ScoresTable() {
  // =================================
  //  CONSTS
  // =================================
  const scores = [
    { value: 1, one: 1, two: 4, three: 9 },
    { value: 2, one: 2, two: 8, three: 18 },
    { value: 3, one: 3, two: 12, three: 27 },
    { value: 4, one: 4, two: 16, three: 36 },
    { value: 5, one: 5, two: 20, three: 45 },
    { value: 6, one: 6, two: 24, three: 54 },
  ];

  // =================================
  //  RENDER
  // =================================
  return (
    <div className="mx-auto w-full max-w-md overflow-hidden rounded-xl border border-[#B52A2E]/30 bg-[#1a1a1a] shadow-2xl">
      <div className="w-full overflow-hidden">
        <table className="w-full table-fixed border-collapse font-mono text-xs sm:text-sm">
          <thead>
            <tr className="bg-[#B52A2E] text-xs font-bold tracking-wide text-white uppercase sm:tracking-widest">
              <th scope="col" className="px-2 py-3 text-left md:px-6 md:py-4">
                <span className="sm:hidden">Die</span>
                <span className="hidden sm:inline">Die Value</span>
              </th>
              <th scope="col" className="px-2 py-3 text-center md:px-6 md:py-4">
                <span className="sm:hidden">1</span>
                <span className="hidden sm:inline">1 Die</span>
              </th>
              <th scope="col" className="px-2 py-3 text-center md:px-6 md:py-4">
                <span className="sm:hidden">2</span>
                <span className="hidden sm:inline">2 Dice</span>
              </th>
              <th scope="col" className="px-2 py-3 text-center md:px-6 md:py-4">
                <span className="sm:hidden">3</span>
                <span className="hidden sm:inline">3 Dice</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#B52A2E]/10">
            {scores.map((row, index) => (
              <tr
                key={row.value}
                className={`
                  transition-colors duration-200 ease-in-out
                  ${index % 2 === 0 ? "bg-[#292E34]" : "bg-[#3F4449]"}
                  text-white
                  hover:bg-[#B52A2E]/20 hover:cursor-default
                `}
              >
                <td className="px-2 py-3 font-bold text-[#E63946] md:px-6 md:py-4">
                  {row.value}
                </td>
                <td className="px-2 py-3 text-center md:px-6 md:py-4">
                  {row.one}
                </td>
                <td className="px-2 py-3 text-center md:px-6 md:py-4">
                  {row.two}
                </td>
                <td className="px-2 py-3 text-center md:px-6 md:py-4">
                  {row.three}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
