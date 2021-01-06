const discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = async (client, m, guild) => {

    client.settings.delete(guild.id);
};
  
