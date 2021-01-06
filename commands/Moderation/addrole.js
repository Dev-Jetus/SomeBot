const { MessageEmbed } = require('discord.js');


module.exports = {
    name: 'addrole', 


    execute(client, message, args) { 

        const embed = new MessageEmbed()
        .setTitle('')
        .setColor('RANDOM')
        .setDescription(`Command coming soon`)
        .setFooter(client.config.footer,client.user.avatarURL)
        message.channel.send( {embed} );
            

    }
}