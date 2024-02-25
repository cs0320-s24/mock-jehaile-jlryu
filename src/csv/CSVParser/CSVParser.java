package edu.brown.cs.student.main.CSVParser;

import edu.brown.cs.student.main.Exceptions.FactoryFailureException;
import edu.brown.cs.student.main.Exceptions.MalformedRowsException;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.Reader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.regex.Pattern;

/**
 * Class that parses an inputted Reader object to List<T> based on an inputted CreatorFromRow<T>
 * object
 *
 * @param <T> The type which each row of data is stored as in List<T> type csvContents field
 */
public class CSVParser<T> {
  private final Reader reader;
  private final CreatorFromRow<T> strategyObject;
  private final Boolean headers;
  private ArrayList<String> headerList;
  private List<T> csvContents;

  /**
   * Constructor for CSVParser object.
   *
   * @param reader a Reader object to be parsed
   * @param strategyObject a CreatorFromRow<T> object used to create object of type T from each row
   *     of reader
   * @param headers a Boolean indicating if headers are present in reader.
   */
  public CSVParser(Reader reader, CreatorFromRow<T> strategyObject, Boolean headers) {
    this.reader = reader;
    this.strategyObject = strategyObject;
    this.headers = headers;
  }

  /**
   * Parses Reader file, assigning CSVParser's csvContents field a list of generic type T, where T
   * indicates the type generated by the Class's strategyObject's create() method for each inputted
   * row. If CSVParser's headers field is True, the parse() method will assign CSVParser's
   * headerList field an ArrayList of String storing the first row of the Reader file. If the Reader
   * file is empty, csvContents will be initiated as an empty list. If headers is True, headerList
   * will also be initiated as an empty list, otherwise it will remain unassigned. Uses the length
   * of the first line of CSVParser's reader field as the standard row size and skips invalid-sized
   * rows while parsing, storing them in malformedRows. If malformedRows is not empty at the end of
   * parsing each row, a MalformedRowsException will be thrown.
   *
   * @throws IOException parse() method throws IOException if encountering an error reading from
   *     Reader in CSVParser's reader field.
   * @throws FactoryFailureException parse() method throws FactoryFailureException if CreatorFromRow
   *     object encounters an error when converting row to generic type T
   * @throws MalformedRowsException parse() method throws MalformedRowsException after encountering
   *     rows that are the invalid size. Exception is thrown after parsing is completed
   */
  public void parse() throws IOException, FactoryFailureException, MalformedRowsException {
    BufferedReader bufferedReader = new BufferedReader(this.reader);
    Pattern regexSplitCSVRow = Pattern.compile(",(?=([^\\\"]*\\\"[^\\\"]*\\\")*(?![^\\\"]*\\\"))");
    ArrayList<List<String>> malformedRows = new ArrayList<>();
    this.csvContents = new ArrayList<>();

    // read first line
    String line = bufferedReader.readLine();

    // empty file leaves csvContents field as an empty list. headersList also empty.
    if (line == null) {
      if (headers) {
        this.headerList = new ArrayList<String>();
      }
      return;
    }

    // assign rowSize based on first line, regardless of if headers are present
    int rowSize = Arrays.asList(regexSplitCSVRow.split(line)).size();

    // build headerList if headers are present
    if (this.headers) {
      String[] headersArray = regexSplitCSVRow.split(line);
      ArrayList<String> headerListBuilder = new ArrayList<>();
      for (String header : headersArray) {
        headerListBuilder.add(header.toUpperCase());
      }
      this.headerList = headerListBuilder;

      line = bufferedReader.readLine();
    }

    // while contents exist, parse each row
    while (line != null) {
      List<String> result = Arrays.asList(regexSplitCSVRow.split(line));
      if (result.size() == rowSize) {
        this.csvContents.add(strategyObject.create(result));
      } else {
        // if malformed rows exist, they are logged, but parsing continues (error thrown after)
        malformedRows.add(result);
      }
      line = bufferedReader.readLine();
    }

    bufferedReader.close();

    // inform that malformed rows exist and were not parsed
    if (!malformedRows.isEmpty()) {
      throw new MalformedRowsException(
          "Some rows could not be parsed due to invalid size", malformedRows);
    }
  }

  /**
   * Getter method for CSVContents to be called after parse()
   *
   * @return List<T> containing parsed file contents or null if not parsed yet
   */
  public List<T> getCSVContents() {
    return this.csvContents;
  }

  /**
   * Getter method for headerList to be called after parse()
   *
   * @return List<String> containing headers in order found in reader field or null if not parsed
   *     yet, or if headers field is False
   */
  public List<String> getHeaderList() {
    return this.headerList;
  }
}