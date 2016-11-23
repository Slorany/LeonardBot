module.exports = {
    name: "clean",
    help: "`clean ##` \nDeletes messages, ## being the number of messages, inferior to 100.",
    process: function (client, message, args) {
        var count = parseInt(args[0]);
        if(!count) {
          message.channel.sendMessage("But how many?");
        } else if(count > 99) {
          message.channel.sendMessage("Please enter a number between 1 and 99.");
        } else {
          var msgsToPurge = count + 1;
          message.channel.fetchMessages({limit: msgsToPurge})
              .then(messages => message.channel.bulkDelete(messages));
        }
    }
};
