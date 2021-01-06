const Discord = require('discord.js')


module.exports = {
  name: "add",
  aliases: ["addbal"],
  description: "add coins from a user, owner only.",
  execute: async(client, message, args, userConf) => {
   
    if (!client.config.ownersids.includes(message.author.id))
        return message.reply("You must be the developer of the bot.")

    const user = message.mentions.users.first() ;
    if(!user) return message.reply("You must mention someone.");

    const pointsToAdd = parseInt(args[1], 10);
    if(!pointsToAdd) 
      return message.reply("You didn't tell me how many points to give...")
    
    // And we save it!
    userConf.set(`${message.guild.id}-${user.id}`, userPoints, "points")

    message.channel.send(`${user.tag} has received ${pointsToAdd} points.`);
  }}