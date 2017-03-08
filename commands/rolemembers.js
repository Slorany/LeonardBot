module.exports = {
    name: 'rolemembers',
    help: 'roleMembers <role>\nDisplays all members who have the role.',
    process: function (client, message, args) {
      try {
        var roleName = message.content.split(' ').splice(1).join(' ');
        var role = message.guild.roles.find(role => role.name.toLowerCase() == roleName.toLowerCase());
        if(!role) {
          return message.channel.sendMessage("This role doesn't exist.")
        }
        var membersWithRole = message.guild.members.filter(m => m.roles.has(role.id));
        var listOfMembers = membersWithRole.map(m => m.user.username + "#" + m.user.discriminator);
        var listNum = listOfMembers.length;
        listOfMembers = listOfMembers.join('\n');
        message.channel.sendMessage(`The following __**${listNum}**__ users have the **${roleName}** role:`);
        message.channel.sendMessage(`**${listOfMembers}**`, {split : {prepend: '**', append: '**'}});
      } catch (error) {
          console.log(error);
      }
    }
  };
