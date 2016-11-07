var Discord = require('discord.js');
var client = new Discord.Client({autoReconnect: true});
var request = require("request");
var fileSystem = require("fs");
var mysql = require('mysql');
var connection = mysql.createConnection({
  host       : 'hostAddress',
  user       : 'user',
  password   : 'password',
  database   : 'DBName'
});
connection.connect();

var prefix = '=';
var ownerid = 'owner id';

process.on('uncaughtException', function(e) {
  console.log('---------------------');
  console.log('Ugh. What... What happenned?');
  console.log(e.stack);
  console.log('---------------------');

});

process.on('SIGINT', function(message) {
    console.log('---------------------');
    console.log('You really want me to die, don\'t you? Fine.');

    process.exit();
});

client.on('ready', function() {
  console.log("I am ready and connected to " + client.guilds.array().length + " servers.");
  client.guilds.find('name', 'your server name').defaultChannel.sendMessage("I am ready and connected to " + client.guilds.array().length + " servers.");

});

client.on("guildCreate", function(guild) {
  console.log("Trying to insert server " + guild.name + " into database...");
  var serversinfo = {
    "servername": "'" + guild.name + "'",
    "serverid": guild.id,
    "ownerid": guild.owner.id
  }
  connection.query("INSERT INTO servers SET ?", serversinfo, function(error) {
    if(error) {
      console.log(error);
      return;
    }
    console.log("Server " + guild.name + " succesfully added.")
  })
});

client.on("guildDelete", function(guild){
  console.log("Trying to remove " + guild.name + " from the database...");
  connection.query("DELETE FROM servers WHERE serverid = '" + guild.id + "'", function(error) {
    if (error) {
      console.log(error);
      return;
    }
    console.log("Server succesfully removed!");
  });
});



client.on('guildMemberAdd', function(guild, member, user) {
  if (guild.id == "some guild id") {
      client.channels.find('name', 'traffic').sendMessage("Welcome to the " + guild.name + ", **" + member.user.username + "**");
  } else {
    guild.defaultChannel.sendMessage("Welcome to " + guild.name + ", <@" + member.id + ">.");
  }
});

client.on('guildMemberRemove', function(guild, member) {
  if (guild.id == "some guild id") {
      client.channels.find('name', 'traffic').sendMessage("**" + member.user.username + "** has left.");
  } else {
    guild.defaultChannel.sendMessage("<@" + member.id + "> has left.");
  }
});

// client.on('guildBanAdd', (guild, user) => {
//   if (guild.id == "182894318913191936") {
//       client.channels.find('name', 'traffic').sendMessage("<@" + member.id + "> has been banned.");
//   } else {
//     guild.defaultChannel.sendMessage("<@" + member.id + "> has been banned.");
//   }
// });
//
// client.on('guildBanRemove', (guild, user) => {
//   if (guild.id == "182894318913191936") {
//       client.channels.find('name', 'traffic').sendMessage("<@" + member.id + "> has been unbanned.");
//   } else {
//     guild.defaultChannel.sendMessage("<@" + member.id + "> has been unbanned.");
//   }});




client.on('message', function(message) {
    if(message.author.bot != true) {
      if(message.content.substring(0, prefix.length) === prefix) {
        handleCommand(message);
      } else {
        handleMessage(message);
      }
    }
});




function handleMessage(message) {
  var messageLower = message.content.toLowerCase();

    if(message.channel.type == 'text') {
      var word = "text";
      var replysg = "text";
      var replypl = "text";

      var wordCount = messageLower.split(word).length -1;
      var containsWord = messageLower.indexOf(word);
      if (containsWord > -1 && wordCount == 1) {
        message.channel.sendMessage(replysg);
      } else if (containsWord > -1 && wordCount > 1) {
        message.channel.sendMessage(replypl);
      }



    }
  }





