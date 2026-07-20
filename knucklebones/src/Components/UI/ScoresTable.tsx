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
    <div className="w-full max-w-md mx-auto overflow-hidden rounded-xl shadow-2xl border border-[#B52A2E]/30 bg-[#1a1a1a]">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm font-mono">
          <thead>
            <tr className="bg-[#B52A2E] text-white uppercase tracking-widest text-xs font-bold">
              <th scope="col" className="px-6 py-4 text-left">
                Die Value
              </th>
              <th scope="col" className="px-6 py-4 text-center">
                1 Die
              </th>
              <th scope="col" className="px-6 py-4 text-center">
                2 Dice
              </th>
              <th scope="col" className="px-6 py-4 text-center">
                3 Dice
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
                <td className="px-6 py-4 font-bold text-[#E63946]">
                  {row.value}
                </td>
                <td className="px-6 py-4 text-center">{row.one}</td>
                <td className="px-6 py-4 text-center">{row.two}</td>
                <td className="px-6 py-4 text-center">{row.three}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
