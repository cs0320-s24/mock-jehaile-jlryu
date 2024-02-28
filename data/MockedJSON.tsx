interface FileData {
    filePath: string;
    isLoaded: boolean;
    fileContent: (string|number)[][];

  }
  var exampleCSV1: FileData = {
    filePath: 'csv1.csv',
    isLoaded: false,
    fileContent: [
        [1, 2, 3, 4, 5],
        ["The", "song", "remains", "the", "same."],
    ]
  };
  var exampleCSV2: FileData = {
    filePath: 'path/to/csv2.csv',
    isLoaded: false,
    fileContent: [
        ["20,000",40000,"60,000",80000,100000],
        ["Price 1", "Price 2", "Price 3", "Price 4", "Price 5"],
    ]
  };  
  var exampleCSV3: FileData = {
    filePath: 'path/to/csv3.csv',
    isLoaded: false,
    fileContent: [
        ["1", "2", "3", "4", "5"],
        ["ded", "bcb", "bab", "hoh", "yes."],
    ]
  };

const fileDataList: FileData[] = [exampleCSV1, exampleCSV2, exampleCSV3];

export const fileDataArray = fileDataList;
export type fileData = FileData;