module.exports = {
    name: 'game',
    help: 'Displays the game you\'re playing.',
    process: function (client, message, args) {
      if(message.author.presence.game != null) {
        message.reply("you are playing " + "**" +  message.author.presence.game.name + "**");
      } else {
        message.reply("you were playing the Game but you just lost.");
      }
    }
};
