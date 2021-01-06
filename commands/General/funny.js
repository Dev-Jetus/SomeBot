const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const got = require('got');

module.exports = {
    name: 'funnymeme',
     aliases: ['funny'],
    description: 'sends funny meme',


    execute(client, message, args) {

        got('https://www.reddit.com/r/funny/random/.json').then(response => {
        let content = JSON.parse(response.body)
        let permalink = content[0].data.children[0].data.permalink
        let funnyUrl = `https://reddit.com${permalink}`
        let funnyImage = content[0].data.children[0].data.url
        let funnyTitle = content[0].data.children[0].data.title
        let funnyUpvotes = content[0].data.children[0].data.ups
        let funnyDownvotes = content[0].data.children[0].data.downs
        let funnyNumComments = content[0].data.children[0].data.num_comments
        const embed = new MessageEmbed();
        embed.setTitle(`${funnyTitle}`)
        .setDescription(`[Click to view](${funnyUrl})`)
        .setImage(funnyImage)
        .setColor(`RANDOM`)
        .setFooter(`👍 ${funnyUpvotes} 👎 ${funnyDownvotes}`)
        message.channel.send( {embed} );
        
    }).catch(console.error);

    }
}