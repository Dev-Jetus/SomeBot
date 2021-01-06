const { MessageEmbed} = require('discord.js');

module.exports = {
    name: 'vote', 
     

    execute(client, message, args) {

            const avatarEmbed = new MessageEmbed()
                .setColor(`RANDOM`)
                .addField(`Support us:`,`[Vote for us on top.gg](https://top.gg/bot/730856708762632274/vote)\n [Support Server](https://discord.gg/4ncuFrz) - [BlueFox](https://discord.gg/vJqCpuD)`)
                .setFooter(client.config.footer,client.user.avatarURL)
            message.channel.send(avatarEmbed);

    }
}