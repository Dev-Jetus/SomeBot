const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")

module.exports = { 
       name: 'embed',
       
       async execute(client, message, args) {

       let msg = args.join(' ');
        
       const embed = new MessageEmbed()
       .setColor("RANDOM")
       .setDescription(msg)
       .setFooter(``)
       .setTimestamp();
        
       if (client.config.ownersids.includes(message.author.id))return message.channel.send("Sorry you don't have permission to use this!");
       if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id != "291221132256870400") {message.channel.send("You do not have permission to use embed"); return;}
       else (!client.config.ownersids.includes(message.author.id)) 
       if (!msg) {message.channel.send('Please provide a message to embed'); return;}

       await message.channel.send(embed);

        await message.delete();

        return;
   }
}