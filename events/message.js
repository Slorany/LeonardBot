const config = require('../config.json');
module.exports = message => {
  var prefix = config.prefix;
  let client = message.client;
  if(message.channel.type != 'text') return;
	if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  let command = message.content.split(' ')[0].slice(config.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    var d = new Date().toISOString().replace('T', ' ').substr(0, 19)
    var logPlace = message.author.username + " (ID: " + message.author.id + ") on " + message.guild.name + "/#" + message.channel.name + "(" + message.guild.id + "/" + message.channel.id;
    var logCommand = command + "' with arguments: '" + params.join(" ") + "'"
    if (perms < cmd.conf.permLevel) return message.reply('you don\'t have the permissions to execute this command.');
    console.log(d + "UTC  - " + logPlace + ") tried command '" + logCommand);
    cmd.run(client, message, params, perms);
  };
};
