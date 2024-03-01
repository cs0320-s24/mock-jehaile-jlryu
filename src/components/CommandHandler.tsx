import {fileDataArray, fileData} from "/Users/jiminryu/Desktop/cs0320/mock-jehaile-jlryu/data/MockedJSON"; //for jimin
// import {fileDataArray, fileData} from "/Users/jowet/Desktop/cs320/mock-jehaile-jlryu/data/MockedJSON"; // for jo

export interface REPLFunction {    
    (args: string[]): string | string[][] | undefined;//define a standard for how functions that execute commands should be strucutered, takes in command line arguments passed by user, and returns either a single string or a 2d array of strings as output
  }

  const load: REPLFunction = (args: string[]): string => {

    const filePath = args[1]; 
    let loadedFileData: fileData | undefined;
    let isFound = false;

    fileDataArray.forEach(fileData => {
        if (fileData.filePath === filePath) {
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

// const search: REPLFunction = (args: string[]): string | string[][] => {
//     // Ensure a file is loaded and args length is adequate
//     if (args.length < 2) {
//         return "Invalid search query. Please specify the search type and query.";
//     }

//     const [searchType, ...searchQuery] = args;
//     const queryString = searchQuery.join(' '); // Re-join the rest of the arguments as the search query
//     const loadedFile = fileDataArray.find(fileData => fileData.isLoaded);

//     if (!loadedFile) {
//         return "ERROR: Please load a file before searching.";
//     }

//     switch (searchType) {
//         case "Employed":
//             if (loadedFile.filePath === "csv1.csv") {
                
//                 return loadedFile.searchHeader ? ["Your search results"] : "Search failed.";
//             }
//             break;
//         case "Slug":
//             if (loadedFile.filePath === "csv2.csv") {
               
//                 return loadedFile.searchHeader ? ["Your search results"] : "Search failed.";
//             }
//             break;
//         case "City/Town":
//             if (loadedFile.filePath === "csv3.csv") {
                
//                 return loadedFile.searchHeader ? ["Your search results"] : "Search failed.";
//             }
//             break;
        
//     }

//     return "Invalid search. Please check your search criteria.";
// };


const search: REPLFunction = (args: string[]): string | string[][] | undefined => {
        // Ensure a file is loaded and args length is adequate
        if (args.length <= 2) {
            return "Invalid search query. Please specify the search type and query.";
        }
        const loadedFile = fileDataArray.find(fileData => fileData.isLoaded);
        if(!loadedFile){
            return "ERROR: Please load a file before searching.";
        }
        return loadedFile.search.get(args[-1]);
    }


export {load, view, search}

