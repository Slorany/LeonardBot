const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require("fs");

const config = require("./config.json");

const mysql = require("mysql");
var connection = mysql.createConnection({
  host      : config.mysqlHost,
  user      : config.mysqlUser,
  password  : config.mysqlPassword,
  database  : config.mysqlDatabase
});
connection.connect();

const db = require("./db.js");

const commandsFolder = "./commands";
const commandsList = fs.readdir(commandsFolder, (err, files) => {
  commands = [];
  files.forEach(file => {
    console.log(file);
    commands.push(file);
  });
  console.log(commands);
});

var ownerid = config.ownerid;


// process events

process.on("unhandledRejection", err => {
  console.error("Uncaught Promise Error: \n" + err.stack);
});

process.on('SIGINT', function(message) {
    console.log('---------------------');
    console.log('You really want me to die, don\'t you? Fine.');

    process.exit();
});

// client events

client.on('ready', function() {
  console.log("I am ready and connected to " + client.guilds.array().length + " servers.");
  client.guilds.find('name', 'Leonard Bot').defaultChannel.sendMessage("I am ready and connected to " + client.guilds.array().length + " servers.");

  // var games = [":help", "by @Slorany#6720", "watching you..."]
  // var randomGame = setInterval(function(){
  //   (Math.floor(Math.random()*(games.length -1))+1)
  // }, 30);
  // var playing = games[randomGame];
  // client.user.presence.setGame(playing);
});

client.on('guildMemberAdd', function(member) {
  let guild = member.guild;
  if (guild.id == "182894318913191936") {
      client.channels.find('name', 'traffic').sendMessage("Welcome to the " + guild.name + ", **" + member.user.username + "**");
  } else {
    member.guild.defaultChannel.sendMessage(`Welcome to ${guild.name}, ${member.user}!`);
  }
});

client.on('guildMemberRemove', function(member) {
  let guild = member.guild;
  if (guild.id == "182894318913191936") {
      client.channels.find('name', 'traffic').sendMessage("**" + member.user.username + "** has left.");
  } else {
    guild.defaultChannel.sendMessage("**" + member.user.username + "** has left.");
  }
});


client.on('guildCreate', function(guild) {
  console.log(`I have been added to the server ${guild.name}, owned by ${guild.owner.user.username}.`);
  client.guilds.find('name', 'Leonard Bot').defaultChannel.sendMessage(`I have been added to the server ${guild.name}, owned by ${guild.owner.user.username}.`);

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
    console.log("Server " + guild.name + " succesfully inserted.")
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


client.on('presenceUpdate', function(oldMember, newMember) {
  let guild = newMember.guild;
  let playRole = guild.roles.find("name", "playing Overwatch");
  if(!playRole) return;

  if(newMember.user.presence.game && newMember.user.presence.game.name === "Overwatch") {
    newMember.addRole(playRole);
  } else if(!newMember.user.presence.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  }
});





client.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(config.prefix)) return;
  if(message.content.substring(0, config.prefix.length) === config.prefix) {
    handleCommand(message);
  } else {
    handleMessage(message);
  }
});







// commands

function handleCommand(message) {
  if(message.channel.type == 'text') {
    var command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);
    var args = message.content.split(" ").slice(1);

    var text = args.join(" ");
    // if(commandsList.indexOf(command) > -1) {}

      var order = require('./commands/' + command + '.js');

      var d = new Date().toISOString().replace('T', ' ').substr(0, 19)

      var logPlace = message.author.username + " (ID: " + message.author.id + ") on " + message.guild.name + "/#" + message.channel.name + "(" + message.guild.id + "/" + message.channel.id;
      var logCommand = command + "' with arguments: '" + args + "'"

      console.log(d + " - " + logPlace + ") tried command '" + logCommand);

  // regular commands (not limited by a permission)
        if(command === "help") {
          order.process(client, message, args, commands, command);
        }

        if(command === "say") {
          order.process(client, message, args);
        }

        if(command === "info") {
          var uptime = process.uptime();
          uptime = parseInt(uptime);
          uptime = secondsToString(uptime);
          order.process(client, message, args, uptime);
        }

        if(command === "about") {
          var uptime = process.uptime();
          uptime = parseInt(uptime);
          uptime = secondsToString(uptime);
          order.process(client, message, args, uptime);
        }

        if(command === "serverinfo") {
          order.process(client, message);
        }

  // admin commands (commands restricted to a permission)
      // kick
      if(command === "kick") {
        if(message.channel.permissionsFor(message.author).hasPermission("KICK_MEMBERS")) {
          order.process(client, message, args)
        } else {
          message.channel.sendMessage("You don't have permission to use this command.");
        }
      }

      // ban
      if(command === "ban") {
        if(message.channel.permissionsFor(message.author).hasPermission("BAN_MEMBERS")) {
          order.process(client, message, args)
        } else {
          message.channel.sendMessage("You don't have permission to use this command.");
        }
      }

      // manage messages


        if(command === "makesay") {
          if(message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {
            order.process(client, message, args);
          } else {
            message.channel.sendMessage("You don't have permission to use this command.");
          }
        }

        if(command === "clean") {
          if(message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {
            order.process(client, message, args);
          } else {
            message.channel.sendMessage("You don't have permission to use this command.");
          }
        }

    // owner commands
      if(command === "eval") {
        if(message.author.id != ownerid) {
          message.reply("Who the hell do you think you are?");
        } else {
          order.process(client, message, args);
        }
      }

      if(command === "join") {
        order.process(client, message);
      }



  }
};


// functions

  // clean text for eval


  function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}


  // seconds to a more human time
function secondsToString(seconds) {
    try {
        var numyears = Math.floor(seconds / 31536000);
        var numdays = Math.floor((seconds % 31536000) / 86400);
        var numhours = Math.floor(((seconds % 31536000) % 86400) / 3600);
        var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
        var numseconds = Math.round((((seconds % 31536000) % 86400) % 3600) % 60);

        var str = "";
        if(numyears>0) {
            str += numyears + " year" + (numyears==1 ? "" : "s") + " ";
        }
        if(numdays>0) {
            str += numdays + " day" + (numdays==1 ? "" : "s") + " ";
        }
        if(numhours>0) {
            str += numhours + " hour" + (numhours==1 ? "" : "s") + " ";
        }
        if(numminutes>0) {
            str += numminutes + " minute" + (numminutes==1 ? "" : "s") + " ";
        }
        if(numseconds>0) {
            str += numseconds + " second" + (numseconds==1 ? "" : "s") + " ";
        }
        return str;
    } catch(err) {
        logMsg(Date.now(), "ERROR", "General", null, "Failed to process secondsToString request");
        return;
    }
}





client.login(config.token);
