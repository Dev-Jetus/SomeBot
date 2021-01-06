const Discord = require('discord.js')


module.exports = {
  name: "balance",
  aliases: ["bal"],
  description: "displays the user's balance.",
  execute: async(client, message, args, userConf) => {

    let user = message.guild.members.cache.get(member => args.length && message.mentions.users.size < 1 && member.user.username.toLowerCase().startsWith(args.join(" ").toLowerCase())) || client.users.cache.get(args[0]) || message.mentions.users.first() || message.author
    
    if (user.username === undefined) {
      user = user.user;
    }
  
    let embed = new Discord.MessageEmbed()
    .setColor(client.config.embedColor)
    .setTitle(`${user.username}'s Balance: `)
    .setDescription(`**Coins**: $${userConf.balance}`)
    
 
    message.channel.send(embed) 
  } 
}