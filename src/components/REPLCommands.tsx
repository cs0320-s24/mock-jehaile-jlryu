// import {fileDataArray, fileData} from "/Users/jiminryu/Desktop/cs0320/mock-jehaile-jlryu/data/MockedJSON"; //for jimin

import {fileDataArray, fileData} from "/Users/jowet/Desktop/cs320/mock-jehaile-jlryu/data/MockedJSON"; // for jo
import React from 'react';
import { REPLInputProps } from './REPLInput';
import { Table } from 'antd';




type CommandResponse = {
  response: string | React.ReactNode;
};

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
function arrayToTable(array: (string | number)[][]) {
  let tableHtml = "<table>";
  for (let i = 0; i < array.length; i++) {
      // tableHtml += "<tr>";
      for (let j = 0; j < array[i].length; j++) {
          tableHtml +=  array[i][j] ;
      }
      // tableHtml += "</tr>";
  }
  // tableHtml += "</table>";
  return tableHtml;
}

  // Mocked command execution for demonstration
  
  const executeCommand1 = (command: string, props: REPLInputProps): CommandResponse => {
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
    //   if (command.startsWith("view")) {

    //     const file = fileDataArray.find((word) => word.isLoaded === true);
    //     if (file && file.fileContent) {
    //         const table = (
    //             <table>
    //                 <tbody>
    //                     {file.fileContent.map((row, rowIndex) => (
    //                         <tr key={rowIndex}>
    //                             {row.map((cell, cellIndex) => (
    //                                 <td key={cellIndex}>{cell}</td>
    //                             ))}
    //                         </tr>
    //                     ))}
    //                 </tbody>
    //             </table>
    //         );
    //         console.log("table" + table);
    //         return { response: table};
    //     }
    //     return { response: "No file loaded or file content is empty." }
    // }
  //   if (command.startsWith("view")) {
  //     const file = fileDataArray.find((word: fileData) => word.isLoaded === true);
  //     if (file && file.fileContent) {
  //         const table = arrayToTable(file.fileContent);
  //         return { response: table };
  //     }
  //     return { response: "No file loaded or file content is empty." };
  // }
//   else if (command.startsWith("view")) {
//     const loadedFile = fileDataArray.find(fileData => fileData.isLoaded);
//     if (loadedFile) {
//         const output = (
//             <div>
//                 <p>Viewing:</p>
//                 <Table data={loadedFile.fileContent} />
//             </div>
//         );
//         props.setHistory([...props.history, { command: command, output }]);
//     } else {
//         const output = 'ERROR: Please load a file before viewing.';
//         props.setHistory([...props.history, { command: command, output }]);
//     }
// }
    else if (command.startsWith("view")) {
      const loadedFile = fileDataArray.find(fileData => fileData.isLoaded);
      const output = loadedFile ? (
          <div>
              <p>Viewing:</p>
              <Table dataSource={loadedFile.fileContent2} />
          </div>
      ) : 'ERROR: Please load a file before viewing.';

      props.setHistory([...props.history, { command: command, output }]);
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
    const executeCommand = (command: string): CommandResponse => {
      let loadedFileData: fileData | undefined; // Local variable to store loaded file data
      var filePath = ' ';
    
      if (command.startsWith("load_file")) {
        // Assuming command is a string with the format "load_file <csv-file-path>"
        const parts = command.split(' '); // Split the command by spaces
        filePath = parts[1];
    
        let loadedFileData: fileData | undefined;
        let isFound:boolean = false;
        fileDataArray.forEach(fileData => {
          if (fileData.filePath === filePath) {
            fileData.isLoaded = true;
            loadedFileData = fileData;
            isFound = true;
          } else {
            fileData.isLoaded = false;
          }
        });
    
        if(isFound){
          isFound = false;
          return { response: "Loaded successfully! :)" };
        }
        return { response: "Invalid file name. Reenter a valid file name." };
      } else if (command.startsWith("view")) {
        const loadedFile = fileDataArray.find(fileData => fileData.isLoaded);
        const output = loadedFile ? loadedFile.fileContent2 : 'ERROR: Please load a file before viewing.';
        return { response: output };
      } else {
        return { response: "Invalid command. Please enter a valid command." };
      }
    };
    
//const executeView()
// Add more commands and their handling logic here
// Default response for unknown commands
// return { isValid: false, response: "Unknown command" };
export { executeCommand };
export type { CommandResponse };
  