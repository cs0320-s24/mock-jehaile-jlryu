// Define a type for the response of command execution
import { fileNames } from '/Users/jowet/Desktop/cs320/mock-jehaile-jlryu/data/MockedJSON';

type CommandResponse = {
    isValid: boolean;
    response: string;
  };
  var loadedFile:string[];
  
  // Mocked command execution for demonstration
  const executeCommand = (command: string): CommandResponse => {
    if (command.startsWith("load_file")) {
        // Assuming command is a string with the format "load_file <csv-file-path>"
        const parts = command.split(' '); // Split the command by spaces
        const filePath = parts[1]; 
        if (filePath && fileNames.includes(filePath)){

            loadedFile.push(filePath);

          return {isValid: true, response: "Loading file from path:" + {filePath}};

        
        }
        return {isValid:false, response: "Invalid file name. Reenter a valid file name."}
      }
      if(command.startsWith("view")){
        //if they load a file then type invalid command then want to view the previous should that work?
        //if they load a file and then 

      }
    }
    const executeView()
  
    // Add more commands and their handling logic here
    
    // Default response for unknown commands
    // return { isValid: false, response: "Unknown command" };
  
  
  export { executeCommand, CommandResponse };
  