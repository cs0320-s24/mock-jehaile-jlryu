import '../styles/main.css';
import '../styles/app.css';
import { Dispatch, SetStateAction, useState} from 'react';
import { ControlledInput } from './ControlledInput';
import { executeCommand } from './REPLCommands'; 

// interface REPLInputProps {
//   history: string[];
//   setHistory: (newHistory: string[]) => void;
//   mode: string;
//   setMode: (newMode: string) => void;
// }
export interface REPLInputProps {
  history: { command: string, output: string | JSX.Element }[];
  setHistory: (newHistory: { command: string, output: string | JSX.Element }[]) => void;
  mode: string;
  setMode: (newMode: string) => void;
}


export function REPLInput(props: REPLInputProps) {
    const [commandString, setCommandString] = useState<string>('');
    // Uses the mode from props for conditional rendering
    const backgroundClass = props.mode === 'brief' ? 'brief-background' : 'verbose-background';

    const {response} = executeCommand(commandString);
    // const { response } = executeCommand(commandString, props);

      // const {isValid, 
      //   response} = executeCommand(commandString);
  
    // function handleCommand(text: string){
    //   if(text.toLowerCase()== "load"){
    //     text[1] ==
    //   }
    // }
    function handleSubmit(text: string) {
      const response: string = "your response here";

      // Checks if the input is "mode" to toggle between brief and verbose
      if (text.toLowerCase() === "mode") {
        props.setMode(props.mode === 'brief' ? 'verbose' : 'brief');
      }

      //Added for other commands, we may need to remove the mode case and incorporate it into the block below
      props.setHistory([...props.history, { command: commandString, output: response }]);

      // props.setHistory([...props.history,`${commandString}`, `${response}`]); // Adds the command and its output to the history

      setCommandString(""); // Resets the input field
    }

    function handleKeyDown(event: React.KeyboardEvent) {
      if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default action to avoid submitting the form
        handleSubmit(commandString);
      }
    }

    return (
        <div className={`repl-input ${backgroundClass}`}>
            <fieldset>
                <legend>Enter a command:</legend>
                <ControlledInput 
                value={commandString} 
                setValue={setCommandString} 
                ariaLabel={"Command input"} 
                onKeyDown={handleKeyDown} 
                />
            </fieldset>
            <button aria-label={"Submit"} onClick={() => handleSubmit(commandString)}>Submit</button>

        </div>
    );
}
