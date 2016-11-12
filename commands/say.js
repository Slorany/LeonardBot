module.exports = {
    name: 'say',
    help: 'say message \n\nMakes the bot send a message containing <message> in the same channel.',
    process: function (client, message, args) {
      var text = args.join(" ");
      message.channel.sendMessage(text);
    }
};
