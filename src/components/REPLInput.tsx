import '../styles/main.css';
import '../styles/app.css';
import { Dispatch, SetStateAction, useState} from 'react';
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
    // Uses the mode from props for conditional rendering
    const backgroundClass = props.mode === 'brief' ? 'brief-background' : 'verbose-background';
    
    function handleSubmit(text: string) {
      setCount(count + 1);
      props.setHistory([...props.history, text]); // Adds the command to the history
      setCommandString(""); // Resets the input field
      // Checks if the input is "mode" to toggle between brief and verbose
      if (text.toLowerCase() === "mode") {
        props.setMode(props.mode === 'brief' ? 'verbose' : 'brief');
      }
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
            <button aria-label={"Submit"} onClick={() => handleSubmit(commandString)}>Submitted {count} times</button>
        </div>
    );
}
