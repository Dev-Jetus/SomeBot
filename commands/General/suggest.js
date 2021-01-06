const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'suggest', // Command name (what's gonna be used to call the command)

    execute(client, message, args) {
        if(!args[0]){
            message.channel.send('Please provide a Suggestion for the bot')
            return;
        }
        const user = message.mentions.users.first() || message.author;
        const Channel = client.channels.cache.get("744162563419537460");
        const embed = new MessageEmbed()
        .setTitle('New Suggestion')
        .setColor('RANDOM')
        .setDescription(args.join(" "))
        .setFooter(`from ${user.username}#${user.discriminator}`,client.user.avatarURL)
        Channel.send( {embed} ); 
        message.channel.send(`Posted the suggestion! <#744162563419537460> \n\*If the channel mentioned invaild, Please join the support server \(\`i!invite\`\)\*`)
    }
};