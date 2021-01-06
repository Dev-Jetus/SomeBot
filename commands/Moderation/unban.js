const Discord = require("discord.js")
 const { MessageEmbed } = require('discord.js');
 
module.exports = { 
        name: 'unban',


    async execute(client, message, args) {
        if (args.length < 1) return message.channel.send("Please provide the user's id")
        let unban = new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setTitle("Unban Command")
        .addField("Description:", `Unban a member`, true)
        .addField("Usage:", `i!unban [user id] `, true)
        .addField("Example:", `i!unban 709338188837158934`)
        .setFooter(client.config.footer,client.user.avatarURL);
        
        if(!message.member.hasPermission("BAN_MEMBERS") && !message.member.hasPermission("ADMINISTRATOR") && message.author.id !== "291221132256870400") return message.channel.send("Sorry you don't have permission to use this!");
        else (!client.config.ownersids.includes(message.author.id)); 

        let member = args;
        if(!member) return message.channel.send(unban);


        if(member.id === message.author.id) return message.channel.send("You can't ban your self");


        await guild.members.unban(member)
        
        let unbanned = new MessageEmbed()
        .setColor(`RANDOM`)
        .setTitle(`Unbanned | ${member.user.tag}`)
        .addField("User", member, true)
        .addField("Moderator", message.author, true)
        .setTimestamp()
        .setFooter(client.config.footer,client.user.avatarURL)

        message.channel.send(unbanned)

        message.delete()
    }
}