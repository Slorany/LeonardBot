module.exports = {
    name: 'roll',
    help: 'Standard dice notation: <https://en.wikipedia.org/wiki/Dice_notation>\n    Append -L or -H to drop Lowest or Highest.\n    d% = d100\n    Exploding dice: 1d6!\n    Grouping exploding dice: 1d6!!\n    Penetrating dice (like exploding, but -1 on each dice, see Hackmaster Basic rules): 1d6!p\n    Grouping penetrating dice: 1d6!!p\n    Comparing:\n        Explode on a result: 1d6!=4 will explode any roll of a 4\n        Explode above (including) a result: 1d6>4\n        Explode below (including) a result: 1d6!<4\n    Fudge dice: 4dF rolls 4 standard Fudge dice.',
    process: function (client, message, args) {
      // console.log(message.author.username + " has tried to roll " + args)

      if(args == "1d1!") {
        return message.reply("you have rolled 1d1! [1!,1!,1!,1!,∞+1] = ∞+1");
      } else if(args == "1d1!!") {
        return message.reply("you have rolled 1d1!! and thus proved you didn't have a brain.");
      } else {


      const DiceRoller = require('../dice-roller.js').DiceRoller;

      var values = args;
      var diceRoller = new DiceRoller();
      var result = diceRoller.roll(values);
      var logs = diceRoller.getLog();

      // console.log(result);

      // for (var i = 0; i < logs.length; i++) {
      //     console.info(logs[i]);
      // }

      // var request = result["notation"];
      // console.log("Roll: " + request);
      //
      // var throws = result["rolls"][0];
      // console.log("Results: " + throws.join(", "));
      //
      // var total = result["getTotal"];
      //
      // var answer = "you have rolled: " + throws.join(", ") + "resulting in a total of " + total;

      message.reply("you have rolled " + result);
    }

    }
};
