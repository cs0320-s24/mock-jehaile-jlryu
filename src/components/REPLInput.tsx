import '../styles/main.css';
import '../styles/app.css';
import { Dispatch, ReactNode, SetStateAction, useState} from 'react';
import { ControlledInput } from './ControlledInput';
import { executeCommand } from './REPLCommands'; 

export interface REPLInputProps {
  history: { command: string, output: string | ReactNode }[];
  setHistory: (newHistory: { command: string, output: string | ReactNode }[]) => void;
  mode: string;
  setMode: (newMode: string) => void;
}


export function REPLInput(props: REPLInputProps) {
    const [commandString, setCommandString] = useState<string>('');
    const backgroundClass = props.mode === 'brief' ? 'brief-background' : 'verbose-background';

    const {response} = executeCommand(commandString);
    
    function handleSubmit(text: string) {

      if (text.toLowerCase() === "mode") {
        props.setMode(props.mode === 'brief' ? 'verbose' : 'brief');
      }

      props.setHistory([...props.history, { command: commandString, output: response }]);

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
