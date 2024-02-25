class CommandLibrary {
    static commands = {
      help: () => "Available commands: load_file <csv-file-path>, view, search <column> <value>",
      
    };
  
    static executeCommand(commandName) {
      // Execute the command if it exists, or return an error message
      return this.commands[commandName] ? this.commands[commandName]() : "Unknown command";
    }
  }
  
  export default CommandLibrary;