const Discord = require("discord.js");

module.exports = {
    name: 'serverlist', 
    aliases: ['sl'], 
    
    execute(client, message, args) { 
      if (!client.config.ownersids.includes(message.author.id)) return message.reply("Your are not the developer/owner of the bot.");
      
      let servers = "";
        
      client.guilds.cache.forEach(g => {
        servers = servers + `\n${g.name} -> Owner: ${g.owner.name.discriminator} | Users:  ${guild.memberCount}\n`;
      });
      
      console.log(servers);
    
    
      return message.channel.send(`Success Total: ${client.guilds.cache.size} Servers. Sent to the bot console.`);
}
}