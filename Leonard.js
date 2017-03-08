const Discord = require("discord.js");
const client = new Discord.Client({autoReconnect: true});


// modules
const fs = require("fs");
const ddiff = require("return-deep-diff");


// files
const config = require("./config.json");

//mysql
const mysql = require("mysql");
var connection = mysql.createConnection({
  host      : config.mysqlHost,
  user      : config.mysqlUser,
  password  : config.mysqlPassword,
  database  : config.mysqlDatabase
});

connection.connect(function(err){
  if(err){
    console.log('Error connecting to database.');
    console.log(err);
  } else {
    console.log('MySQL: Connection established');
    callDB(connection);
  }
});

//tumblr
// Authenticate via OAuth
var tumblr = require('tumblr.js');
var tumblrClient = tumblr.createClient({
  consumer_key: config.tumblrKey,
  consumer_secret: config.tumblrSecret,
  token: config.tumblrToken,
  token_secret: config.tumblrTokenSecret
});
    // Make the request
tumblrClient.userInfo(function (err, data) {
        // ...
});

const db = require("./db.js");

const commandsFolder = "./commands";
const commandsList = fs.readdir(commandsFolder, (err, files) => {
  commands = [];
  files.forEach(file => {
    // console.log(file);
    commands.push(file);
  });
  // console.log(commands);
});

var commands = fs.readdir(commandsFolder, (err, files) => {
  commands = [];
  files.forEach(file => {
    // console.log(file);
    commands.push(file);
  });
  // console.log(commands);
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
});

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
    var listOfCommands = commands.map(e => e.replace(".js", ""));
    // console.log(listOfCommands);

    if(listOfCommands.indexOf(command) < 0) {
      return;
    } else {
    let args = message.content.split(" ").slice(1);
    let text = args.join(" ");

    var order = require('./commands/' + command + '.js');

    var d = new Date().toISOString().replace('T', ' ').substr(0, 19)
    var logPlace = message.author.username + " (ID: " + message.author.id + ") on " + message.guild.name + "/#" + message.channel.name + "(" + message.guild.id + "/" + message.channel.id;
    var logCommand = command + "' with arguments: '" + args.join(" ") + "'"

    console.log(d + " - " + logPlace + ") tried command '" + logCommand);

    order.process(client, message, args, commands, listOfCommands, command, connection);
  // regular commands (not limited by a permission)
        if(command === "help") {
          order.process(client, message, args, commands, listOfCommands, command);
        }

        if(command === "choose" || command === "choice" || command === "decide" || command === "pick" ) {
          var req = require('./commands/choose.js')
            req.process(client, message, args);
          }


        if(command === "syntaxtest") {
          order.process(client, message, args);
        }

        // if(command === "kill") {
        //   order.process(client, message, args);
        // }

        if(command === "rules") {
           if(message.guild.name === "Learn A Lang!" || message.guild.id == "223933065074966529") {
             order.process(client, message, args);
           } else {
             message.channel.sendMessage("This command doesn't exist.");
           }
        }

        if(command === "server") {
          order.process(client, message);
        }

        if(command === "lenny") {
          order.process(client, message);
        }

        if(command === "game") {
          order.process(client, message);
        }

        if(command === "role") {
          order.process(client, message, args);
        }

        if(command === "rolemembers") {
          order.process(client, message, args);
        }

        if(command === "say") {
          if(message.guild.name === "Learn A Lang!") return message.channel.sendMessage("This command is deactivated on this server");
          order.process(client, message, args);
        }

        if(command === "info") {
          var uptime = process.uptime();
          uptime = parseInt(uptime);
          uptime = secondsToString(uptime);
          order.process(client, message, args, uptime);
        }

        if(command === "join") {
            order.process(client, message);
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


      if(command === "setgame") {
        if(message.author.id != ownerid) {
          message.reply("Who the hell do you think you are?");
        } else {
        order.process(client, message, args);
        }
      }

      if(command === "embed") {
        if(message.author.id != ownerid) {
          message.reply("Who the hell do you think you are?");
        } else {
        order.process(client, message, args);
        }
      }



    }
  }
};


// functions



  // pick a random item in an array
function randomArray(arr) {
  var ret;
  if (arr.length > 0) {
    ret = arr[Math.floor(Math.random() * arr.length)];
  } else {
    ret = null;
  }
  return ret;
}


// calling DB to keep connection open
function callDB(connection) {
  setInterval(() => connection.query("SELECT 1"), 20000);
};


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
