module.exports = {
    name: 'makesay',
    help: '`makesay <channel> <message>` (requires Manage Messages perm) \nMakes the bot send a message containing <message> in a <channel> of the server.',
    process: function (client, message, args, error) {
      try {
        var demandChannel = message.channel;
        var specChannel = args[0];
        var specChannelGuild = message.guild.channels.find('name', specChannel);
        var length = args.length-1;
        var text = args.splice(1, length);
        text = text.join(" ");
        specChannelGuild.sendMessage(text)
        .then(message => demandChannel.sendMessage("Alright, check #" + specChannel))
        .catch(error);
      } catch(error) {
        console.log(error);
      }
    }
};
