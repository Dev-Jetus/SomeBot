const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const got = require('got');

module.exports = {
    name: 'dogmeme',
    description: 'sends dog Pic',


    execute(client, message, args) {

        got('https://www.reddit.com/r/dogmemes/random/.json').then(response => {
        let content = JSON.parse(response.body)
        let permalink = content[0].data.children[0].data.permalink
        let dogUrl = `https://reddit.com${permalink}`
        let dogImage = content[0].data.children[0].data.url
        let dogTitle = content[0].data.children[0].data.title
        let dogUpvotes = content[0].data.children[0].data.ups
        let dogDownvotes = content[0].data.children[0].data.downs
        let dogNumComments = content[0].data.children[0].data.num_comments
        const embed = new MessageEmbed();
        embed.setTitle(`${dogTitle}`)
        .setDescription(`[Click to view](${dogUrl})`)
        .setImage(dogImage)
        .setColor(`RANDOM`)
        .setFooter(`👍 ${dogUpvotes} 👎 ${dogDownvotes}`)
        message.channel.send( {embed} );
        
    }).catch(console.error);

    }
}