module.exports = {
    name: 'rules',
    help: 'Rules for the server',
    process: function (client, message, args) {
      if(message.guild.id == "216702535656800257") {
        if(message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {

          var rule1 = ":one:\n:a: We ask that you do not spam. This includes interactions with the bots.\n:b: Feel free to use @Chomsky and the role command to assign yourself roles. You can do so in any channel as long as it is not for a lot of roles. Otherwise, please use <#220522429896851456>.";
          var rule2 = ":two: We will not tolerate harassment or insults. This includes harassment via PMs.";
          var rule3 = ":three:\n:a: In a language-specific channel, please do your best in order to only use English and the appropriate language for the channel for conversation. Anecdotally using other languages as reference for grammatical features or for pointing out similarities is totally okay.\n:b: Derailing the conversation is also okay, but if it extends over a significant period of time, please redirect it to a more relevant channel.";
          var rule4 = ":four: The bots are fun little additions to the server, and useful ones too. However, please try not abusing them. This rule of course does not apply in <#220522429896851456>.";
          var rule5 = ":five: There is no tolerance for either porn or gore.";
          var rule6 = "**If you encounter any problem during your use of our server, ping** `@glorious leader`.";
          var rule7 = "**​BOT COMMANDS**\n<@231849525185216512>'s prefix is &.\n<@221793326016233473>'s prefix is !\n<@223944789437972490>'s prefix is =\n<@193403332046487552>'s prefix is ;";
          var rule8 = `**Kübot**\n<@215361964128337921> can be used to convert X-SAMPA (easy to input) into IPA (easy to read), and as a way to write PIE lemmas. Usage:\nx/DIs Iz @ tEst/\np/px2t"e:r/`;
          var rule9 = "**ORATOR** \n<@251491894729637898>'s prefix is `,`. \nIt is a TTS (Text-To-Speech) bot that handles multiple languages. You can join a voice channel (one of the three ***lesson*** ones) and type `,tts-<en> <message>`. You can replace <en> with another ISO 639 code (<https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes>) to have it say the sentence you typed in another languages than English. \nTo check if it knows a language, you can do `,lang <en>`, replacing <en> with another language."
          var rule10 = "Here you can find the rules as well as the list of <#220646663100956672>: <https://goo.gl/d6DNQ0>\nHere is a direct invite to the server: https://discord.gg/mM8EDA9";

          message.channel.sendMessage(rule1);
          message.channel.sendMessage(rule2);
          message.channel.sendMessage(rule3);
          message.channel.sendMessage(rule4);
          message.channel.sendMessage(rule5);
          message.channel.sendMessage(rule6);
          message.channel.sendMessage(rule7);
          message.channel.sendMessage(rule8);
          message.channel.sendMessage(rule9);
          message.channel.sendMessage(rule10);
      } else {
        message.reply("check your permissions mate.");
      }
    } else if(message.guild.id == "182894318913191936") {
        if(message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {
          message.channel.sendCode("diff", "-SERVER INFORMATION");
          message.channel.sendMessage("**Welcome to the /r/Conlangs Discord Server!**\nAs the title suggests, this is an unofficial server for the /r/Conlangs subreddit. Here you may ask questions to learn more about conlanging, get feedback on your own work, and even find people to collaborate with. However, our server isn't strictly conlanging-focused—rather, it may make sense to think of it as a place for conlangers, not just a place for conlanging.  We have a wide variety of channels spanning many different topics (some which are only available on request) making it possible for like-minded people in the conlanging community to communicate and talk about the things that interest them.\nWe hope you enjoy your time here!\n\nBest,\n**The /r/Conlangs Discord Staff**");

          message.channel.sendCode("diff", "-RULES");
          message.channel.sendMessage("Note that, in all cases except rule 8, **mod discretion** may apply.");
          message.channel.sendMessage("**1. No spam.**\nThis includes but is not limited to continuous nonsensical messages, pointless walls of text, huge conversations in languages other than English (unless in relevant channels), excessively abusing the bot functions, overusing @mentions, and distracting sounds in voice chat. This (minus @mentions, which are always obnoxious) does not apply in <#240224779255152641>.");
          message.channel.sendMessage("**2. No harassment.**\nThis should be pretty clear — threatening someone, continuously trying to anger or upset someone, gaslighting or lying to someone with malicious intent, and so on.");
          message.channel.sendMessage("**3. No discriminatory or insulting comments.**\nJokes are okay as long as it's clear you're joking and you don't take them too far.");
          message.channel.sendMessage("**4. No inciting drama.**\nDon't say things just for the sake of riling people up. Keep the edge to yourself, don't escalate situations beyond what is necessary. If you have a personal issue with someone, take it up with them in private or ask a mod for help. Don't spread it into the chat, and definitely don't bring it onto the subreddit.");
          message.channel.sendMessage("**5. No inappropriate or disturbing content**\nsuch as pornography or gore. NSFW content in general is strongly discouraged. We also discourage things like jumpscares on the sole reason that they're annoying as fuck.");
          message.channel.sendMessage("**6. Stop if someone asks you to stop.**\nAccidents and disagreements happen, and we're usually pretty forgiving at first. But if someone's continuously asking, don't keep pushing your luck — they probably have a pretty good reason. On the other hand, don't abuse this rule to get what you want: this isn't a *magic word* you can use to guide the course of the conversation.");
          message.channel.sendMessage("**7. Repeatedly leaving and joining the server is a most serious offense.** \nTaking a break is okay (please warn us ahead of time), but ragequitting is an annoyance for all of us, members and mods alike, creating unnecessary drama and work.");
          message.channel.sendMessage("**8. Contact the mods.**\nWhether it be rules directly being broken or just confusion about what's going on, you can bring us to the situation at hand by mentioning **@Mod**, summoning us in #meta, or just messaging one of us individually. It'd also be very helpful to specify the channel in question and take screencaps.");
          message.channel.sendMessage("**9. All rules above are subject to mod discretion.**\nRepeatedly breaking the same rule is especially subject to discretion.");

          message.channel.sendCode("diff", "-ROLES");
          message.channel.sendMessage("The **@** marks pingable roles.\n**Purple** roles are helpers of some kind.");
          message.channel.sendCode("diff", "+STAFF");
          message.channel.sendMessage("**@Mod**\nThe people running the server. Ping them if you think rules are being broken or have questions or concerns.");
          message.channel.sendCode("markdown", "#Discord moderators:\nPersephonë#8239\nKnut F. K. Ulstrup#0792\nKlaus#0247\nSascha Baer#6416\nchimaeraUndying#2484\nJasper#5206\nSlorany#6720");
          message.channel.sendMessage("**@linguistics**\nPeople with knowledge in linguistics and the desire to share it and help you.");
          message.channel.sendMessage("**@neography**\nPeople with experience in making scripts, willing to help.");
          message.channel.sendMessage("**@worldbuilding**\nPeople with a fair share of worldbuilding knowledge who can give you a hand with your own worldbuilding.");
          message.channel.sendMessage("**@Classics**\nPeople with in-depth knowledge about Latin or Ancient Greek.");
          message.channel.sendMessage("**@Caucasian**\nPeople with in-depth knowledge about Caucasian languages.");
          message.channel.sendMessage("**@Germanic**\nPeople with in-depth knowledge about Germanic languages.");
          message.channel.sendMessage("**@ProtoIndoEuropean**\nPeople with in-depth knowledge about PIE.");
          message.channel.sendMessage("**@Romance**\nPeople with in-depth knowledge about Romance languages.");
          message.channel.sendMessage("**@Slavic**\nPeople with in-depth knowledge about Slavic languages.");
          message.channel.sendMessage("**@Japonic**\nPeople with in-depth knowledge about Japonic languages.");
          message.channel.sendMessage("**@Turkic**\nPeople with in-depth knowledge about Turkic languages.");
          message.channel.sendMessage("**@Historical Linguistics**\nPeople with in-depth knowledge about Historical Linguistics.");

          message.channel.sendMessage("**@​Bot**\nLiteral robots. Be nice to them or they will take over the world.");
          message.channel.sendMessage("**@​Bot-Dev**\nDevelopers of bots, specifically Connie Langston (Lucy) and Leonard (Slorany). Ping if you have questions or feedback about bot functionality.");
          message.channel.sendMessage("**@​Sub-Mod**\nActual /r/Conlangs moderators. They can't help you if someone's breaking a rule here, but you can ping them to report issues on the subreddit.");
          message.channel.sendCode("markdown", "#Reddit moderators:\nEvan\n    @RomanNumeralII#0488\n    /u/RomanNumeralII\nSlorany\n    @Slorany#6720\n    /u/Slorany\nBaySim\n    @BaySym#0867 \n    /u/nameididntwant\nLucy\n    @LLBlumire#7421 \n    /u/Bur_Sangjun\nGalen\n    @Galen (Badr ibn al-Medina)#6658 \n    /u/readthisresistor\n");

          message.channel.sendCode("diff", "+CHANNEL ACCESS");
          message.channel.sendMessage("**blocked**\nA temporary holding role for people who've broken a rule but haven't been kicked or banned from the server. Can not participate in channels other than <#240168832713359370>.");
          message.channel.sendMessage("**@​relay**\nGrants access to <#187650900091863041>. Ping to start up a game or to inform participants of game progress.");
          message.channel.sendMessage("**@​watcher**\nFor people who like to watch movies in a quasi-simultaneous fashion, via Discord voice calls. Gives access to the Groupwatching voice channel.");
          message.channel.sendMessage("**self**\nGrants access to <#183664934029230080>, <#184812160759758848>, <#191717779466878978> and <#187708241470423040>.");
          message.channel.sendMessage("**politics**\nGrants access to <#183715284358660108> and <#201901022858182666>.");
          message.channel.sendMessage("**nsfw**\nGrants access to <#189561014650535936>. This isn’t for porn but rather for discussions pertaining to sexuality that would not be fit for <#182894318913191936>.");

          message.channel.sendCode("diff", "+OTHER");
          message.channel.sendMessage("**@​kall**\nPingable role to notify that you are interested in voice chatting with other people who are likely to be interested.");
          message.channel.sendMessage("**@​latex**\nThose with a significant understanding of how to use the LaTeX markup language. Ping them, simply, if you have a question about LaTeX.");
          message.channel.sendMessage("**@​viossadjin**\nSpeakers of Viossa, the long-running community pidgin project. Ping them if you have a question about Viossa, such how to get started learning or explanations for unknown words.");
          message.channel.sendMessage("**@​shqpiel**\nRegular participants in #langshqpiel games. Ping to ask if anyone wants to play.");
          message.channel.sendMessage("**@​Music Theorist**\nFor music and composition enthusiasts.");
          message.channel.sendMessage("**@​conregion**\nFor players of Nation States who have a Nation located in the region named “Conregion”.");
          message.channel.sendMessage("**@techsupport**\nFor people willing to help others with computer-related problems.");
          message.channel.sendMessage("There are other “locked” roles pertaining to activities among only a few members of the community. Those are usually made to request and only encompass a strict number of participants. You can ask about those roles if you see them upon clicking on a member who has them, or when they are mentioned in conversation.");

          message.channel.sendCode("diff", "-SISTER COMMUNITIES");
          message.channel.sendCode("diff", "+Learn a Lang!");
          message.channel.sendMessage("Learn a Lang! (or LaL for short) is a Discord server based on learning languages. It shares part of its moderation team and users with the CDN.\nThe partnership specifies that both servers share their resources and ban lists. Being banned from one thus means being banned from the other, too.\nInvite link: https://discord.gg/mM8EDA9");
          message.channel.sendCode("diff", "+Conworlding");
          message.channel.sendMessage("A small conworlding/worldbuilding server.\nInvite link: https://discord.gg/E4VQvAa");
          message.channel.sendCode("diff", "+Conlangverwatch");
          message.channel.sendMessage("An Overwatch gaming server.\nInvite link: http://discord.gg/XNWGMcQ");
          message.channel.sendCode("diff", "+Conlangtleright");
          message.channel.sendMessage("A Battlerite gaming server.\nInvite link: https://discord.gg/5FRnsVr");
          message.channel.sendCode("diff", "+Conlangue of Legends");
          message.channel.sendMessage("A League of Legends Gaming server.\nInvite link: https://discord.gg/v6dhF2f");
        } else {
          message.reply("check your permissions mate.");
        }
      } else {
        message.reply("What's that?");
      }


    }
};
