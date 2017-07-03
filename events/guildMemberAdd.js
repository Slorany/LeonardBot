module.exports = member => {
    let guild = member.guild;
    if (guild.id == "182894318913191936") {
      member.guild.channels.get("183670707522109440").send('', {embed: {
        color: 3394611,
        author: {
          name: "New member",
          icon_url: member.user.avatarURL
        },
        title: `${member.user.username}#${member.user.discriminator} (ID: ${member.user.id})`,
        timestamp: new Date(),
        footer: {
          icon_url: 'https://i.imgur.com/cEkXpR5.png'
        }
      }});
    } else if(guild.id == "197160100274634752") {
      return;
    } else if(guild.id == "216702535656800257") {
      member.guild.defaultChannel.send(`Welcome to Learn a Lang!, ${member.user}!\nYou will find instructions about how you can set up your roles and get access to the rest of the server in a PM from our bot Chomsky.\n**Type the commands here, one command per message.**`);
    } else {
      member.guild.defaultChannel.send('', {embed: {
        color: 3394611,
        author: {
          name: "New member",
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
