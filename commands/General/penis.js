const { MessageEmbed } = require('discord.js');
var Sizes = [
	"8=D",
    "8==D",
    "8===D",
    "8====D",
    "8=====D",
    "8======D",
    "8=======D",
    "8========D",
    "8=========D",
    ]
module.exports = {
    name: 'penis', 
    aliases: ['pp'], 

    execute(client, message, args) {

        const user = message.mentions.users.first() || message.author;
        const embed = new MessageEmbed()
        .setTitle('Penis Size Machine')
        .setColor('RANDOM')
        .setDescription(`\** ${user}'s penis\**
        ${(Sizes[Math.floor(Math.random() * Sizes.length)])}`)
        .setFooter(client.config.footer,client.user.avatarURL)
        message.channel.send( {embed} );
    }
};