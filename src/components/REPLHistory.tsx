import React, { ReactNode } from 'react';

/**
 * This is our REPLHistoryProps interface which stores history which consists of the command and output and
 * the mode. 
 */

interface REPLHistoryProps {
  history: { command: string, output: string | string[] | ReactNode }[];
  mode: 'brief' | 'verbose';
} 
/**
 * Represents the history component for the REPL.
 * This component displays the command history and their corresponding outputs.
 * It shows the history entries based on the current display mode.
 * @param props the REPLHistoryProps interface which holds the history and display mode
 * @returns {JSX.Element} the JSX element representing the REPL history display
 */
export function REPLHistory(props: REPLHistoryProps) {
    return (
      <div className="repl-history" aria-label={"history box"}>
        {props.history.map((entry, index) => (
        <div key={index}>
          {props.mode === 'verbose' && <p>Command: {entry.command}</p>}
          {props.mode === 'verbose' && <p>Output: </p>}
          {Array.isArray(entry.output) ? (
            <div>
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
            <p>{entry.output}</p>
          )}
        </div>
      ))}
    </div>
  );
  }