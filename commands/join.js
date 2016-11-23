module.exports = {
    name: 'say',
    help: 'Provides the link to add the bot to your server.',
    process: function (client, message) {
      const config = require("../config.json");
      message.reply(config.joinLink);
    }
};
