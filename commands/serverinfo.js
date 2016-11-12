module.exports = {
    name: 'serverinfo',
    help: 'info about the server.',
    process: function (client, message, args) {
      var serverCreationDate = message.guild.creationDate;
      serverCreationDate = serverCreationDate.toISOString().replace(/T/, ' ').replace(/\..+/, '');
      message.channel.sendMessage("**Server:** " + message.guild.name + "\n**Channel:** <#" + message.channel.id + "> \n" + "This server was created on: " + serverCreationDate);
    }
};
