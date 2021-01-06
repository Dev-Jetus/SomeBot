const discord = require('discord.js');
const Enmap = require('enmap');

module.exports = {
    name: 'showconfig',
    
 async execute(client, message, args) {
   let configProps = Object.keys(guildConf).map(prop => {
      return `${prop}  :  ${guildConf[prop]}`;
    });
    message.channel.send(`The following are the server's current configuration:
    \`\`\`${configProps.join("\n")}\`\`\``);
  }
}