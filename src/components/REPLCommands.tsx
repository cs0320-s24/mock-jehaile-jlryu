import {load, view, search} from './CommandHandler'

export interface REPLFunction {    
  (args: string[]): string | string[][] | undefined;//define a standard for how functions that execute commands should be strucutered, takes in command line arguments passed by user, and returns either a single string or a 2d array of strings as output
}
const commandMap = new Map<string, REPLFunction>();


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
  