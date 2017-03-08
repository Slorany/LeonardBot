module.exports = {
    name: 'lenny',
    help: '`lenny`\nDisplays a Lenny.',
    process: function (client, message) {

      var lenny = randomArray([
            "( ͡° ͜ʖ ͡°)",
            "(ಠ_ಠ)",
            "(ง ͠° ͟ل͜ ͡°)ง",
            "( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)",
            "( ͡° ͜ ͜ʖ ͡°)",
            "( ͡° ل͜ ͡°)",
            "ᕦ( ͡° ͜ʖ ͡°)ᕤ",
            "( ͠° ͟ʖ ͠°)",
            "( ° ͜ʖ °)",
            "(˵ ͡° ͜ʖ ͡°˵)",
            "( ͡° ʖ̯ ͡°)",
            "(☞ ͡° ͜ʖ ͡°)☞",
            "( ͡° ͜V ͡°)",
            " ͡	° ͜ʖ ͡ –	✧",
            "✺◟( ͡° ͜ʖ ͡°)◞✺",
            "( ͡° ͜ʖ ͡°)>⌐■-■",
            "( ͡o ͜ʖ ͡o)",
            "( ͡☉ ͜ʖ ͡☉)",
            "( ͡°⁄ ⁄ ͜⁄ ⁄ʖ⁄ ⁄ ͡°)"
      ]);
        message.channel.sendMessage(lenny);
    }
};



function randomArray(arr) {
  var ret;
  if (arr.length > 0) {
    ret = arr[Math.floor(Math.random() * arr.length)];
  } else {
    ret = null;
  }
  return ret;
}
