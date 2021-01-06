const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")

module.exports = { 
       name: 'customembed',
       aliases: ['cembed'],
       
       async execute(client, message, args) {

       let msg = `\**\__Self Roles\__\**
React to the emoji that goes with the role.

<a:announcement:743859024579264673> • <@&744243408159113217>
<a:attention:743859019373871134> • <@&744243448395202641>
<:panthink:743889425594843136> • <@&744243540368031836>`;
        
       const embed = new MessageEmbed()
       .setColor("RANDOM")
       .setDescription(msg)
       .setFooter(``);

       if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id != "291221132256870400") {message.channel.send("You do not have permission to use embed"); return;}
       else (!client.config.ownersids.includes(message.author.id));
       if (!msg) {message.channel.send('Please provide a message to embed'); return;}

       await message.channel.send(embed);

        await message.delete();

        return;
   }
}