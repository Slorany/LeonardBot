module.exports = member => {
    let guild = member.guild;
    if (guild.id == "182894318913191936") {
      member.guild.channels.get("183670707522109440").send('', {embed: {
          color: 16426522,
          author: {
            name: "A member has left",
            icon_url: member.user.avatarURL
          },
          title: `${member.user.username}#${member.user.discriminator} (ID: ${member.user.id})`,
          timestamp: new Date(),
          footer: {
            icon_url: 'https://i.imgur.com/cEkXpR5.png'
          }
        }});
    } else {
      member.guild.defaultChannel.send('', {embed: {
        color: 16426522,
        author: {
          name: "A member has left",
          icon_url: member.user.avatarURL
        },
        title: `${member.user.username}#${member.user.discriminator} (ID: ${member.user.id})`,
        timestamp: new Date(),
        footer: {
          icon_url: 'https://i.imgur.com/cEkXpR5.png'
        }
      }});
    }
};
