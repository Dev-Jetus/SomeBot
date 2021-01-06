const Discord = require("discord.js")
 const { MessageEmbed } = require('discord.js');
 
module.exports = { 
        name: 'ban',


    async execute(client, message, args) {
        let ban = new MessageEmbed()
        .setColor(`RANDOM`)
        .setTitle("Ban Command")
        .addField("Description:", `Ban a member`, true)
        .addField("Usage:", `i!ban [user] [reason]`, true)
        .addField("Example:", `i!ban <@709338188837158934> spam`)
        .setFooter(client.config.footer,client.user.avatarURL)
         if (client.config.ownersids.includes(message.author.id))return message.channel.send("Sorry you don't have permission to use this!");
        if(!message.member.hasPermission("BAN_MEMBERS") && !message.member.hasPermission("ADMINISTRATOR") && message.author.id !== "291221132256870400")return message.channel.send("Sorry you don't have permission to use this!");


        let member = message.mentions.members.first();
        if(!member) return message.channel.send(ban)
        if(!member.bannable) return message.channel.send("I can't ban this user!")
        if(member.user.id === "291221132256870400") return message.channel.send("I can't ban my owner!")

        if(member.id === message.author.id) return message.channel.send("You can't ban your self")

        let reason = args.slice(1).join(" ");

        if(!reason) {
            res = "No reason given";
        } else {
            res = reason
        }

        await guild.members.ban(reason).catch(error => message.channel.send(`Sorry, I coldn't ban because of: ${error}`));

        let bean = new MessageEmbed()
        .setColor(`RANDOM`)
        .setTitle(`Ban | ${member.user.tag}`)
        .addField("User", member, true)
        .addField("Moderator", message.author, true)
        .addField("Reason", res)
        .setTimestamp()
        .setFooter(client.config.footer,client.user.avatarURL)

        message.channel.send(bean)

        message.delete()
    }
}