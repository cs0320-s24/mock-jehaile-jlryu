package edu.brown.cs.student.main.SearchUtility;

import edu.brown.cs.student.main.CSVParser.CSVParser;
import edu.brown.cs.student.main.Exceptions.FactoryFailureException;
import edu.brown.cs.student.main.Exceptions.MalformedRowsException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

/** Class used to search a CSV file parsed using the CSVParser class. */
public class Search {

  private final CSVParser<List<String>> csvParser;

  /** Constructs a Search object using CSVParser object */
  public Search(CSVParser<List<String>> csvParser) {
    this.csvParser = csvParser;
  }

  /**
   * Parses CSV stored in CSVParser field
   *
   * @throws IOException if an I/O error occurs while parsing the CSV file.
   * @throws FactoryFailureException if an error occurs during CSVParser creation of List<String>
   *     object from row.
   * @throws MalformedRowsException if parser encounters rows of invalid size while parsing
   */
  public void parseCSV() throws IOException, FactoryFailureException, MalformedRowsException {
    this.csvParser.parse();
  }

  /**
   * Searches the CSV file for rows containing specified value. The specified value must be a
   * substring of one of the values in a row to be considered a 'match'.
   *
   * @param toSearch The value to search for in the CSV file.
   * @return A list of rows that contain the specified value. If no matches are found, an empty list
   *     will be returned.
   */
  public List<List<String>> searchCSV(String toSearch) {
    List<List<String>> matches = new ArrayList<>();
    // Search each row
    for (List<String> row : this.csvParser.getCSVContents()) {
      for (String value : row) {
        if (value.toUpperCase().contains(toSearch.toUpperCase())) {
          matches.add(row);
          break; // One match is enough
        }
      }
    }

    return matches;
  }

  /**
   * Searches the CSV file for rows containing the specified value in a specific header/column. The
   * specified value must be a substring the value in the specified column of a row to be considered
   * a 'match'.
   *
   * @param toSearch The value to search for in the CSV file.
   * @param header The header/column in which to search for the value.
   * @return A list of rows that contain the specified value in the specified header/column. If no
   *     matches are found, an empty list will be returned.
   * @throws NoSuchElementException if the specified header does not exist in the CSV file.
   */
  public List<List<String>> searchCSV(String toSearch, String header)
      throws NoSuchElementException {
    header = header.toUpperCase();
    if (this.csvParser.getHeaderList() != null && this.csvParser.getHeaderList().contains(header)) {
      int index = this.csvParser.getHeaderList().indexOf(header);
      return this.searchCSV(toSearch, index);
    } else {
      throw new NoSuchElementException();
    }
  }

  /**
   * Searches the CSV file for rows containing the specified value in a specific column. The
   * specified value must be a substring the value in the specified column of a row to be considered
   * a 'match'.
   *
   * @param toSearch The value to search for in the CSV file.
   * @param columnNumber The column number in which to search for the value.
   * @return A list of rows that contain the specified value in the specified column. If no matches
   *     are found, an empty list will be returned.
   * @throws IndexOutOfBoundsException if the specified column number is out of bounds.
   */
  public List<List<String>> searchCSV(String toSearch, Integer columnNumber)
      throws IndexOutOfBoundsException {
    if (columnNumber < 0) {
      throw new IndexOutOfBoundsException();
    }
    List<List<String>> matches = new ArrayList<>();
    for (List<String> row : this.csvParser.getCSVContents()) {
      if (columnNumber > row.size() - 1) {
        throw new IndexOutOfBoundsException();
      }
      if (row.get(columnNumber).toUpperCase().contains(toSearch.toUpperCase())) {
        matches.add(row);
      }
    }
    return matches;
  }
}
