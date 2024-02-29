import React, { ReactNode } from 'react';

interface REPLHistoryProps {
  history: { command: string, output: string | string[] | ReactNode }[];
  mode: string;
}
export function REPLHistory(props: REPLHistoryProps) {
    return (
      <div className="repl-history" aria-label={"history box"}>
        {props.history.map((entry, index) => (
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