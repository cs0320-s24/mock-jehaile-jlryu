import dol_ri_earning_data from './dol_ri_earnings_disparity/dol_ri_earnings_disparity.json';
import postsecondary_education from "./postsecondary_education/postsecondary_education.json";
import ri_city_and_town_income from "./ri_city_and_town_income/ri_city_and_town_income.json";


const mapCSV1 = new Map<string, string[][]>();


const keyHeader11 = "4%"
const valueHeader11= [["RI","Asian-Pacific Islander"," $1,080.09 ","18956.71657", "$1.02" ,"4%"]]

const keyIndex12= "Black";
const valueIndex12 = [["RI","Black"," $770.26" ,"30424.80376"," $0.73" ,"6%"]]

mapCSV1.set(keyHeader11,valueHeader11);
mapCSV1.set(keyIndex12,valueIndex12);


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
const mapCSV2 = new Map<string, string[][]>();

mapCSV2.set(keyHeader21, valueHeader21);

mapCSV2.set(keyIndex22, valueIndex22);


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



interface FileData {
    filePath: string;
    isLoaded: boolean;
    fileContent: string[][]
    search: Map<string, string[][]>;

  }

  var exampleCSV1: FileData = {
    filePath: 'csv1.csv',
    isLoaded: false,
    fileContent: dol_ri_earning_data,
    search: mapCSV1

  };
  var exampleCSV2: FileData = {
    filePath: 'csv2.csv',
    isLoaded: false,
    fileContent: postsecondary_education,
    search: mapCSV2


  };  
  var exampleCSV3: FileData = {
    filePath: 'csv3.csv',
    isLoaded: false,
    fileContent: ri_city_and_town_income,
    search: mapCSV3

  };

const fileDataList: FileData[] = [exampleCSV1, exampleCSV2, exampleCSV3];

export const fileDataComponent = fileDataList;
export type fileData = FileData;