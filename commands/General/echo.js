const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js")
module.exports = {
    name: 'echo', // Command name (what's gonna be used to call the command)
    aliases: ['say'], // Command aliases

    execute(client, message, args) {
        const user = message.author;
        const embed = new Discord.MessageEmbed()
        .setTitle(`Echoed ${user.username}#${user.discriminator}`)
        .setColor('RANDOM')
        .setDescription(`${args.join(' ')}`)
        .setFooter(client.config.footer,client.user.avatarURL)
        message.channel.send( {embed} );
        
        message.delete();
    }
};