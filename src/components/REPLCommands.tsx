import {load, view, search} from './CommandHandler'

/**
 * REPLCommandResponse interface which holds the args, and the output which can either be a string (load),
 * a 2d array of strings (view, search) or undefined (if the user tr)
 */
export interface REPLCommandResponse {    
  (args: string[]): string | string[][] | undefined;//define a standard for how functions that execute commands should be strucutered, takes in command line arguments passed by user, and returns either a single string or a 2d array of strings as output
}
const commandMap = new Map<string, REPLCommandResponse>();

/**
 * This is our function that takes in the command and returns its output. We handle load, search and view by 
 * calling on their respective functions exported from CommandHandler passing in the arguments typed in the
 * command box. We handle mode by printing out a string indicating the mode was switched. Lastly if none of 
 * these cases are enacted or a developer does not add a new case and corresponding response then we display an error
 * message. 
 * @param command the string command to be executed
 * @returns the result of executing the command or an error description, as a string, 2D array of strings or undefined value (when .get fails)
 */

const executeCommand = (command: string): string | string[][] | undefined => {
  const args = command.split(' ');
  const commandName = args[0];

  switch (commandName) {
      case 'load_file':
          return load(args);
      case 'view':
          return view(args);
      case 'search':
          return search(args);
      case 'mode':
          return "mode switched"
      default:
          return "Invalid command. Please try again.";
  }
};

export { executeCommand };
  