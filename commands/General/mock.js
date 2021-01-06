const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js")

module.exports = {
    name: 'mock', 
  
    execute(client, message, args) {
        const use = args.join(" ")
        const randomizeCase = word =>
          word
            .split("")
            .map(c => (Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()))
            .join("");
        if (!use)
          return message.channel.send("Please provide some text to Mock");
          
    const user = message.author;
    let mockEmbed = new Discord.MessageEmbed()
        .setTitle(`Mocked ${user.username}#${user.discriminator}`)
        .setColor(`RANDOM`)
        .setDescription(args.map(randomizeCase))
        .setImage("https://cdn.discordapp.com/attachments/730672744160690195/731133096627404870/spongebot_mock.gif")
        .setFooter(client.config.footer,client.user.avatarURL)
        message.channel.send(mockEmbed)
    
        message.delete();
    
   }   
}