function handleCommand(message) {
  if(message.channel.type == 'text') {
    var parsedCommand = message.content.split(" ");
    var commandLabel = parsedCommand.shift().substr(prefix.length);
    var commandArgs = parsedCommand;

    console.log(message.author.username + " on server " + message.guild.name + " tried command '" + message.content.substr(prefix.length) + "'");

    if(commandLabel === "help") {
      message.author.sendMessage("***Commands prefix***: " + prefix + " \n \n" + "**COMMANDS** \n**kick** <mention> [<reason>]: kicks the mentioned user. Reason is optional. \n**ban** <mention> [<reason>]: bans the mentioned user. Reason is optional. \n**test**: if the bot is online, it should reply. \n" + "**say** <something>: makes the bot say something. \n**game**: tells you what you're playing. \n**roll**: rolls dice. Example: `=roll 4d6 + 1d8 + 8d12 + 23`. \n**dnd3** or **dnd4**: rolls stats for a character. Six throws, respectively of 3d6 and 4d6k3. \n**me**: gives some info about you.");
      message.author.sendCode()
      message.channel.sendMessage("I have sent you a PM with a list of the available functions.")
    }

    if(commandLabel === "join") {
      if(message.author.id === ownerid) {
        message.channel.sendMessage("authoriseurl");
      }
    }

    if(commandLabel === "test") {
      message.reply("Test complete. You're on the server named **" + message.channel.guild.name + "** and this channel is *" + message.channel.name + "*. I would like you to know that I'm not in there with you: **you** are in there with ***me***.");
    }

    if(commandLabel === "ping") {
      message.channel.sendMessage("Yeah I'm here. The fuck do you want?");
    }

    if(commandLabel === "game") {
      if(message.author.game != null) {
        message.reply("you are playing " + "**" +  message.author.game.name + "**");
        console.log(message.author.username + " is playing " + message.author.game.name);
      } else {
        message.reply("you were playing the Game but you just lost.");
        // console.log(message.author.username + " is not playing anything.");
      }
    }

    if(commandLabel === "me") {
      message.reply("your ID is **" + message.author.id + "**.\nYour avatar is: " + message.author.avatarURL + "\nYour account was created on: " + message.author.creationDate + "\nYour status is: **" + message.author.status + "**\nYour username is: **" + message.author.username + "**\nAnd your discriminator is: **#" + message.author.discriminator + "**");
    }

    if(commandLabel === "clean") {
      if(message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {
        var count = commandArgs[0];
        if(!count) {
          message.channel.sendMessage("But how many?");
        } else if(count > 100) {
          message.channel.sendMessage("Please enter a number inferior to 100.");
        } else {
          var msgsToPurge = parseInt(commandArgs[0]);
          message.channel.fetchMessages({limit: msgsToPurge})
              .then(messages => message.channel.bulkDelete(messages));
        }
      } else {
        message.reply("Who the hell do you think you are?");
      }
    }

    if(commandLabel === "say") {
        var fullText = commandArgs.join(' ');
        message.channel.sendMessage(fullText);
    }

    if(commandLabel === "makesay") {
      if(message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {
        try {
          var demandChannel = message.channel;
          var specChannel = commandArgs[0];
          var specChannelGuild = message.guild.channels.find('name', specChannel);
          var length = commandArgs.length-1;
          var fullText = commandArgs.splice(1, length);
          fullText = fullText.join(' ');
          specChannelGuild.sendMessage(fullText)
          .then(message => demandChannel.sendMessage("Alright, check #" + specChannel))
          .catch(error);
        } catch(error) {
          console.log(error);
        }
      } else {
        message.channel.sendMessage("You don't have permission to use this command.");
      }
    }



    if(commandLabel === "serverinfo") {
      var serverCreationDate = message.guild.creationDate;
      serverCreationDate = serverCreationDate.toISOString().replace(/T/, ' ').replace(/\..+/, '');
      console.log(serverCreationDate);
      // console.log(message.guild.available);
      message.channel.sendMessage("**Server:** " + message.guild.name + "\n**Channel:** <#" + message.channel.id + "> \n" + "This server was created on: " + serverCreationDate);
    }

    if(commandLabel === "info" || commandLabel === "about") {
      var uptime = process.uptime();
      uptime = parseInt(uptime);
      uptime = secondsToString(uptime);
        message.channel.sendMessage("I am present on " + client.guilds.array().length + " servers.\n**Uptime**: " + uptime + "\n**Created by**: Slorany#6720 \n**My ID is**: 223944789437972490 \n");
    }

    if(commandLabel === "setavatar") {
      if(message.author.id === ownerid) {
        request({url : commandArgs.join(" "), encoding : "binary"}, function(err, response, body) {
          if(err == null && response.statusCode == 200 && body.length > 0) {
            client.user.setAvatar(new Buffer(body, "binary"), function(err1) {
              if(err1 == null) {
                message.reply("This image is horrendous, but I'll keep it just for **you**.");
              } else {
                console.log(err1);
                message.reply("There was an error! D:");
              }
            });
          } else {
            console.log(err);
            message.reply("USER ERROR (obviously)");
          }
        });
      } else {
        message.reply("Wow who the hell do you think you are? You're not my creator!")
      }
    }

    if(commandLabel === "kick" && message.channel.type == 'text') {
      if(message.channel.permissionsFor(message.author).hasPermission("KICK_MEMBERS")) {
        if(message.content.indexOf("<@") > -1) {
          var memberToKick = message.mentions.users.first();
          var kicker = message.author.username;
          // console.log(memberToKick);
          message.guild.member(memberToKick).kick()
          if(commandArgs.length > 1) {
            var reason = commandArgs[1];
            message.channel.sendMessage(memberToKick + " has been kicked by **" + kicker + "**. Reason: " + reason);
          } else {
            message.channel.sendMessage(memberToKick + " has been kicked by **" + kicker + "**.");
          }
        } else {
          message.reply("I need a mention of the user.");
        }
      } else {
        message.reply("you don't have the right to ask me to do this, fuck off.");
      }
    }

    if(commandLabel === "ban" && message.channel.type == 'text') {
      if(message.channel.permissionsFor(message.author).hasPermission("BAN_MEMBERS")) {
        if(message.content.indexOf("<@") > -1) {
          var memberToBan = message.mentions.users.first();
          var kicker = message.author.username;
          // console.log(memberToBan);
          message.guild.member(memberToBan).ban()
          if(commandArgs.length > 1) {
            var reason = commandArgs[1];
            message.channel.sendMessage(memberToBan + " has been banned by **" + kicker + "**. Reason: " + reason);
          } else {
            message.channel.sendMessage(memberToBan + " has been banned by **" + kicker + "**.");
          }
        } else {
          message.reply("I need a mention of the user.");
        }
      } else {
        message.reply("you don't have the right to ask me to do this, fuck off.");
      }
    }

    if(commandLabel === "rolemembers") {
      try {
        var roleName = message.content.split(' ').splice(1).join(' ');
        var roleID = message.guild.roles.find('name', roleName);
        var membersWithRole = message.guild.members.filter(m => m.roles.has(roleID.id));
        var listOfMembers = membersWithRole.map(m => m.user.username + "#" + m.user.discriminator).join("\n");
        message.channel.sendMessage("The following users have the **" + roleName + "** role:\n" + `**${listOfMembers}**`);
      } catch (error) {
          console.log(error);
      }
    }


    if(commandLabel === "dnd3") {

      var char1 = Math.floor(Math.random()*6)+1 + Math.floor(Math.random()*6)+1 + Math.floor(Math.random()*6)+1;
      var char2 =  Math.floor(Math.random()*6)+1 + Math.floor(Math.random()*6)+1 + Math.floor(Math.random()*6)+1;
      var char3 =  Math.floor(Math.random()*6)+1 + Math.floor(Math.random()*6)+1 + Math.floor(Math.random()*6)+1;
      var char4 =  Math.floor(Math.random()*6)+1 + Math.floor(Math.random()*6)+1 + Math.floor(Math.random()*6)+1;
      var char5 =  Math.floor(Math.random()*6)+1 + Math.floor(Math.random()*6)+1 + Math.floor(Math.random()*6)+1;
      var char6 =  Math.floor(Math.random()*6)+1 + Math.floor(Math.random()*6)+1 + Math.floor(Math.random()*6)+1;

      message.channel.sendMessage("char1: " + char1 + "\n" + "char2: " + char2 + "\n" + "char3: " + char3 + "\n" + "char4: " + char4 + "\n" + "char5: " + char5 + "\n" + "char6: " + char6);
    }

    if(commandLabel === "dnd4") {
      function stat(throws) {
        var arr = [];
        var j = 7;

        for(var i=0;i<4;i++) {
          arr.push(Math.floor(Math.random()*6)+1);
          if (arr[arr.length-1]<j) j=arr[arr.length-1];
        }
        return(arr.reduce(function(a,b){return(a+b);},0)-j);
      }

      var char1 = stat();
      var char2 = stat();
      var char3 = stat();
      var char4 = stat();
      var char5 = stat();
      var char6 = stat();

      message.channel.sendMessage("char1: " + char1 + "\n" + "char2: " + char2 + "\n" + "char3: " + char3 + "\n" + "char4: " + char4 + "\n" + "char5: " + char5 + "\n" + "char6: " + char6);
    }

    if(commandLabel === "dnd3.5") {
      message.channel.sendMessage("No, this is shit lmao, go play 5e you moron.")
    }

    if(commandLabel === "kill") {
      var personToKill = commandArgs.join(' ');
      if(!personToKill) {
        message.channel.sendMessage("A ~~man~~ bot needs a name.");
      } else {
        message.channel.sendMessage(personToKill + ", (•̪̀●́)=c==|::::::::> (•.°)~ any last words?");

      }
    }
  }
} // end of commands


}

function secondsToString(seconds) {
    try {
        var numberOfYears = Math.floor(seconds / 31536000);
        var numberOfDays = Math.floor((seconds % 31536000) / 86400);
        var numberOfHours = Math.floor(((seconds % 31536000) % 86400) / 3600);
        var numberOfMinutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
        var numberOfSeconds = Math.round((((seconds % 31536000) % 86400) % 3600) % 60);

        var str = "";
        if(numberOfYears>0) {
            str += numberOfYears + " year" + (numberOfYears==1 ? "" : "s") + " ";
        }
        if(numberOfDays>0) {
            str += numberOfDays + " day" + (numberOfDays==1 ? "" : "s") + " ";
        }
        if(numberOfHours>0) {
            str += numberOfHours + " hour" + (numberOfHours==1 ? "" : "s") + " ";
        }
        if(numberOfMinutes>0) {
            str += numberOfMinutes + " minute" + (numberOfMinutes==1 ? "" : "s") + " ";
        }
        if(numberOfSeconds>0) {
            str += numberOfSeconds + " second" + (numberOfSeconds==1 ? "" : "s") + " ";
        }
        return str;
    } catch(err) {
        return;
    }
}


client.login("TOKEN");
