import {fileDataArray, fileData} from "/Users/jiminryu/Desktop/cs0320/mock-jehaile-jlryu/data/MockedJSON"; //for jimin

// import {fileDataArray, fileData} from "/Users/jowet/Desktop/cs320/mock-jehaile-jlryu/data/MockedJSON"; // for jo

type CommandResponse = {
    response: string;
  };

  // var loadedFile:string[];
  function isFilePathInFileDataArray(filePath: string, fileDataArray: fileData[]): boolean {
    // Iterate through the fileDataArray to find if any object's filePath matches the given filePath
    return fileDataArray.some(fileData => fileData.filePath === filePath);
}
  //map to a file name and whether it is loaded or not, only one value can be loaded at once 
  
  // Mocked command execution for demonstration
  const executeCommand = (command: string): CommandResponse => {
    if (command.startsWith("load_file")) {
        // Assuming command is a string with the format "load_file <csv-file-path>"
      const parts = command.split(' '); // Split the command by spaces
      const filePath = parts[1]; 
        
      let loadedFileData: fileData | undefined; // Local variable to store loaded file data
      let isFound:boolean = false;;
    // Iterate through the fileDataArray
      fileDataArray.forEach(fileData => {
          if (fileData.filePath === filePath) {
              fileData.isLoaded = true; // Set the isLoaded to true for the matched file
              loadedFileData = fileData; // Store this fileData as the loaded one
              isFound = true
          } else {
              fileData.isLoaded = false; // Set the isLoaded to false for all other files
          }
      });
        if(isFound){
          isFound = false; //reset the variable after it is found so it wont effect future 
          return {response: "Loaded succesfully! :)"}
        }
        return {response: "Invalid file name. Reenter a valid file name."}
        }

    if(command.startsWith("view")){
        //if they load a file then type invalid command then want to view the previous should that work?
        //if they load a file and then 
        

    }

    if(command.startsWith("search")){

        
    }
    return {response: "Invalid command. Please enter a valid command"}
    }
    // const executeView(fileName: string){
      
    // }

//const executeView()
// Add more commands and their handling logic here
// Default response for unknown commands
// return { isValid: false, response: "Unknown command" };
export { executeCommand };
export type { CommandResponse };
  