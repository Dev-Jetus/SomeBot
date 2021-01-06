const { MessageEmbed } = require('discord.js');
var rps = [
    "Rock <:Rock_emoji:747569980672966766>",
	"Paper :page_facing_up:",
	"Scissors :scissors:"
]

module.exports = {
    name: 'rps', 

    execute(client, message, args) { 

        if(!args[0]){
            message.channel.send('Please select a option. (Rock, Paper, Scissors)')
            return;
        }

        const embed = new MessageEmbed()
        .setTitle('')
        .setColor('RANDOM')
        .setDescription(`You got ${args} , I got ${(rps[Math.floor(Math.random() * rps.length)])}`)
        .setFooter(client.config.footer,client.user.avatarURL)
        message.channel.send( {embed} );
            

    }
}