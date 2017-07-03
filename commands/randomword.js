exports.run = (client, message, args) => {
  if(args == "") {
    let pattern = "CVCVCVCV";
    let result = replacePattern(pattern);

    message.channel.send(result);
  }

  if(args.join("").length > 50) {
    return message.reply("that's gonna be a bit too long eh, mate.")
  }

  let listOfLangs = langs.map(e => e.replace(".json", ""));
  // console.log(listOfLangs);
  if(args.length > 1) {
    if(listOfLangs.indexOf(args[args.length-1].toLowerCase()) > -1) {
      var select = args[args.length-1];
      // console.log(select);
      var lang = require('../langs/' + select + '.json');
      // console.log(lang);
      // console.log(lang["A"][1]);
      let givenPattern = args.slice(0, args.length-1);
      givenPattern = givenPattern.join(" ")
      // console.log(givenPattern);

      var generated = replaceGivenPattern(givenPattern);
      // console.log(generated);


      message.channel.send(generated);

      function replaceGivenPattern(givenPattern) {
        let possibleA = lang["A"];
        let possibleB = lang["B"];
        let possibleC = lang["C"];
        let possibleD = lang["D"];
        let possibleE = lang["E"];
        let possibleF = lang["F"];
        let possibleG = lang["G"];
        let possibleH = lang["H"];
        let possibleI = lang["I"];
        let possibleJ = lang["J"];
        let possibleK = lang["K"];
        let possibleL = lang["L"];
        let possibleM = lang["M"];
        let possibleN = lang["N"];
        let possibleO = lang["O"];
        let possibleP = lang["P"];
        let possibleQ = lang["Q"];
        let possibleR = lang["R"];
        let possibleS = lang["S"];
        let possibleT = lang["T"];
        let possibleU = lang["U"];
        let possibleV = lang["V"];
        let possibleW = lang["W"];
        let possibleX = lang["X"];
        let possibleY = lang["Y"];
        let possibleZ = lang["Z"];

        let patternIndex = givenPattern.length;
        let result = new Array(patternIndex);

        while (patternIndex--) {
           result[patternIndex] = givenPattern[patternIndex]
            .replace(/A/,randomArray(possibleA))
            .replace(/B/,randomArray(possibleB))
            .replace(/C/,randomArray(possibleC))
            .replace(/D/,randomArray(possibleD))
            .replace(/E/,randomArray(possibleE))
            .replace(/F/,randomArray(possibleF))
            .replace(/G/,randomArray(possibleG))
            .replace(/H/,randomArray(possibleH))
            .replace(/I/,randomArray(possibleI))
            .replace(/J/,randomArray(possibleJ))
            .replace(/K/,randomArray(possibleK))
            .replace(/L/,randomArray(possibleL))
            .replace(/M/,randomArray(possibleM))
            .replace(/N/,randomArray(possibleN))
            .replace(/O/,randomArray(possibleO))
            .replace(/P/,randomArray(possibleP))
            .replace(/Q/,randomArray(possibleQ))
            .replace(/R/,randomArray(possibleR))
            .replace(/S/,randomArray(possibleS))
            .replace(/T/,randomArray(possibleT))
            .replace(/U/,randomArray(possibleU))
            .replace(/V/,randomArray(possibleV))
            .replace(/W/,randomArray(possibleW))
            .replace(/X/,randomArray(possibleX))
            .replace(/Y/,randomArray(possibleY))
            .replace(/Z/,randomArray(possibleZ));
        }
        return result.join("").toLowerCase();

      }
    } else {
      let pattern = args.join(" ");
      let result = replacePattern(pattern);
      // console.log(pattern);

      message.channel.send(result);
      // console.log(result);
    }


  } else {



  let pattern = args.join(" ");
  let result = replacePattern(pattern);
  // console.log(pattern);

  message.channel.send(result);
  // console.log(result);
  }

function replacePattern(pattern) {

    var possibleA = "";
    var possibleB = "";
    var possibleC = "pbtdʈɖcɟkgqɢʔmɱnɳɲŋɴʙrʀɾɽɸβfvθðszʃʒʂʐçʝxɣχʁħʕhɦɬɮʋɹɻjɰlɭʎʟ"; // consonants
    var possibleD = "";
    var possibleE = "";
    var possibleF = "ɸβfvθðszʃʒʂʐçʝxɣχʁħʕhɦɬɮ"; // fricatives
    var possibleG = "";
    var possibleH = "";
    var possibleI = "";
    var possibleJ = "cɟɲçʝjʎɕʑ"; // palatals
    var possibleK = "ǁǂǃǀʘ"; // clicks
    var possibleL = "ʟʎlɬɮɭɺ"; // laterals
    var possibleM = "";
    var possibleN = "mɱnɳɲŋɴ"; // nasals
    var possibleO = "";
    var possibleP = "pbtdʈɖcɟkgqɢʔ"; // plosives
    var possibleQ = "";
    var possibleR = "rɾɹɻʀʁɽɺ"; // rhotics
    var possibleS = "szʃʒʂʐ"; // sibilants
    var possibleT = "ɾɽɺ"; // taps & flaps
    var possibleU = "iyɨʉɯuɪʏʊeøɘɵɤoəɛœɜɞʌɔæɐaɶɑɒ"; // all vowels
    var possibleV = "aeiou"; // few vowels
    var possibleW = "ʋɹɻjɰlɭʎʟwʍɥ"; // approximants
    var possibleX = "ʙrʀ"; // trills
    var possibleY = "";
    var possibleZ = "";


    // var possible = ""; //


    var patternIndex = pattern.length;
    var result = new Array(patternIndex);

    while (patternIndex--) {
       result[patternIndex] = pattern[patternIndex]
        .replace(/A/,rndChar(possibleA))
        .replace(/B/,rndChar(possibleB))
        .replace(/C/,rndChar(possibleC))
        .replace(/D/,rndChar(possibleD))
        .replace(/E/,rndChar(possibleE))
        .replace(/F/,rndChar(possibleF))
        .replace(/G/,rndChar(possibleG))
        .replace(/H/,rndChar(possibleH))
        .replace(/I/,rndChar(possibleI))
        .replace(/J/,rndChar(possibleJ))
        .replace(/K/,rndChar(possibleK))
        .replace(/L/,rndChar(possibleL))
        .replace(/M/,rndChar(possibleM))
        .replace(/N/,rndChar(possibleN))
        .replace(/O/,rndChar(possibleO))
        .replace(/P/,rndChar(possibleP))
        .replace(/Q/,rndChar(possibleQ))
        .replace(/R/,rndChar(possibleR))
        .replace(/S/,rndChar(possibleS))
        .replace(/T/,rndChar(possibleT))
        .replace(/U/,rndChar(possibleU))
        .replace(/V/,rndChar(possibleV))
        .replace(/W/,rndChar(possibleW))
        .replace(/X/,rndChar(possibleX))
        .replace(/Y/,rndChar(possibleY))
        .replace(/Z/,rndChar(possibleZ));
    }

    function rndChar(sample) {
        return sample.charAt(Math.floor(Math.random() * sample.length));
    }
    return result.join("").toLowerCase();
    };

    function randomArray(arr) {
      var ret;
      if (arr.length > 0) {
        ret = arr[Math.floor(Math.random() * arr.length)];
      } else {
        ret = null;
      }
      return ret;
    };
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['randw','rw'],
  permLevel: 1
};

exports.help = {
  name: 'randomword',
  description: 'You really need to ask? Gosh you\'re stupid.',
  usage: 'randomword [<pattern>] [<language>]'
};
