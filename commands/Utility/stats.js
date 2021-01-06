const { MessageEmbed } = require('discord.js');
const moment = require('moment');
require('moment-duration-format');


module.exports = {
    name: 'stats', // Command name (what's gonna be used to call the command)
    aliases: ['info','botstats'],

    execute(client, message) {

        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;

        const duration = moment.duration(client.uptime).format('D [Days], H [Hours], m [Minutes], s [Seconds]');
        const embed = new MessageEmbed()
        .setTitle('Stats')
        .setColor("RANDOM")
        .setDescription(`
        \**Developers:\** 
        JAF#0001 (<@709338188837158934>)
        FlaringPhoenix#0001 (<@707022994421186651>).`)
        .addField(` Library`,` Discord.js - V12 `)
        .addField(' Heap Usage', `\`${Math.round(process.memoryUsage().heapUsed / 1048576)}mb\``, true) 
        .addField(" Uptime", `\**\`${duration}\`\**`)
        .addField(` Users`, `\**${client.users.cache.size}\**`)
        .addField(` Servers`, `\**${client.guilds.cache.size}\**`)
        .addField(` Channels`, `\**${client.channels.cache.size}\**`)
        .setFooter(client.config.footer,client.user.avatarURL)
        message.channel.send({ embed });
        
  
    }
};