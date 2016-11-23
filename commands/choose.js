module.exports = {
    name: 'choose',
    help: '`choose <stuff to pick from>`\nSeparate items with "or".',
    process: function (client, message, args) {

      var choices = args.join(" ").split(" or ");
      // console.log(choices);

      if (args.length > 1) {
      var picked = randomArray(choices);
      var sentence = randomArray([
          "I pick **" + picked + "**!",
          "No need to discuss, it's **" + picked + "**.",
          "Why even ask? **" + picked + "**, obviously.",
          "I mean, if you had a brain (spoilers: you don't), you'd already know it's **" + picked + "**.",
          "**" + picked + "**, of course."
      ]);

        message.reply(sentence);
      } else {
        message.channel.sendMessage("Hm? I didn't quite get that.")
      }
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
