const config = require('../config.json');

module.exports = message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(config.prefix)) return;
  if(message.content.substring(0, config.prefix.length) === config.prefix) {
    if(message.channel.type == 'text') {
      const args = ;
      const command = ;
    }
  }
}
