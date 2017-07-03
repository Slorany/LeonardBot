const Discord = require('discord.js');
exports.run = (client, message, args) => {
  var game = args.join(' ');
  if(!game) {
    client.user.setGame(null);
  } else {
    client.user.setGame(game);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sg'],
  permLevel: 4
};

exports.help = {
  name: 'setgame',
  description: 'changes the game the bot plays.',
  usage: 'setgame <game>'
};
