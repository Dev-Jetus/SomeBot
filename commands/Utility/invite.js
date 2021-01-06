const { MessageEmbed} = require('discord.js');

module.exports = {
    name: 'invite', 
    aliases: ['inv'], 

    execute(client, message, args) {

        const user = message.mentions.users.first() || message.author;
            const avatarEmbed = new MessageEmbed()
                .setColor(`RANDOM`)
                .addField(`Invite OddlyBot`,`[Invite Me](https://discord.com/oauth2/authorize?client_id=730856708762632274&scope=bot&permissions=347467207) `)
                .addField(`Support Server`,`[Click Here](https://discord.gg/4ncuFrz)`)
                .addField(`Bot Hosting`,`[BlueFox](https://discord.gg/vJqCpuD)`)
                .setFooter(client.config.footer,client.user.avatarURL)
            message.channel.send(avatarEmbed);

    }
}