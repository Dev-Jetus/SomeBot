const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const got = require('got');

module.exports = {
    name: 'discordmeme',
    aliases: ['discord'],
    description: 'sends funny meme',
   


    execute(client, message, args) {

        got('https://www.reddit.com/r/Discordmemes/random/.json').then(response => {
        let content = JSON.parse(response.body)
        let permalink = content[0].data.children[0].data.permalink
        let DiscordmemesUrl = `https://reddit.com${permalink}`
        let DiscordmemesImage = content[0].data.children[0].data.url
        let DiscordmemesTitle = content[0].data.children[0].data.title
        let DiscordmemesUpvotes = content[0].data.children[0].data.ups
        let DiscordmemesDownvotes = content[0].data.children[0].data.downs
        let DiscordmemesNumComments = content[0].data.children[0].data.num_comments
        const embed = new MessageEmbed();
        embed.setTitle(`${DiscordmemesTitle}`)
        .setDescription(`[Click to view](${DiscordmemesUrl})`)
        .setImage(DiscordmemesImage)
        .setColor(`RANDOM`)
        .setFooter(`👍 ${DiscordmemesUpvotes} 👎 ${DiscordmemesDownvotes}`)
        message.channel.send( {embed} );
        
    }).catch(console.error);

    }
}