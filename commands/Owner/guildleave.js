const Discord = require("discord.js");

module.exports = {
    name: 'guildleave', 
    aliases: ['gl'], 
    
    execute(client, message, args) { 
        if (!client.config.ownersids.includes(message.author.id)) return message.reply("Your are not the developer/owner of the bot.");
    
        if (!args[0]) {message.channel.send(client.errorEmbed('Please provide a guild id', `leave <guildID>`)); return;}
    
    
        message.channel.send(client.embed("Are you sure?", `The bot will leave \`${client.guilds.cache.get(args[0]).name}\``)).then(msg => {
    
            msg.react('✅').then(r => {
    
                const filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id
    
                let myTime = 600000
    
                const check = msg.createReactionCollector(filter, {time: myTime })
    
                function test(embed) {
                    r.removeAll();
                    msg.edit(client.embed("Leaving!", "Why must you do this... 😢"))
                }
    
                check.on('collect', r => {
                    test(msg);
                    try {
                        client.guilds.cache.get(args.join(" ")).leave().then(g => console.log(`Left the guild ${g}`));
                    } catch(e) {
                        console.error(e);
                    }
                })
    
            });
    
    });
}
}