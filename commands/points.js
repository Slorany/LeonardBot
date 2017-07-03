const Discord = require('discord.js');
const main = require('../leonard.js');
const config = require('../config.json');
exports.run = (client, message, args) => {









  function assignPoints() {
    connection.query("SELECT 1 FROM users WHERE user = '"+username+"' ORDER BY user LIMIT 1", function (error, results, fields) {
      if (error) {
        console.log(error);
        console.log("fail internal error"+"\r\n");
      }
      if (results.length  > 0) {
        console.log('fail');
      } else {
        console.log('insert');
        var query = connection.query (
          'INSERT INTO users '+
          'SET user = ?, password = ?, token = ?',
          [username, password, token]
        );
        socket.write("success"+"\r\n");
      }
      console.log(results);
    });
  };
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'points',
  description: 'Makes the bot say whatever you want it to in a channel. I swear it can be fun.',
  usage: 'points <mention> <number of points>'
};
