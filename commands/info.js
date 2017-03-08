module.exports = {
    name: 'info',
    help: 'info about the bot.',
    process: function (client, message, args, uptime) {
      message.channel.sendMessage("", {embed: {
        color: 3447003,
        author: {
          name: "Leonard",
          icon_url: client.user.avatarURL
        },
        title: 'I am Leonard, a Bot for discord.',
        url: 'https://blog.discordapp.com/the-robot-revolution-has-unofficially-begun-unofficial-api-23a3c722d5bf#.pzehrb9yp',
        description: 'I am a utility bot aimed at providing help for languages, natural and constructed alike.',
        fields: [
          {
            name: 'Info',
            value: `I am present on __**${client.guilds.array().length}**__ servers.\nI have been running flawlessly for **${uptime}**.\nMy favorite colour is blue.`
          },
          {
            name: 'Where to find me',
            value: 'I am available on [GitHub](https://github.com/Slorany/LeonardBot) and [Trello](https://trello.com/b/bZ4em2fG/leonardbot).\nNo, you won\'t get my phone number, stop asking.'
          },
          {
            name: 'Discord Server',
            value: 'I also have a dedicated [Discord Server](https://discord.gg/htPZXZ3) in which you can ~~complain~~ suggest new features or even help with dev work!'
          },
          {
            name: 'Commands',
            value: '"*What are your commands?*", you ask? Well, type `=help` to discover!'
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: 'Sincerely, Slorany & Leonard'
        }
      }});
    }
  };
