module.exports = {
    name: 'info',
    help: 'info about the bot.',
    process: function (client, message, args, uptime) {
        message.channel.sendMessage("I am present on " + client.guilds.array().length + " servers.\n**Uptime**: " + uptime + "\n**Created by**: Slorany#6720 \n**My ID is**: " + client.user.id);
    }
};