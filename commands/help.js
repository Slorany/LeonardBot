module.exports = {
    name: 'help',
    help: 'help command',
    process: function (client, message, args, commands, command) {

      var request = args[0];
      console.log(request);

      if(!request) {
        message.reply("`:help <command> [<here>]`") ;
      } else if(message.content.indexOf(request) > -1 && !args[1]) {
      var helpOrder = require('./' + request + '.js');
      message.author.sendMessage(`Here is the help for the command **${request}**`);
      message.author.sendCode(helpOrder.help);
    } else if(message.content.indexOf(request) > -1 && args[1] === "here") {
      var helpOrder = require('./' + request + '.js');
      message.channel.sendMessage(`Here is the help for the command **${request}**`);
      message.channel.sendCode(helpOrder.help);
    } else {
      message.reply("`:help <command> [<here>]`") ;
    }
    }
};
