const Discord = require('discord.js');
const config = require('../config.json');
exports.run = (client, message, args) => {

  var uptime = process.uptime();
  uptime = parseInt(uptime);
  uptime = secondsToString(uptime);

  const embed = new Discord.RichEmbed()
  .setAuthor('Leonard')
  .setTitle('I am Leonard, a Bot for discord. (click to invite me)')
  /*
   * Alternatively, use '#00AE86', [0, 174, 134] or an integer number.
   */
  .setColor(randomColour(16777215))
  .setDescription('I am a utility bot aimed at providing assistance for languages, natural and constructed alike, and help the process of worldbuilding or writing.')
  .setFooter('Slorany', 'https://i.imgur.com/1jrPSOG.png')
  .setThumbnail('https://i.imgur.com/cEkXpR5.png')
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL(`https://discordapp.com/oauth2/authorize?permissions=2080898167&scope=bot&client_id=223944789437972490`)
  .addField('Info', `I am present on __**${client.guilds.array().length}**__ servers.\nI have been running flawlessly for **${uptime}**.`)
  .addField('\u200b', '\u200b')
  .addField('Where to find me?', 'You can find me on several places, listed just below:\n[GitHub](https://github.com/Slorany/LeonardBot)\n[Trello](https://trello.com/b/bZ4em2fG/leonardbot)\nNo, you won\'t get my phone number, stop asking.')
  .addField('Discord Server', 'I also have a dedicated [Discord Server](https://discord.gg/htPZXZ3) in which you can ~~complain~~ suggest new features or even help with dev work!')

  /*
   * Blank field, useful to create some space.
   */
  .addField('\u200b', '\u200b')
  .addField('Commands',`"*What are your commands?*", you ask? Well, type \`${config.prefix}help\` to discover!` , true);

  message.channel.send({ embed });


    function randomColour(max) {
      var ret;
      ret = Math.floor(Math.random() * max)+1;
      return ret;
    }

    function secondsToString(seconds) {
        try {
            var numyears = Math.floor(seconds / 31536000);
            var numdays = Math.floor((seconds % 31536000) / 86400);
            var numhours = Math.floor(((seconds % 31536000) % 86400) / 3600);
            var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
            var numseconds = Math.round((((seconds % 31536000) % 86400) % 3600) % 60);

            var str = '';
            if(numyears>0) {
                str += numyears + ' year' + (numyears==1 ? '' : 's') + ' ';
            }
            if(numdays>0) {
                str += numdays + ' day' + (numdays==1 ? '' : 's') + ' ';
            }
            if(numhours>0) {
                str += numhours + ' hour' + (numhours==1 ? '' : 's') + ' ';
            }
            if(numminutes>0) {
                str += numminutes + ' minute' + (numminutes==1 ? '' : 's') + ' ';
            }
            if(numseconds>0) {
                str += numseconds + ' second' + (numseconds==1 ? '' : 's') + ' ';
            }
            return str;
        } catch(err) {
            logMsg(Date.now(), 'ERROR', 'General', null, 'Failed to process secondsToString request');
            return;
        }
    };


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['info'],
  permLevel: 0
};

exports.help = {
  name: 'about',
  description: 'Info about the bot.',
  usage: 'about'
};
