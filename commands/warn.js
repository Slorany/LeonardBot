const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('You\'re not gonna give a reason for the warning? For real? Dude. Please.');
  if (message.mentions.users.size < 1) return message.reply('I\'m gonna need a mention first, mate.').catch(console.error);
  const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .addField('Action:', 'Warning')
  .addField('User:', `Nick: ${user.username}#${user.discriminator}\nID:${user.id}`)
  .addField('Reason:', `${reason}`)
  .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`);
  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['stopyourshit'],
  permLevel: 0
};

exports.help = {
  name: 'warn',
  description: 'Issues a warning to the mentioned user.',
  usage: 'warn [mention]'
};
