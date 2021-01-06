const Discord = require("discord.js")
module.exports = {
    name: 'eval', 

    async execute(client, message, args, Discord) {
        if (!client.config.ownersids.includes(message.author.id)) return message.reply("Your are not the developer/owner of the bot.");
        const code = args.join(" ");
        if (!code) return message.channel.send("❌ | Please provide code to eval.");
        try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
}