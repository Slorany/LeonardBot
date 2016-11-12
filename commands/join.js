module.exports = {
    name: 'join',
    help: '',
    process: function (client, message) {
      const config = require("../config.json");
      message.reply(config.joinLink);
    }
};
