> **GETTING STARTED:** You should likely start with the `/mock` folder from your solution code for the mock gearup.

# Project Details

Name: Mock

jlryu: Command handling, history, command design and structure
jehaile: Testing suite, error handling, history design and structure

Estimated time: 24 hours

Repo Link: https://github.com/cs0320-s24/mock-jehaile-jlryu.git

# Design Choices

## Overview:

We were able to adapt much of the code and structure from the GearUp for our program. Our program is divided into multiple directories that deals with different aspects of our project. The data directory stores our mock csvs to be used for testing, taking care of retreiving and sending queries and data. We have our components directory which include App, CommandHandler, ControlledInput, LoginButton, REPL, REPLCommands, REPLHistory, and REPLInput which managed project functionality. We also have out styles package which includes all of our frontend css styling.

Our APP.tsx is our highest level class, and renders REPL, which then includes our History and Input components. REPLHistory manages what is output when the user inputs a query into our REPLInput compontent, which includes the command and output depending on the user request. 

## Component Design

The project in discussion is a command-line interface application built around a Read-Eval-Print Loop (REPL) architecture, enabling dynamic command processing, including functionalities for loading, viewing, and searching within files. The core of this application is designed to be extensible, allowing for the easy addition of new commands without modifying the core logic.

1. CommandHandler Module
    Purpose: Acts as the central hub for registering and executing commands.
    REPLFunction Interface: Defines the signature for command functions, ensuring consistency and predictability in command implementation.
    Command Registry: A collection (e.g., a Map) that associates command names (strings) with their corresponding implementations.
    Command Execution: A mechanism to execute commands based on user input, utilizing the command registry for lookup and dispatch.

2. Command Implementations
   Individual Commands: Each command (load, view, search) is implemented as a function adhering to the REPLFunction interface.
   Flexibility and Isolation: Commands are defined separately from the CommandHandler, promoting modularity and making it easier to add or modify commands without affecting the command processing infrastructure. (User Story 6)
   
   When accessing csv's for searching, we utilized maps as storage and keys to indicate search queries, so that searching is done in constant time.

# Errors/Bugs

There are no known bugs. We have an syntax error in our REPL.tsx <REPLHistory history={history} mode={mode} /> under mode stating that Type 'string' is not assignable to type '"brief" | "verbose"'.ts(2322). However as this did not impact the functionality of our program and mode works successfully we did not see this as that problematic. 



# Tests

The test suite for this application covers various functionalities to ensure the correct behavior of the Mock site. These tests utilize Playwright to simulate user interactions and verify the expected outcomes. Tests include verifying the presence of UI elements such as the login button and input box, as well as testing dynamic changes in the input box content. For example, one test ensures that the input box's text changes correctly after typing a command. Additionally, the tests cover functionality such as changing the mode, loading and viewing files, and searching for data. There are tests to verify that the mode changes correctly when the "mode" command is typed, and that files can be loaded and viewed successfully. The test suite also includes cases to handle invalid commands and edge cases, such as attempting to search without specifying the search type and query. Each test case is designed to verify a specific feature or behavior, providing comprehensive coverage of the application's functionality. The tests also check that error descriptions are outputted when necessary. We have 48 passing test cases.

# How to

## run mock:

    1. Navigate into the project directory (mock-jehaile-jlryu)
    2. Open the terminal
    3. Run the command 'npm install'
    4. Run the command 'npm start'
    5. Navigate to the url: http://localhost:8000/
    6. Click the login in button to interact with the data
    7. Type in load_file <csv file>, to load. We have mocked data for csv1.csv, csv2.csv and csv3.csv.
    8. AFTER loading a file you can either view or search it. 
    9. To view, simply type view after a file is loaded with a success message.
    10. To search, we offer two options of searching functionality: view by column header name or view by column index. 
        10.1.1 To search csv1.csv by column index: 'search 1 Black' should output RI Black $770.26 30424.80376, .73, 6%
        10.1.2 To search csv1.csv by column header: 'search Employed Percent 4%' should output

        10.2.1 To search csv1.csv by column index: 'search 0 White' should output the strings of this: "White","2020","2020","217156","Brown University","691","brown-university","0.223552248","Men","1"
        "White","2020","2020","217156","Brown University","660","brown-university","0.213523132","Women","2"

        10.2.2 To search csv1.csv by column header: 'search Slug University emory-university' should output the strings of this:  ["Two or More Races", "2020", "2020", "217156", "Emory University", "58", "emory-university", "0.018764154", "Men", "1"],
        ["Black or African American", "2020", "2020", "217156", "Emory University", "95", "emory-university", "0.03073439", "Women", "2"],
        ["Two or More Races", "2020", "2020", "217156", "Emory University", "85", "emory-university", "0.027499191", "Women", "2"]

        10.3.1 To search csv1.csv by column index: 'search 1 94,571.00' should output the strings of this: "Cranston","77,145.00","95,763.00","38,269.00"

        10.3.2 To search csv1.csv by column header: 'search City/Town Cranston' should output the strings of this: ["Lincoln","94,571.00","115,975.00","44,135.00"],
        ["West Warwick","94,571.00","80,699.00","36,148.00"],
        ["Westerly","94,571.00","107,013.00","46,913.00"],
        ["Woonsocket","94,571.00","58,896.00","26,561.00"]
    11. To switch modes type in mode, we start on brief. You should expect to see a color change of the box (black-verbose & gray-brief) and see 'mode switched' outputted
## run test

    1. Navigate into the project directory (mock-jehaile-jlryu)
    2. Open the terminal
    3. Run the command 'npx playwright test'
    4. (optional) you may have to install playwright test
    
    

# Collaboration

*(state all of your sources of collaboration past your project partner. Please refer to the course's collaboration policy for any further questions.)* 
We collaborated with each other (Jimin and Jowet) on this project and went to one debugging session.