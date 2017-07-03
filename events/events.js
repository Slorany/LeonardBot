client.on('guildMemberAdd', function(member) {
  let guild = member.guild;
  if (guild.id == "182894318913191936") {
    member.guild.channels.get("183670707522109440").sendMessage('', {embed: {
      color: 3394611,
      author: {
        name: "New member",
        icon_url: member.user.avatarURL
      },
      title: `${member.user.username}#${member.user.discriminator} (ID: ${member.user.id})`,
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL
      }
    }});
  } else if(guild.id == "197160100274634752") {
      return;
  } else if(guild.id == "216702535656800257") {
    member.guild.defaultChannel.sendMessage(`Welcome to Learn a Lang!, ${member.user}!\nYou will find instructions about how you can set up your roles and get access to the rest of the server in a PM from our bot Chomsky.\n**Type the commands here, one command per message.**`);
  } else {
    member.guild.defaultChannel.sendMessage('', {embed: {
      color: 3394611,
      author: {
        name: "New member",
        icon_url: member.user.avatarURL
      },
      title: `${member.user.username}#${member.user.discriminator} (ID: ${member.user.id})`,
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL
      }
    }});
  }
});

client.on('guildMemberRemove', function(member) {
  let guild = member.guild;
  if (guild.id == "182894318913191936") {
    member.guild.channels.get("183670707522109440").sendMessage('', {embed: {
        color: 16744192,
        author: {
          name: "A member has left",
          icon_url: member.user.avatarURL
        },
        title: `${member.user.username}#${member.user.discriminator} (ID: ${member.user.id})`,
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL
        }
      }});
  } else {
    member.guild.defaultChannel.sendMessage('', {embed: {
      color: 16744192,
      author: {
        name: "A member has left",
        icon_url: member.user.avatarURL
      },
      title: `${member.user.username}#${member.user.discriminator} (ID: ${member.user.id})`,
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL
      }
    }});
  }
});


client.on('guildCreate', function(guild) {
  console.log(`I have been added to the server ${guild.name}, owned by ${guild.owner.user.username}.`);
  client.channels.get('258955100314140672').sendMessage(`I have been added to the server ${guild.name}, owned by ${guild.owner.user.username}.\n**Total servers:** ${client.guilds.array().length}.`);
});

client.on('guildDelete', function(guild){
  client.channels.get('258955100314140672').sendMessage(`The server ${guild.name} didn't want me there anymore. :(\n**Total servers:** ${client.guilds.array().length}.`);
});

client.on("guildBanAdd", function(guild, user) {
  if (guild.id == "182894318913191936") {
    guild.channels.get("183670707522109440").sendMessage('', {embed: {
      color: 13382451,
      author: {
        name: user.username + '#' + user.discriminator,
        icon_url: user.avatarURL
      },
      title: 'A member has been banned',
      description: `${user.username}#${user.discriminator} (ID: ${user.id}) has been banned.`,
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL
      }
    }});
  } else {
    guild.defaultChannel.sendMessage('', {embed: {
      color: 13382451,
      author: {
        name: user.username + '#' + user.discriminator,
        icon_url: user.avatarURL
      },
      title: 'A member has been banned',
      description: `${user.username}#${user.discriminator} (ID: ${user.id}) has been banned.`,
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL
      }
    }});
  }
});

client.on("guildBanRemove", function(guild, user) {
  if (guild.id == "182894318913191936") {
    guild.channels.get("183670707522109440").sendMessage('', {embed: {
      color: 3355596,
      author: {
        name: user.username + '#' + user.discriminator,
        icon_url: user.avatarURL
      },
      title: 'A member has been unbanned',
      description: `${user.username}#${user.discriminator} (ID: ${user.id}) has been unbanned.`,
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL
      }
    }});
  } else {
    guild.defaultChannel.sendMessage('', {embed: {
      color: 3355596,
      author: {
        name: user.username + '#' + user.discriminator,
        icon_url: user.avatarURL
      },
      title: 'A member has been unbanned',
      description: `${user.username}#${user.discriminator} (ID: ${user.id}) has been unbanned.`,
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL
      }
    }});
  }
});

client.on('guildMemberUpdate', function(oMember, nMember) {
  // console.log(ddiff(oMember, nMember));
});

client.on('guildUpdate', function(oGuild, nGuild) {
  // console.log(ddiff(oGuild, nGuild));
});
