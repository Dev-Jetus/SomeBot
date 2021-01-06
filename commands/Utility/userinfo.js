const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = { 
name: 'userinfo', // Command name (what's gonna be used to call the command)

        execute(client, message) {
            const user = message.mentions.users.first() || message.author;
            const embed = new MessageEmbed()
                .setColor("RANDOM")
                .setThumbnail(user.avatarURL())
                .addField(`${user.username}#${user.discriminator}`,` ID: \`${user.id}\``)
                .addField("Nickname:", `${user.nickname !== null ? `${user.nickname}` : 'None'}`, true)
                .addField("Status:" , `${user.presence.status.toUpperCase()}`, true)
                .addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
                .addField("Joined The Server On:", `${moment.utc(message.guild.members.cache.get(user.id).joinedAt).format("dddd, MMMM Do YYYY")}`, true)
                .addField("Account Created On:", `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}`, true) 
                .setFooter(client.config.footer,client.user.avatarURL)
            message.channel.send({embed});

        }

}