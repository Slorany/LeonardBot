const Discord = require('discord.js');
const client = new Discord.Client({autoReconnect: true});
const config = require('./config.json');

// modules
const fs = require('fs');
const mysql = require('mysql');
const moment = require('moment');
// const ddiff = require('return-deep-diff');
// const markov = require('markov-chains-text').default;

require('./utils/eventLoader')(client);
require('./utils/database');

const sildefsfolder = './sildef';
var sildefs = fs.readdir(sildefsfolder, (err, files) => {
  defs = [];
  files.forEach(file => {
    // console.log(file);
    defs.push(file);
  });
  // console.log(defs);
});

const langsfolder = './langs';
var languages = fs.readdir(langsfolder, (err, files) => {
  langs = [];
  files.forEach(file => {
    // console.log(file);
    langs.push(file);
  });
  // console.log(langs);
});

const ownerid = config.ownerid;
const serverid = config.serverid;
const updateschannelid = config.updateschannelid;


//mysql
//    see utils/database.js

var SQLConfig = {
  host      : config.mysqlHost,
  user      : config.mysqlUser,
  password  : config.mysqlPassword,
  database  : config.mysqlDatabase
};
connectDB = function() {
  connection = mysql.createConnection(SQLConfig);
  connection.connect(function (err) {
    if (err) {
      setTimeout(connectDB, 2000);
    } else {
      isConnected = true;
      systemMessage('mySQL isConnected = ' + isConnected)
    }
  });
  connection.on('error', function (err) {
    systemMessage('Error: ' + err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
      connectDB();
    } else {
      throw err;
    }
  });
  return connection;
};

systemMessage = function (message) {
  console.log('=============================');
  console.log(message);
  console.log('=============================');
};

connectDB();

// process events

process.on('unhandledRejection', err => {
  console.error('Uncaught Promise Error: \n' + err.stack);
});

process.on('SIGINT', function(message) {
    console.log('---------------------');
    console.log('You really want me to die, don\'t you? Fine.');

    process.exit();
});

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    log(`Loading Command: ${props.help.name}. 👌`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  /* This function should resolve to an ELEVATION level which
     is then sent to the command handler for verification*/
  let permlvl = 0;

  if(message.member.hasPermission('MANAGE_MESSAGES')) permlvl = 1;
  if(message.member.hasPermission('MANAGE_GUILD')) permlvl = 2;
  if(message.member.hasPermission('ADMINISTRATOR')) permlvl = 3;
  if (message.author.id === config.ownerid) permlvl = 4;

  return permlvl;
};

// pick a random item in an array
function randomArray(arr) {
  var ret;
  if (arr.length > 0) {
    ret = arr[Math.floor(Math.random() * arr.length)];
  } else {
    ret = null;
  }
  return ret;
};

client.login(config.token);
