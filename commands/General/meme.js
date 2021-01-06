const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const got = require('got');

module.exports = {
    name: 'meme',
    description: 'sends meme',


    execute(client, message, args) {

        got('https://www.reddit.com/r/memes/random/.json').then(response => {
        let content = JSON.parse(response.body)
        let permalink = content[0].data.children[0].data.permalink
        let memeUrl = `https://reddit.com${permalink}`
        let memeImage = content[0].data.children[0].data.url
        let memeTitle = content[0].data.children[0].data.title
        let memeUpvotes = content[0].data.children[0].data.ups
        let memeDownvotes = content[0].data.children[0].data.downs
        let memeNumComments = content[0].data.children[0].data.num_comments
        const embed = new MessageEmbed();
        embed.setTitle(`${memeTitle}`)
        .setDescription(`[Click to view](${memeUrl})`)
        .setImage(memeImage)
        .setColor(`RANDOM`)
        .setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes}`)
        message.channel.send( {embed} );
        
    }).catch(console.error);

    }
}