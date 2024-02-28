// import '../styles/main.css';

// interface REPLHistoryProps{
//     // history: string[];
//     history2: {command:string, output: string[][]};
//     mode: string;
// }
// export function REPLHistory(props : REPLHistoryProps) {
//     return (
//         <div className="repl-history" aria-label={"history box"}>
//             {props.history2.map((command) => <p>{command}</p>)}
//         </div>
//     );
// }

// interface REPLHistoryProps {
//     history2: { command: string, output: string[][] }[];
//     mode: string;
// }

// export function REPLHistory(props: REPLHistoryProps) {
//     return (
//         <div className="repl-history" aria-label={"history box"}>
//             {props.history2.map((entry, index) => (
//                 <div key={index}>
//                     <p>Command: {entry.command}</p>
//                     <p>Output: {JSON.stringify(entry.output)}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }
import React from 'react';

interface REPLHistoryProps {
  history2: { command: string, output: string | string[] }[];
  mode: string;
}
export function REPLHistory(props: REPLHistoryProps) {
    return (
      <div className="repl-history" aria-label={"history box"}>
        {props.history2.map((entry, index) => (
          <div key={index}>
            <p>Command: {entry.command}</p>
            {Array.isArray(entry.output) ? (
              <div>
                <p>Output:</p>
                <table>
                  <tbody>
                    {entry.output.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {Array.isArray(row) ? (
                          row.map((cell, cellIndex) => (
                            <td key={cellIndex}>{cell}</td>
                          ))
                        ) : (
                          <td>{row}</td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p>Output: {entry.output}</p>
            )}
          </div>
        ))}
      </div>
    );
  }
  
// export function REPLHistory(props: REPLHistoryProps) {
//   return (
//     <div className="repl-history" aria-label={"history box"}>
//       {props.history2.map((entry, index) => (
//         <div key={index}>
//           <p>Command: {entry.command}</p>
//           {Array.isArray(entry.output) ? (
//             <div>
//               <p>Output:</p>
//               <table>
//                 <tbody>
//                   {entry.output.map((row, rowIndex) => (
//                     <tr key={rowIndex}>
//                       {row.map((cell, cellIndex) => (
//                         <td key={cellIndex}>{cell}</td>
//                       ))}
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           ) : (
//             <p>Output: {entry.output}</p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }


// export function REPLHistory(props: REPLHistoryProps) {
//   return (
//     <div className="repl-history" aria-label={"history box"}>
//       {props.history2.map((entry, index) => (
//         <div key={index}>
//           <p>Command: {entry.command}</p>
//           <p>Output:</p>
//           <table>
//             <tbody>
//               {entry.output.map((row, rowIndex) => (
//                 <tr key={rowIndex}>
//                   {row.map((cell, cellIndex) => (
//                     <td key={cellIndex}>{cell}</td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ))}
//     </div>
//   );
// }

