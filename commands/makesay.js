exports.run = (client, message, args) => {
  try {

  var demandChannel = message.channel;
  if(args[0] == null || args[0] == '') { return message.channel.send('Maybe tell me what to send and where to send it, you goof.') }
  if(args[1] == null || args[1] == '') { return message.channel.send('... Aaaaand?') }
  var specChannel = args[0].toLowerCase();
  var specChannelGuild = message.guild.channels.find('name', specChannel);


  if(specChannelGuild == null) { return message.channel.send("I can't find that channel."); }

    var length = args.length-1;
    var text = args.splice(1, length);
    text = text.join(" ");
    specChannelGuild.sendMessage(text)
    .then(message => demandChannel.send("Alright, check " + specChannelGuild))
    .catch(error);
  } catch(error) {
      console.log(error);
  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: 'makesay',
  description: 'Makes the bot say whatever you want it to in a channel. I swear it can be fun.',
  usage: 'makesay <channel> <message>'
};
