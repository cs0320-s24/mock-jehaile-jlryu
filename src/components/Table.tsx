import React from 'react';
import {fileDataArray, fileData} from "/Users/jiminryu/Desktop/cs0320/mock-jehaile-jlryu/data/MockedJSON"; 


// Define a Table component that takes fileContent as a prop
const Table = ({ fileDataArray }) => {
  return (
    <table>
      <tbody>
        {fileContent.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Export the Table component
export default Table;
