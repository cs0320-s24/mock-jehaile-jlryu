class CommandLibrary {
    static commands = {
      help: () => "Available commands: help, greet, exit",
      greet: () => "Hello! How can I assist you today?",
      exit: () => "Goodbye!",
      // Add more commands as needed
    };
  
    static executeCommand(commandName) {
      // Execute the command if it exists, or return an error message
      return this.commands[commandName] ? this.commands[commandName]() : "Unknown command";
    }
  }
  
  export default CommandLibrary;