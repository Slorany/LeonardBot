const Discord = require('discord.js');
const main = require('../Leonard.js');
const config = require('../config.json');
exports.run = (client, message, args) => {
  var syntID;
  if(args[0] == "list") {return message.channel.send('Here\'s the list of the 218 syntaxtest sentences: <http://pastebin.com/raw/BpfjThwA>')}
  if(!isNaN(args[0])) {
    syntID = parseInt(args[0])
  }
  if(!args[0]) {
    syntID = Math.floor(Math.random() * 218) + 1;
  }

  fetchSynt();
  var num = synt.id;
  var sentence = synt[0];
  console.log(synt);
  console.log('id: ' + num);
  console.log('sentence: ' + sentence);

  function fetchSynt() {
    connection.query('SELECT * FROM syntaxtest WHERE id=' + syntID, function (err, result, fields) {
      if (err) throw err;
      synt = result[0];
      num = synt.id;
      sentence = synt.sentence;
      return message.channel.send(`**${num}.** ${sentence}`);
    });
  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['synt', 'stest', 'syntest', 'syntax'],
  permLevel: 0
};

exports.help = {
  name: 'syntaxtest',
  description: 'delivers a syntaxtest for you to have fun',
  usage: 'syntaxtest ["list"] [<number 1 - 218>]'
};
