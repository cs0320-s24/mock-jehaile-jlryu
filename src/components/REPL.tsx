import React, { ReactNode, useState } from 'react'; // Make sure to import useState from 'react'
import '../styles/main.css';
import { REPLHistory } from './REPLHistory';
import { REPLInput } from './REPLInput';

/**
 * This is the REPL component which combines our REPLHistory and REPLInput to manage the Mock site.
 * We created two states, one for history and one for mode which our program is dependent on for different
 * outlooks. 
 * @returns he JSX element representing the REPL interface.
 */

export default function REPL() {
  const [history, setHistory] = useState<{ command: string, output: string | string[] | ReactNode}[]>([]);

  const [mode, setMode] = useState<string>('brief');

  return (
    <div className="repl">
      <REPLHistory history={history} mode={mode} />
      <hr />
      <REPLInput history={history} setHistory={setHistory} mode={mode} setMode={setMode} />
    </div>
  );
}