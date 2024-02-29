import dol_ri_earning_data from './dol_ri_earnings_disparity.json';
import postsecondary_education from "./postsecondary_education.json";
import ri_city_and_town_income from "./ri_city_and_town_income.json";
import dol_searchIndex from "./dol_searchColumn.json";
import postsecondary_searchIndex from "./postsecondary_searchColumn.json";
import ri_searchIndex from "./ri_searchColumn.json"
import dol_searchHeader from "./dol_searchHeader.json";
import postsecondary_searchHeader from "./dol_searchHeader.json";
import ri_searchHeader from "./ri_searchHeader.json";




interface FileData {
    filePath: string;
    isLoaded: boolean;
    fileContent: string[][]
    searchHeader: string[][]
    searchIndex: string[][]

  }
  var exampleCSV1: FileData = {
    filePath: 'csv1.csv',

    isLoaded: false,
    
    fileContent
    : dol_ri_earning_data,
    searchHeader: dol_searchHeader,
    searchIndex:dol_searchIndex

  };
  var exampleCSV2: FileData = {
    filePath: 'csv2.csv',
    isLoaded: false,
    
    fileContent: postsecondary_education,
    searchHeader: postsecondary_searchHeader,
    searchIndex:postsecondary_searchIndex


  };  
  var exampleCSV3: FileData = {
    filePath: 'csv3.csv',
    isLoaded: false,
    fileContent: ri_city_and_town_income,
    searchHeader: ri_searchHeader,
    searchIndex: ri_searchIndex
  };

const fileDataList: FileData[] = [exampleCSV1, exampleCSV2, exampleCSV3];

export const fileDataArray = fileDataList;
export type fileData = FileData;