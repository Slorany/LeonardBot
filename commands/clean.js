exports.run = function(client, message, args) {
  var count = parseInt(args[0]);
  if(!count) {
    message.channel.send("But how many?");
  }
  if(count > 99 || count < 1) {
    message.channel.send("Please enter a number between 1 and 99.");
  } else {
    var msgsToPurge = count + 1;
    message.channel.fetchMessages({limit: msgsToPurge})
        .then(messages => message.channel.bulkDelete(messages));
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['purge', 'erase', 'nuke', 'cl'],
  permLevel: 1
};

exports.help = {
  name: 'clean',
  description: 'Deletes X amount of messages from the channel.',
  usage: 'clean <number between 1 and 99>'
};
