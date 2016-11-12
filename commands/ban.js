module.exports = {
    name: "ban",
    help: "ban <mention> [<reason>]",
    process: function (client, message, args) {
      if(message.channel.permissionsFor(client.user).hasPermission("BAN_MEMBERS")){
        if(message.content.indexOf("<@") > -1) {
          var memberToban = message.mentions.users.first();
          var banner = message.author.username;

          message.guild.member(memberToban).ban()
          if(args.length > 1) {
            var i = args.length;
            var reason = args.slice(1, i).join(" ");
            message.channel.sendMessage(memberToban.username + " has been banned by **" + banner + "**.\n**Reason**: " + reason);
          } else {
            message.channel.sendMessage(memberToban.username + " has been banned by **" + banner + "**.");
          }
        } else {
          message.reply("I need a mention of the user.");
        }
      }
    }
};
