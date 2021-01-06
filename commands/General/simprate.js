const { MessageEmbed } = require('discord.js');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {
    name: 'simprate', 
   

    execute(client, message, args) {
        const user = message.mentions.users.first() || message.author;
        
        const embed = new MessageEmbed()
        .setTitle('SimpRate Machine')
        .setColor('RANDOM')
        .setDescription(`${user} is ${getRandomInt(1, 100)}% Simp `)
        .setFooter(client.config.footer,client.user.avatarURL)
        message.channel.send( {embed} );
    }
};