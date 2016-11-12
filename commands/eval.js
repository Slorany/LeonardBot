module.exports = {
    name: 'eval',
    help: 'eval jscode',
    process: function (client, message, args) {
      try {
        var code = args.join(" ");
        console.log(code);
        var evaled = eval(code);

        if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

        message.channel.sendCode("xl", clean(evaled));
      } catch(err) {
        message.channel.sendMessage("`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\`");
      }
    }
};
