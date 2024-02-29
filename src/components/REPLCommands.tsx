import {fileDataArray, fileData} from "/Users/jiminryu/Desktop/cs0320/mock-jehaile-jlryu/data/MockedJSON"; //for jimin

// import {fileDataArray, fileData} from "/Users/jowet/Desktop/cs320/mock-jehaile-jlryu/data/MockedJSON"; // for jo
import React from 'react';
import { REPLInputProps } from './REPLInput';
import { Table } from 'antd';

type CommandResponse = {
  response: string | React.ReactNode;
};

export interface REPLFunction {    
  (args: string[]): string | string[][];//define a standard for how functions that execute commands should be strucutered, takes in command line arguments passed by user, and returns either a single string or a 2d array of strings as output
}

function commandHandler(commandFunction: REPLFunction, args: string[]): string | string[][] {
  return commandFunction(args);
}
const commandMap = new Map<string, REPLFunction>();

const load: REPLFunction = (args: string[]): CommandResponse => {
        
};



  // Mocked command execution for demonstration
  
    const executeCommand = (command: string): CommandResponse => {

      const [commandName, ...args] = command.split(/\s+/);
      const commandFunction = commandMap.get(commandName);

      var filePath = ' ';
      if (command.startsWith("load_file")) {
        // Assuming command is a string with the format "load_file <csv-file-path>"
        const parts = command.split(' '); // Split the command by spaces
        filePath = parts[1];
    
        let loadedFileData: fileData | undefined; // Local variable to store loaded file data
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
        const output = loadedFile ? loadedFile.fileContent : 'ERROR: Please load a file before viewing.';
        return { response: output };
      }


      else if(command.startsWith("search")){
        if(command ==="search Employed Percent 4%"){
          const loadedFile = fileDataArray.find(fileData => fileData.isLoaded);
          if(loadedFile?.filePath== "csv1.csv"){
          const output = loadedFile ? loadedFile.searchHeader: 'ERROR: Please load a file before viewing.';
          return { response: output };}
          else{
            return{response: "Invalid search. This could be caused by searching the wrong file or unhandled parameters after search. Sorry try again later!"}
          }

        }
        else if(command ==="search 1 Black"){
          const loadedFile = fileDataArray.find(fileData => fileData.isLoaded);
          if(loadedFile?.filePath== "csv1.csv"){
          const output = loadedFile ? loadedFile.searchIndex: 'ERROR: Please load a file before viewing.';
          return { response: output };}
          else{
            return{response: "Invalid search. This could be caused by searching the wrong file or unhandled parameters after search. Sorry try again later!"}
          }}
        
        else if(command === "search Slug University emory-university"){

          const loadedFile = fileDataArray.find(fileData => fileData.isLoaded);
          if(loadedFile?.filePath== "csv2.csv"){

          const output = loadedFile ? loadedFile.searchHeader: 'ERROR: Please load a file before viewing.';
          return { response: output };

        } else{
          return{response: "Invalid search. This could be caused by searching the wrong file or unhandled parameters after search. Sorry try again later!"}
        }
      }
        else if(command === "search 0 White"){
          const loadedFile = fileDataArray.find(fileData => fileData.isLoaded);
          if(loadedFile?.filePath== "csv2.csv"){

          const output = loadedFile ? loadedFile.searchIndex: 'ERROR: Please load a file before viewing.';
          return { response: output };}
          else{
            return{response: "Invalid search. This could be caused by searching the wrong file or unhandled parameters after search. Sorry try again later!"}
          }

        }
        
        else if(command ==="search City/Town Cranston"){

          const loadedFile = fileDataArray.find(fileData => fileData.isLoaded);
          if(loadedFile?.filePath== "csv3.csv"){
          const output = loadedFile ? loadedFile.searchHeader: 'ERROR: Please load a file before viewing.';
          return { response: output };}
          else{
            return{response: "Invalid search. This could be caused by searching the wrong file or unhandled parameters after search. Sorry try again later!"}
          }

        }
        else if(command ==="search 1 94,571.00"){
          const loadedFile = fileDataArray.find(fileData => fileData.isLoaded);
          if(loadedFile?.filePath== "csv3.csv"){
          const output = loadedFile ? loadedFile.searchIndex: 'ERROR: Please load a file before viewing.';
          return { response: output };}
          else{
            return{response: "Invalid search. This could be caused by searching the wrong file or unhandled parameters after search. Sorry try again later!"}
          }
        }
        
      }
      
      
      return { response: "Invalid command. Please enter a valid command." };
      
    };
    
export { executeCommand };
export type { CommandResponse };
  