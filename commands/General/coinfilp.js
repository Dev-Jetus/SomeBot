const { MessageEmbed } = require('discord.js');
var headortails = [
    `Heads`,
    `Tails`
]

module.exports = {
    name: 'coinflip', 
    aliases: ['cf'], 

    execute(client, message, args) { 

        const embed = new MessageEmbed()
        .setTitle('')
        .setColor('RANDOM')
        .setDescription(`You got ${(headortails[Math.floor(Math.random() * headortails.length)])} <a:coin:734034300541992970>`)
        .setFooter(client.config.footer,client.user.avatarURL)
        message.channel.send( {embed} );
            

    }
}