import '../styles/main.css';
import '../styles/app.css';
import { ReactNode, useState} from 'react';
import { ControlledInput } from './ControlledInput';
import { executeCommand } from './REPLCommands'; 

/**
 * This is our REPLInputProps which stores the history, sets the history, stores the mode and sets
 * the mode. This allows us to continue to view our previous history and change the outputs depending on 
 * the mode.
 */

export interface REPLInputProps {
  history: { command: string, output: string | ReactNode }[];
  setHistory: (newHistory: { command: string, output: string | ReactNode }[]) => void;
  mode: string;
  setMode: (newMode: string) => void;
}

/**
 * This function sets up our REPLInput. We set a state for the command input, then call on our background
 * class which changes the color of the commmand box depending on the mode (darker for verbose, lighter for brief).
 * We set our response to the return value from execute command (which is the response of the command, exported from  REPLCommands.tsx) 
 * then we have two integrated functions: handleSubmit and handleKeyDown.
 * @param props the REPLInputProps interface which holds and sets the state of history and mode
 * @returns The JSX element representing the REPL input interface.
 */

export function REPLInput(props: REPLInputProps) {
    const [commandString, setCommandString] = useState<string>('');
    const backgroundClass = props.mode === 'brief' ? 'brief-background' : 'verbose-background';

    const response = executeCommand(commandString);
    
    /**
     * Handle submit checks if the submit button was pressed and if mode was passed in it sets the state. Similarly
     * with it sets the history to the command and output passed in then resets the input field. 
     * @param text the input the user writes to the command box
     */
    function handleSubmit(text: string) {

      if (text.toLowerCase() === "mode") {
        props.setMode(props.mode === 'brief' ? 'verbose' : 'brief');
      }

      props.setHistory([...props.history, { command: commandString, output: response }]);

      setCommandString("");
    }
    /**
     * This function allows the user have the option to to press enter to initiate the submit button. 
     * @param event the pressing down of the enter key
     */

    function handleKeyDown(event: React.KeyboardEvent) {
      if (event.key === 'Enter') {
        event.preventDefault(); 
        handleSubmit(commandString);
      }
    }
    /**
     * This manages the display of mock,the interactions of handle keydown and handlesubmit and prompts the user to enter a command.
     */
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
