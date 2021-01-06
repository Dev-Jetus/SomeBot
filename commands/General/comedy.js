const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const got = require('got');

module.exports = {
    name: 'comedymeme',
     aliases: ['comedy'],
    description: 'sends funny meme',


    execute(client, message, args) {

        got('https://www.reddit.com/r/ComedyCemetery/random/.json').then(response => {
        let content = JSON.parse(response.body)
        let permalink = content[0].data.children[0].data.permalink
        let comedyUrl = `https://reddit.com${permalink}`
        let comedyImage = content[0].data.children[0].data.url
        let comedyTitle = content[0].data.children[0].data.title
        let comedyUpvotes = content[0].data.children[0].data.ups
        let comedyDownvotes = content[0].data.children[0].data.downs
        let comedyNumComments = content[0].data.children[0].data.num_comments
        const embed = new MessageEmbed;
        embed.setTitle(`${comedyTitle}`)
        .setDescription(`[Click to view](${comedyUrl})`)
        .setImage(comedyImage)
        .setColor(`RANDOM`)
        .setFooter(`👍 ${comedyUpvotes} 👎 ${comedyDownvotes}`)
        message.channel.send( {embed} );
        
    }).catch(console.error);

    }
}