import React, { ReactNode } from 'react';

interface REPLHistoryProps {
  history: { command: string, output: string | string[] | ReactNode }[];
  mode: 'brief' | 'verbose';
} 
export function REPLHistory(props: REPLHistoryProps) {
    return (
      <div className="repl-history" aria-label={"history box"}>
        {props.history.map((entry, index) => (
        <div key={index}>
          {props.mode === 'verbose' && <p>Command: {entry.command}</p>}
          
          {Array.isArray(entry.output) ? (
            <div>
              {props.mode === 'verbose' && <p>Output:</p>}
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