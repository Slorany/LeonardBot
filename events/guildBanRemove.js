const Discord = require('discord.js');

module.exports = (guild, user) => {
    if (guild.id == "182894318913191936") {
      guild.channels.get("183670707522109440").send('', {embed: {
        color: 3355596,
        author: {
          name: user.username + '#' + user.discriminator,
          icon_url: user.avatarURL
        },
        title: 'A member has been unbanned',
        description: `${user.username}#${user.discriminator} (ID: ${user.id}) has been unbanned.`,
        timestamp: new Date(),
        footer: {
          icon_url: 'https://i.imgur.com/cEkXpR5.png'
        }
      }});
    } else {
      guild.defaultChannel.send('', {embed: {
        color: 3355596,
        author: {
          name: user.username + '#' + user.discriminator,
          icon_url: user.avatarURL
        },
        title: 'A member has been unbanned',
        description: `${user.username}#${user.discriminator} (ID: ${user.id}) has been unbanned.`,
        timestamp: new Date(),
        footer: {
          icon_url: 'https://i.imgur.com/cEkXpR5.png'
        }
      }});
    }
};
