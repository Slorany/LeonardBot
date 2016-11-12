module.exports = {
    name: "kick",
    help: "kick <mention> [<reason>]",
    process: function (client, message, args) {
      if(message.channel.permissionsFor(client.user).hasPermission("KICK_MEMBERS")) {
        if(message.content.indexOf("<@") > -1) {
          var memberToKick = message.mentions.users.first();
          var kicker = message.author.username;

          message.guild.member(memberToKick).kick()
          if(args.length > 1) {
            var i = args.length;
            var reason = args.slice(1, i).join(" ");
            message.channel.sendMessage(memberToKick.username + " has been kicked by **" + kicker + "**.\n**Reason**: " + reason);
          } else {
            message.channel.sendMessage(memberToKick.username + " has been kicked by **" + kicker + "**.");
          }
        } else {
          message.reply("I need a mention of the user.");
        }
      } else {
        message.reply("I don't have the permission to do this.")
      }
    }
};
