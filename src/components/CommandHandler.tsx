import {fileDataArray, fileData} from "/Users/jiminryu/Desktop/cs0320/mock-jehaile-jlryu/data/MockedJSON"; //for jimin
// import {fileDataArray, fileData} from "/Users/jowet/Desktop/cs320/mock-jehaile-jlryu/data/MockedJSON"; // for jo

export interface REPLFunction {    
    (args: string[]): string | string[][] | undefined; 
  }

  const load: REPLFunction = (args: string[]): string => {

    const filePath = args[1]; 
    let loadedFileData: fileData | undefined;
    let isFound = false;

    fileDataArray.forEach(fileData => {
        if (fileData.filePath == filePath) {
            fileData.isLoaded = true; // Mark the file as loaded
            loadedFileData = fileData;
            isFound = true;
        } else {
            fileData.isLoaded = false; // Ensure only one file is loaded at a time
        }
    });

    if (isFound) {
        return `File "${filePath}" loaded successfully! :)`;
    } else {
        return "Invalid file name. Reenter a valid file name.";
    }
};

const view: REPLFunction = (args: string[]): string | string[][] => {
    // Find the loaded file
    const loadedFile = fileDataArray.find(fileData => fileData.isLoaded);

    if (!loadedFile) {
        // If no file is loaded, return an error message
        return "ERROR: Please load a file before viewing.";
    } else {
        return loadedFile.fileContent;
    }
};

const search: REPLFunction = (args: string[]): string | string[][] | undefined => {
        // Ensure a file is loaded and args length is adequate
        if (args.length <= 2) {
            return "Invalid search query. Please specify the search type and query.";
        }
        const loadedFile = fileDataArray.find(fileData => fileData.isLoaded);
        if(!loadedFile){
            
            return "ERROR: Please load a file before searching.";
        }
        if(loadedFile.search.get(args[args.length - 1]) === undefined){
            return "Invalid search query. Please specify the search type and query."
        }

        return loadedFile.search.get(args[args.length - 1]);
    }

export {load, view, search}

