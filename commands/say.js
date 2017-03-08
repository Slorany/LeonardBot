module.exports = {
    name: 'say',
    help: '`say message` \nMakes the bot send a message containing <message> in the same channel.',
    process: function (client, message, args) {
      var text = args.join(" ");
      if(!text) return message.reply("what the heck do you want me to say?");
      message.channel.sendMessage(text);
    }
};
