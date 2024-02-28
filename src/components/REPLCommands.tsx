// import {fileDataArray, fileData} from "/Users/jiminryu/Desktop/cs0320/mock-jehaile-jlryu/data/MockedJSON"; //for jimin

import {fileDataArray, fileData} from "/Users/jowet/Desktop/cs320/mock-jehaile-jlryu/data/MockedJSON"; // for jo

type CommandResponse = {
  response: string | React.ReactNode;
};

  // var loadedFile:string[];
  function isFilePathInFileDataArray(filePath: string, fileDataArray: fileData[]): boolean {
    // Iterate through the fileDataArray to find if any object's filePath matches the given filePath
    return fileDataArray.some(fileData => fileData.filePath === filePath);
}
  //map to a file name and whether it is loaded or not, only one value can be loaded at once 
//   const generateHTMLTable = (fileContent: (string | number)[][]): string => {
//     let tableHTML = '<table>';
//     fileContent.forEach(row => {
//         tableHTML += '<tr>';
//         row.forEach(cell => {
//             tableHTML += `<td>${cell}</td>`;
//         });
//         tableHTML += '</tr>';
//     });
//     tableHTML += '</table>';
//     return tableHTML;
// };
// const generateHTMLTable = (fileContent: (string | number)[][]): string => {
//   let tableHTML = '';
//   fileContent.forEach(row => {
//       tableHTML += '<tr>';
//       row.forEach(cell => {
//           tableHTML += `<td>${cell}</td>`;
//       });
//       tableHTML += '</tr>';
//   });
//   return tableHTML;
// };
  // Mocked command execution for demonstration
  const executeCommand = (command: string): CommandResponse => {
    let loadedFileData: fileData | undefined; // Local variable to store loaded file data
    var filePath = ' ';

    if (command.startsWith("load_file")) {
        // Assuming command is a string with the format "load_file <csv-file-path>"
      const parts = command.split(' '); // Split the command by spaces
      filePath = parts[1]; 
        
      let loadedFileData: fileData | undefined; // Local variable to store loaded file data
        // if (filePath && isFilePathInFileDataArray(filePath, fileDataArray)) {
        //   // Find the matching FileData object and set its isLoaded property to true
        //   const fileData = fileDataArray.find(fileData => fileData.filePath === filePath);
        //   if (fileData) {
        //     fileData.isLoaded = true; // Set isLoaded to true
        //   }
      //   for (let fileData of fileDataArray) {
      //     if (fileData.filePath === filePath) {
      //         fileData.isLoaded = true; // Set the isLoaded to true for the matched file
      //     } else {
      //         fileData.isLoaded = false; // Set the isLoaded to false for all other files
      //     }

      // }
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

      //return {isLoaded, response: "Invalid file name. Reenter a valid file name."}

        if(isFound){
          isFound = false; //reset the variable after it is found so it wont effect future 
          return {response: "Loaded succesfully! :)"}
        }
        return {response: "Invalid file name. Reenter a valid file name."}
        }

    // if(command.startsWith("view")){
    //   const file = fileDataArray.find((word) => word.isLoaded === true);
    //     if (file && file.fileContent) {
    //         const table = generateHTMLTable(file.fileContent);
    //         return { response: table };
    //     }
    //     return { response: "No file loaded or file content is empty." }
      if (command.startsWith("view")) {
        const file = fileDataArray.find((word) => word.isLoaded === true);
        if (file && file.fileContent) {
            const table = (
                <table>
                    <tbody>
                        {file.fileContent.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex}>{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            );
            console.log("table" + table);
            return { response: table };
        }
        return { response: "No file loaded or file content is empty." }
    }
      
      // var file = fileDataArray.find((word) => word.isLoaded === true);
      // if(file?.fileContent != undefined){
      //   return {response: file.fileContent}
      // }

        //if they load a file then type invalid command then want to view the previous should that work?
        //if they load a file and then 
        
    // if(command.startsWith("view")){
    //     //if they load a file then type invalid command then want to view the previous should that work?
    //     //if they load a file and then 


    // }

    // if(command.startsWith("search")){

        
    
    return {response: "Invalid command. Please enter a valid command"}}
    // }
    
    // const executeView(fileName: string){
      
    // }

//const executeView()
// Add more commands and their handling logic here
// Default response for unknown commands
// return { isValid: false, response: "Unknown command" };
export { executeCommand };
export type { CommandResponse };
  