const { MessageEmbed } = require('discord.js');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {
    name: 'numbergen', 
    aliases: ['numgen'], 

    execute(client, message, args) {
        const embed = new MessageEmbed()
        .setTitle('')
        .setColor('RANDOM')
        .setDescription(`Your Number is ${getRandomInt(1, 100000)}`)
        .setFooter(client.config.footer,client.user.avatarURL)
        message.channel.send( {embed} );
    }
};