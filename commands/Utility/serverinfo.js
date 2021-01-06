const { MessageEmbed } = require('discord.js');


module.exports = {
    name: 'serverinfo', 
    aliases: ['si'], 

    execute(client, message) {
        
        const cmdStr = client.commands.map(c => `\`${c.name}\``).join();
        const embed = new MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor(3447003)
        .setDescription(`Owner: \`${message.guild.owner.user.tag} (${message.guild.owner.id})\``)
        .addField('Location', message.guild.region.toUpperCase(), true)
        .addField("Total | Humans | Bots", `${message.guild.memberCount} | ${message.guild.members.cache.filter(member => !member.user.bot).size} | ${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
        .addField(`Ban count`, `${message.guild.fetchBans()} Bans`)
        .addField("Emoji Count", `${message.guild.emojis.cache.size} emojis `)
        .addField("Roles Count", `${message.guild.roles.cache.size} roles`)
        .addField("Channel Count",`${message.guild.channels.cache.size} channels`)
        .addField('Created', message.guild.createdAt.toLocaleString(), true)
        .setTimestamp()
        .setFooter(client.config.footer,client.user.avatarURL)
      
        message.channel.send({ embed });
      
    }
};