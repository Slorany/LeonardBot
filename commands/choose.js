exports.run = (client, message, args) => {
  var choices = args.join(' ').split(' or ');

  if (args.length > 1) {
  var picked = randomArray(choices);
  var sentence = randomArray([
      'I pick **' + picked + '**!',
      'No need to discuss, it\'s **' + picked + '**.',
      'Why even ask? **' + picked + '**, obviously.',
      'I mean, if you had a brain (spoilers: you don\'t), you\'d already know it\'s **' + picked + '**.',
      '**' + picked + '**, of course.',
      'It\'s ' + picked + ', which you\'d have known if you were actually good at this.'
  ]);

    message.channel.send(sentence);
  } else {
    message.channel.send('Hm? I didn\'t quite get that.')
  }

function randomArray(arr) {
  var ret;
  if (arr.length > 0) {
    ret = arr[Math.floor(Math.random() * arr.length)];
  } else {
    ret = null;
  }
  return ret;
}

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pick', 'decide', 'choice'],
  permLevel: 0
};

exports.help = {
  name: 'choose',
  description: 'picks stuff at random',
  usage: 'choose <stuff to pick from>`\nSeparate items with `or`'
};
