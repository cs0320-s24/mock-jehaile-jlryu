import {fileDataComponent, fileData} from "/Users/jiminryu/Desktop/cs0320/mock-jehaile-jlryu/data/MockedJSON"; //for jimin
// import {fileDataComponent, fileData} from "/Users/jowet/Desktop/cs320/mock-jehaile-jlryu/data/MockedJSON"; // for jo

/**
 * Our response interface which holds the args and response which can be strings, array of strings, or
 * undefined (due to the return value of typescript's map.get)
 */
export interface REPLFunction {    
    (args: string[]): string | string[][] | undefined; 
  }
/**
 * Component that takes in the argument to the command box and is called if load_file is typed.
 * This extracts the file name to a local variable which it then uses to loop through our file data component
 * to check if there is a file path with that name. Next it sets that file's loaded variable ot true and 
 * all others to false so that only one file can be loaded at once. 
 * 
 * @param args takes in the input to the command box
 * @returns a success or failure response dependent on if the file was able to be loaded
 */
  const load: REPLFunction = (args: string[]): string => {

    const filePath = args[1]; 
    let loadedFileData: fileData | undefined;
    let isFound = false;

    fileDataComponent.forEach(fileData => {
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

/**
 * This component handles when view is typed into the commnad box. First we find the loaded file from the
 * data. If no file is loaded it prints an error description, otherwise it returns the data of the loaded file's content
 * @param args  takes in the input to the command box
 * @returns the result of tying in view, the file contents or error description
 */

const view: REPLFunction = (args: string[]): string | string[][] => {
    // Find the loaded file
    const loadedFile = fileDataComponent.find(fileData => fileData.isLoaded);

    if (!loadedFile) {
        // If no file is loaded, return an error message
        return "ERROR: Please load a file before viewing.";
    } else {
        return loadedFile.fileContent;
    }
};
/**
 * This componenet handles when seearch is typed into the command box. First it checks that the file is laoded, 
 * if not then it instructs the user to load a file. It also checks that the user inputted more than 2
 * arguments since the format of search is "search index/header value" so we expect atleast 3 args. Lastly,
 * if there is not a key for the searched value in that file's search map then it returns an error message.
 * Otherwise we return the value in the search map for that loaded file.  
 * @param args takes in the input to the command box
 * @returns the result of typing in search, the rows with the desired value or an error description
 */
const search: REPLFunction = (args: string[]): string | string[][] | undefined => {
        // Ensure a file is loaded and args length is adequate
        if (args.length <= 2) {
            return "Invalid search query. Please specify the search type and query.";
        }
        const loadedFile = fileDataComponent.find(fileData => fileData.isLoaded);
        if(!loadedFile){  
            return "ERROR: Please load a file before searching.";
        }
        if(loadedFile.search.get(args[args.length - 1]) === undefined){
            return "Invalid search query. Please specify the search type and query."
        }
        if(loadedFile.correctCol.get(args[1]) === args[args.length-1]){
            return loadedFile.search.get(args[args.length - 1]);

        }
        return "Invalid search query."
    }

export {load, view, search}

