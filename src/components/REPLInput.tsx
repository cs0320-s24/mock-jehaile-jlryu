import '../styles/main.css';
import '../styles/app.css';
// import { Dispatch, SetStateAction, useState} from 'react';
// import { ControlledInput } from './ControlledInput';

// interface REPLInputProps{

//   history: string[]; //keep track of every single command
//   setHistory: Dispatch<SetStateAction<string[]>>; //setHistory is used to maintaint the state of the list, managing everything before what recently happens
//   mode: string;
//   setMode: (mode: string) => void;
// }
// // You can use a custom interface or explicit fields or both! An alternative to the current function header might be:
// // REPLInput(history: string[], setHistory: Dispatch<SetStateAction<string[]>>)
// export function REPLInput(props : REPLInputProps) {
//     // Remember: let React manage state in your webapp. 
//     const [commandString, setCommandString] = useState<string>('');
//     const [count, setCount] = useState<number>(0);
//     const [modeChanged, setModeChange] = useState<string> ('brief');
    

//     const backgroundClass = modeChanged === 'brief' ? 'brief-background' : 'verbose-background';

//     function handleSubmit(text: string){
//       setCount(count + 1);
//       props.setHistory([...props.history, text]); //... means everything before in the history plus the new commandString
//       setCommandString("")
//       handleChangeMode(text);
//     }

//     function handleChangeMode(text: string){
//       // if(text.toLowerCase() == "mode" && modeChanged == "brief"){
//       //   setModeChange("verbose")
//       // }else if(text.toLowerCase() == "mode" && modeChanged == "verbose"){
//       //   setModeChange("brief")
//       // }
//       if (text.toLowerCase() === "mode") {
//         setModeChange(props.mode === 'brief' ? 'verbose' : 'brief');
//     }
//     }

//     return (
//         <div className={`repl-input ${backgroundClass}`}>
//             <fieldset>
//               <legend>Enter a command:</legend>
//               <ControlledInput value={commandString} setValue={setCommandString} ariaLabel={"Command input"}/>
//             </fieldset>
//             <button aria-label={"Submit"} onClick={() => handleSubmit(commandString)}>Submitted {count} times</button>
//         </div>
//     );
//   }
import { useState } from 'react';
import { ControlledInput } from './ControlledInput';

interface REPLInputProps {
  history: string[];
  setHistory: (newHistory: string[]) => void;
  mode: string;
  setMode: (newMode: string) => void;
}

export function REPLInput(props: REPLInputProps) {
    const [commandString, setCommandString] = useState<string>('');
    const [count, setCount] = useState<number>(0);
    
    function handleSubmit(text: string) {
      setCount(count + 1);
      props.setHistory([...props.history, text]); // Adds the command to the history
      setCommandString(""); // Resets the input field
      
      // Checks if the input is "mode" to toggle between brief and verbose
      if (text.toLowerCase() === "mode") {
        props.setMode(props.mode === 'brief' ? 'verbose' : 'brief');
      }
    }

    // Uses the mode from props for conditional rendering
    const backgroundClass = props.mode === 'brief' ? 'brief-background' : 'verbose-background';

    return (
        <div className={`repl-input ${backgroundClass}`}>
            <fieldset>
                <legend>Enter a command:</legend>
                <ControlledInput value={commandString} setValue={setCommandString} ariaLabel={"Command input"}/>
            </fieldset>
            <button aria-label={"Submit"} onClick={() => handleSubmit(commandString)}>Submitted {count} times</button>
        </div>
    );
}
