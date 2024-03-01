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
None
# Tests

# How to

# Collaboration

_(state all of your sources of collaboration past your project partner. Please refer to the course's collaboration policy for any further questions.)_
