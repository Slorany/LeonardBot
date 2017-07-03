exports.run = (client, message, args) => {
  try {
    var roleName = message.content.split(' ').splice(1).join(' ');
    var role = message.guild.roles.find(role => role.name.toLowerCase() == roleName.toLowerCase());
    if(!role) {
      return message.channel.send("This role doesn't exist.")
    }
    var membersWithRole = message.guild.members.filter(m => m.roles.has(role.id));
    var listOfMembers = membersWithRole.map(m => m.user.username + "#" + m.user.discriminator);
    var listNum = listOfMembers.length;
    listOfMembers = listOfMembers.join('\n');
    message.channel.send(`The following __**${listNum}**__ users have the **${roleName}** role:`);
    message.channel.send(`**${listOfMembers}**`, {split : {prepend: '**', append: '**'}});
  } catch (error) {
      console.log(error);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rmembs', 'rm'],
  permLevel: 1
};

exports.help = {
  name: 'rolemembers',
  description: 'Displays all members who have the role.',
  usage: 'rolemembers <role name>'
};
