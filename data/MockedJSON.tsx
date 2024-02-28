import dol_ri_earning_data from './dol_ri_earnings_disparity.json';

interface FileData {
    filePath: string;
    isLoaded: boolean;
    fileContent: (string|number)[][];
    fileContent2: string[][]

  }
  var exampleCSV1: FileData = {
    filePath: 'csv1.csv',

    isLoaded: false,
    fileContent: [
        [1, 2, 3, 4, 5],
        ["The", "song", "remains", "the", "same."],
    ],
    fileContent2: dol_ri_earning_data,
  };
  var exampleCSV2: FileData = {
    filePath: 'path/to/csv2.csv',
    isLoaded: false,
    fileContent: [
        ["20,000",40000,"60,000",80000,100000],
        ["Price 1", "Price 2", "Price 3", "Price 4", "Price 5"],
    ],
    fileContent2: []
  };  
  var exampleCSV3: FileData = {
    filePath: 'path/to/csv3.csv',
    isLoaded: false,
    fileContent: [
        ["1", "2", "3", "4", "5"],
        ["ded", "bcb", "bab", "hoh", "yes."],
    ],
    fileContent2: []
  };

const fileDataList: FileData[] = [exampleCSV1, exampleCSV2, exampleCSV3];

export const fileDataArray = fileDataList;
export type fileData = FileData;