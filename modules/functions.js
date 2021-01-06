var fs = require("fs");
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = (client, guildConf, message) => {

  client.wait = (ms) => {
    let start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
      end = new Date().getTime()
    }
    return;
  }

  client.isOwner = (message) => {
    return (message.author.id === client.config.ownerids);
  }

  client.embed = (title, description, footer, color) => {
    let e = new MessageEmbed()
    if (title != null) e.setTitle(title)
    if (description != null) e.setDescription(description)
    if (color != null) {
      e.setColor(color)
    } else {
      e.setColor("RANDOM")
    }
    if (footer != null) {
      e.setFooter(footer)
    } else {
     e.setFooter(client.config.footer)
    }
    e.setTimestamp();
    return e;
  }

client.errorEmbed = (error, usage) => {
    let e = new MessageEmbed()
    e.setDescription(`
:x: **Error:** \`\`\`${error}\`\`\`
:gear: **Correct Usage:** \`\`\`${usage}\`\`\`
`)
    e.setColor(client.embed.color)
    e.setFooter(client.embed.footer)
    e.setTimestamp();
    return e;
  }
  
}