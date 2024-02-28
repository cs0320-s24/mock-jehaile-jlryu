import React, { useState } from 'react'; // Make sure to import useState from 'react'
import '../styles/main.css';
import { REPLHistory } from './REPLHistory';
import { REPLInput } from './REPLInput';

export default function REPL() {
  // TODO: Add some kind of shared state that holds all the commands submitted.

  // const [history, setHistory] = useState<{ command: string, output: string[][] }[]>([]);
  const [history, setHistory] = useState<{ command: string, output: string | string[] }[]>([]);

  const [mode, setMode] = useState<string>('brief');

  return (
    <div className="repl">
       {/*This is where your REPLHistory might go... You also may choose to add it within your REPLInput 
//       component or somewhere else depending on your component organization. What are the pros and cons of each? */}
//       {/* TODO: Update your REPLHistory and REPLInput to take in new shared state as props */}
      <REPLHistory history2={history} mode={mode} />
      <hr />
      <REPLInput history={history} setHistory={setHistory} mode={mode} setMode={setMode} />
    </div>
  );
}