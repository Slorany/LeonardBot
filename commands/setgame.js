module.exports = {
    name: 'setgame',
    help: 'sets the game the bot is playing',
    process: function (client, message, args) {
      var game = args.join(' ');
      if(!game) {
        client.user.setGame(null);
      } else {
        // console.log(game);
        client.user.setGame(game);
        // console.log(client.user.presence.game);
      }
    }
};
