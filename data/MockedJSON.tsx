import dol_ri_earning_data from './dol_ri_earnings_disparity/dol_ri_earnings_disparity.json';
import postsecondary_education from "./postsecondary_education/postsecondary_education.json";
import ri_city_and_town_income from "./ri_city_and_town_income/ri_city_and_town_income.json";

/**
 * This maps the value to the rows containing the value for csv1.
 */
const mapCSV1 = new Map<string, string[][]>();

const keyHeader11 = "4%"
const valueHeader11= [["RI","Asian-Pacific Islander"," $1,080.09 ","18956.71657", "$1.02" ,"4%"]]

const keyIndex12= "Black";
const valueIndex12 = [["RI","Black"," $770.26" ,"30424.80376"," $0.73" ,"6%"]]

mapCSV1.set(keyHeader11,valueHeader11);
mapCSV1.set(keyIndex12,valueIndex12);
/**
 * This map helps ensure that the user is typing the correct column index or header for the value provided in csv1.
 */
const mapCSV1Col = new Map<string, string>();

const colCSVk = "Employed"
const colCSVv = "4%"
const colCSVk2 = "1"
const colCSVv2 = "Black"

mapCSV1Col.set(colCSVk,colCSVv);
mapCSV1Col.set(colCSVk2,colCSVv2);
/**
 * This maps the value to the rows containing the value for csv2.
 */

const mapCSV2 = new Map<string, string[][]>();

const keyHeader21 = "emory-university";
const valueHeader21 = [
  ["Two or More Races", "2020", "2020", "217156", "Emory University", "58", "emory-university", "0.018764154", "Men", "1"],
  ["Black or African American", "2020", "2020", "217156", "Emory University", "95", "emory-university", "0.03073439", "Women", "2"],
  ["Two or More Races", "2020", "2020", "217156", "Emory University", "85", "emory-university", "0.027499191", "Women", "2"]
];
const keyIndex22 = "White"
const valueIndex22 =[    ["White","2020","2020","217156","Brown University","691","brown-university","0.223552248","Men","1"],
    ["White","2020","2020","217156","Brown University","660","brown-university","0.213523132","Women","2"]
]

mapCSV2.set(keyHeader21, valueHeader21);
mapCSV2.set(keyIndex22, valueIndex22);
/**
 * This map helps ensure that the user is typing the correct column index or header for the value provided in csv2
 */

const mapCSV2Col = new Map<string, string>();

const colCSV2k = "Slug"
const colCSV2v = "emory-university"
const colCSV2k2 = "0"
const colCSV2v2 = "White"

mapCSV2Col.set(colCSV2k,colCSV2v);
mapCSV2Col.set(colCSV2k2,colCSV2v2);

/**
 * This maps the value to the rows containing the value for csv3.
 */

const mapCSV3 = new Map<string, string[][]>();

const keyHeader31 = "Cranston";
const valueHeader31=  [    ["Cranston","77,145.00","95,763.00","38,269.00"]];

const keyIndex32= "94,571.00"
const valueIndex32= [    ["Lincoln","94,571.00","115,975.00","44,135.00"],
["West Warwick","94,571.00","80,699.00","36,148.00"],
    ["Westerly","94,571.00","107,013.00","46,913.00"],
    ["Woonsocket","94,571.00","58,896.00","26,561.00"]];

mapCSV3.set(keyHeader31, valueHeader31);
mapCSV3.set(keyIndex32, valueIndex32);

/**
 * This map helps ensure that the user is typing the correct column index or header for the value provided in csv3.
 */
const mapCSV3Col = new Map<string, string>();

const colCSV3k = "City/Town"
const colCSV3v = "Cranston"
const colCSV3k2 = "1"
const colCSV3v2 = "94,571.00"

mapCSV3Col.set(colCSV3k,colCSV3v);
mapCSV3Col.set(colCSV3k2,colCSV3v2);

/**
 * Interface to store all the necessary data for a file, like the file path, 
 * whether it was loaded, the file contents, a map to represent searching a value to its row, and a 
 * map representing a value to its column.
 */
interface FileData {
    filePath: string;
    isLoaded: boolean;
    fileContent: string[][]
    search: Map<string, string[][]>;
    correctCol: Map<string, string>;

  }
/**
 * Mocks the data for the dol_ri_earning csv and stores its file path, loaded boolean, file content
 * search map and value to column map. 
 */
  var exampleCSV1: FileData = {
    filePath: 'csv1.csv',
    isLoaded: false,
    fileContent: dol_ri_earning_data,
    search: mapCSV1,
    correctCol: mapCSV1Col

  };
  /**
   * Mocks the data for the postsecondary_education csv and stores its file path, loaded boolean, file content
   *search map and value to column map. 
   */
  var exampleCSV2: FileData = {
    filePath: 'csv2.csv',
    isLoaded: false,
    fileContent: postsecondary_education,
    search: mapCSV2,
    correctCol: mapCSV2Col

  };  
  /**
   * Mocks the data for the ri_city_and_town_income csv and stores its file path, loaded boolean, file content
   * search map and value to column map. 
   */
  var exampleCSV3: FileData = {
    filePath: 'csv3.csv',
    isLoaded: false,
    fileContent: ri_city_and_town_income,
    search: mapCSV3,
    correctCol: mapCSV3Col

  };

  /**
   * Stores all the data set interfaces
   */
const fileDataList: FileData[] = [exampleCSV1, exampleCSV2, exampleCSV3];

export const fileDataComponent = fileDataList;
export type fileData = FileData;