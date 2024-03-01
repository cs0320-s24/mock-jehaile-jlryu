import '../styles/main.css';
import { Dispatch, SetStateAction } from 'react';

/**
 * This is our ControlledInputProps which consists of a value string, a setter to set the va;ue. the
 * aria label string, and hte key down event
 */
interface ControlledInputProps {
    value: string, 
    // This type comes from React+TypeScript. VSCode can suggest these.
    //   Concretely, this means "a function that sets a state containing a string"
    setValue: Dispatch<SetStateAction<string>>,
    ariaLabel: string 
    onKeyDown?: (event: React.KeyboardEvent<Element>) => void; 
    }
  
  // Input boxes contain state. We want to make sure React is managing that state,
  //   so we have a special component that wraps the input box.
  /**
   * This componenet is called in REPLInput component to manage the input box state. 
   * @param param0 the props containing the value, setValue function, ariaLabel, and optional onKeyDown function.
   * @returns the JSX element representing the controlled input box.
   */
  export function ControlledInput({value, setValue, ariaLabel, onKeyDown}: ControlledInputProps) {
    return (
      <input type="text" className="repl-command-box"
            value={value} 
            placeholder="Enter command here!"
            onChange={(ev) => setValue(ev.target.value)}
            aria-label={ariaLabel}
            onKeyDown={onKeyDown} 
            >
      </input>
    );
  }