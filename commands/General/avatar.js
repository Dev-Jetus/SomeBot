const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'avatar', 
    aliases: ['av'], 

    execute(client, message, args) {

        const user = message.mentions.users.first() || message.author;
            const avatarEmbed = new MessageEmbed()
                .setColor(0x333333)
                .setAuthor(user.username)
                .setImage(user.avatarURL({ format: 'png', dynamic: true, size: 256}))
                .setFooter(`${client.config.botname} 2020©`,client.user.avatarURL)
            message.channel.send(avatarEmbed);

    }
}