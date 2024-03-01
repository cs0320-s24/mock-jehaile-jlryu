import React, { ReactNode, useState } from 'react'; // Make sure to import useState from 'react'
import '../styles/main.css';
import { REPLHistory } from './REPLHistory';
import { REPLInput } from './REPLInput';


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