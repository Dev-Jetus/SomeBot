const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');

module.exports = { 
    name: 'kick',

        async execute(client, message, args) {
             if (client.config.ownersids.includes(message.author.id))return message.channel.send("Sorry you don't have permission to use this!");
                if (!message.member.hasPermission("KICK_MEMBERS")  && message.author.id !== "291221132256870400") return message.channel.send("Sorry, you don't have permissions to use this!");
                else (!client.config.ownersids.includes(message.author.id)) 
                let kickexample = new RichEmbed()
                .setColor(`RANDOM`)
                .setTitle("Kick Command")
                .addField("Description:", `Kick a member`, true)
                .addField("Usage:", "i!kick [user] [reason]", true)
                .addField("Example:" ,`i!kick <@709338188837158934> spam`)
                .setFooter(client.config.footer,client.user.avatarURL)

                    let member = message.mentions.members.first();
                    if(!member) return message.channel.send(kickexample)
                    
                    if(!member.kickable) 
                    return message.channel.send("I cannot kick this user!");
                if(member.user.id === "291221132256870400") return message.channel.send("I can't kick my owner!")

                    
                    let reason = args.slice(1).join(' ');
                    if(!reason) {
                    res = "No reason given";
                    }
                    else {
                    res = `${reason}`
                    }
                    
                    await member.kick(reason)
                    .catch(error => message.reply(`Sorry, I couldn't kick because of : ${error}`));

                    let logkick = new MessageEmbed()
                    .setColor(`RANDOM`)
                    .setTitle(`Kick | ${member.user.tag}`)
                    .addField("User", member, true)
                    .addField("Moderator", message.author, true)
                    .addField("Reason", res)
                    .setTimestamp()
                    .setFooter(client.config.footer,client.user.avatarURL)

                    message.channel.send(logkick)

                    message.delete();
                    
        }
}