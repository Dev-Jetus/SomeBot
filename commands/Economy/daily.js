const Discord = require('discord.js')

let cooldown = new Map();

module.exports = {
  name: "daily",
  aliases: ["daily"],
  description: "daily reward",
  execute: async(client, message, args, userConf) => {

    let user = message.guild.members.cache.get(member => args.length && message.mentions.users.size < 1 && member.user.username.toLowerCase().startsWith(args.join(" ").toLowerCase())) || client.users.cache.get(args[0]) || message.mentions.users.first() || message.author
    
    if (user.username === undefined) {
      user = user.user;
    }

    userConf.inc(message.author.id, 500);
    
    const embed = new Discord.MessageEmbed()
    .setColor(client.config.embedColor)
    .setTitle(`Daily Coins`)
    .setDescription(`${user.username}#${user.discriminator} has received 500 daily coins.`)
    .setThumbnail(message.author.displayAvatarURL())
    message.channel.send(embed)
  } 
}