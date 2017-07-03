exports.run = (client, message, args) => {

  var grammar;

  if(args == '') {
    grammar = '^[ptk]aCVCV'
    console.log(grammar);
  } else {
    args = args.toString();
    grammar = args;
    console.log('grammar: ' + grammar)
  }

  const v = ['a', 'e', 'i', 'o', 'u'];
  const c = 'bcdfghjklmnpqrstvwxyz'.split('');



  function randomLetter(src) {
    return src[Math.floor(Math.random() * src.length)];
  }

  // parse char
  function letter(char) {
    switch (char) {
      case 'C': // consonant
        return randomLetter(c);
      case 'V': // vowel
        return randomLetter(v);
      case '*': // a random letter
        return randomLetter(c.concat(v));
      case '^':
        return '';
      default:
        return char;
   }
  }

  function makeName(grammar) {
    var ret = [];
    for (var i=0; i < grammar.length; i++) {
      var char = grammar.charAt(i);
      switch(char) {
        case '^': // capitalize next letter
          i += 1;
          if (i >= grammar.length) break;
          if (grammar.charAt(i) === '[') {
            const group = grammar.substring(i+1, grammar.indexOf(']', i));
            if (!group.length) break;
            ret.push(randomLetter(group.split('')).toUpperCase());
            i += group.length + 1;
          } else {
            ret.push(letter(grammar.charAt(i)).toUpperCase());
          }
          break;
        case '[':
          const group = grammar.substring(i+1, grammar.indexOf(']', i));
          if (!group.length) break;
          ret.push(randomLetter(group.split('')));
          i += group.length + 1;
          break;
        case ']':
          break;
        case '+':
          console.log('plus!', ret);
          if (!ret.length) break;
          ret.push(ret[ret.length - 1]);
          break;
        default: // append character
          ret.push(letter(char));
          break;
      }
    }
    return ret.join('');
  }

  function arrayGen(len) {
   return Array.apply(null, Array(len)).map((el) => 0);
  }

  var word = arrayGen(1).map(() => makeName(grammar.trim())).join('');

  message.channel.send(word);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['wg'],
  permLevel: 1
};

exports.help = {
  name: 'wordgen',
  description: 'For the structure, `C` is a consonant, `V` is a vowel. Lower case letters will stay as typed. `[a-z]` will pick a letter from the defined set. `*` will be any letter (C or V), and `+` repeats the previous letter.',
  usage: 'wordgen <structure>'
};
