const { MessageEmbed } = require('discord.js');


module.exports = {
    name: 'clear', 


   execute(client, message, args) { 
        
        if (client.config.ownersids.includes(message.author.id))return message.channel.send("Sorry you don't have permission to use this!");
        if(!message.member.hasPermission("BAN_MEMBERS") && !message.member.hasPermission("ADMINISTRATOR") && message.author.id !== "291221132256870400" )return message.channel.send("Sorry you don't have permission to use this!");
        if (args.length < 1) return message.channel.send("Please provide the number of messages to delete")
        
        
        let messagecount = parseInt(args);
        message.channel.fetchMessages({ limit: messagecount+1 })
        .then(messages => message.channel.bulkDelete(messages));
        
        const embed = new MessageEmbed()
        .setTitle('')
        .setColor('RANDOM')
        .setDescription(`Cleared ${messagecount} Messages`)
        .setFooter(`Cleared by ${message.author}`,client.user.avatarURL)
        message.channel.send( {embed} );
        message.delete({ timeout: 5000 })

    }
}