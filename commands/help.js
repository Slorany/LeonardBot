module.exports = {
    name: 'help',
    help: '`help [<command>/<here>] [<here>]` \ndisplays the help either for everything (with no arguments) or for a command, here or sends it in PM.' ,
    process: function (client, message, args, commands, listOfCommands, command) {

      var request = args[0];
      // console.log(request);

      var helpMessage = "Here are the commands I can obey:";
        for (var i = 0; i < commands.length; i++) {
            // console.log(listOfCommands[i]);
            var instance = require("./" + listOfCommands[i] + ".js");
            // console.log(instance.help)

            helpMessage += '\n**' + listOfCommands[i] + '**: ' + instance.help;
        }
        // console.log(helpMessage);

      if(!request) {
        message.author.sendMessage(helpMessage);
      } else if(request === "here") {
        message.channel.sendMessage(helpMessage);
      } else if(listOfCommands.indexOf(request) < 0) {
        message.reply("this command doesn't exist.");
      } else if(message.content.indexOf(request) > -1 && !args[1]) {
          var helpOrder = require('./' + request + '.js');
          message.author.sendMessage(`Here is the help for the command **${request}** \n${helpOrder.help}`);
      } else if(args[1] != "here") {
          return;
    } else if(message.content.indexOf(request) > -1 && args[1] === "here") {
      var helpOrder = require('./' + request + '.js');
      message.channel.sendMessage(`Here is the help for the command **${request}** \n${helpOrder.help}`);
    } else {
      message.reply("`=help <command> [<here>]`") ;
    }
    }
};
