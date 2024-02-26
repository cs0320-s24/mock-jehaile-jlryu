import {fileDataArray} from "/Users/jiminryu/Desktop/cs0320/mock-jehaile-jlryu/data/MockedJSON";

type CommandResponse = {
    isValid: boolean;
    response: string;
  };

  var loadedFile:string[];
  //map to a file name and whether it is loaded or not, only one value can be loaded at once 
  
  // Mocked command execution for demonstration
  const executeCommand = (command: string): CommandResponse => {
    if (command.startsWith("load_file")) {
        // Assuming command is a string with the format "load_file <csv-file-path>"
        const parts = command.split(' '); // Split the command by spaces
        const filePath = parts[1]; 
        if (filePath && fileNames.includes(filePath)){


          return {isValid: true, response: "Loading file from path:" + {filePath}};

        
        }
        return {isValid:false, response: "Invalid file name. Reenter a valid file name."}
      }
      if(command.startsWith("view")){
        //if they load a file then type invalid command then want to view the previous should that work?
        //if they load a file and then 

      }
      return {isValid:false, response: "Invalid command. Please enter a valid command"}
    }
    const executeView(fileName: string){
      
    }

//const executeView()
// Add more commands and their handling logic here
// Default response for unknown commands
// return { isValid: false, response: "Unknown command" };
export { executeCommand };
export type { CommandResponse };
  