const { MessageEmbed } = require('discord.js');
var Answers = [
	`It is certain.`,
    `It is decidedly so.`,
    `Without a doubt.`,
    `Yes – definitely.`,
    `As I see it, yes.`,
    `Most likely.`,
    `Yes.`,
    `Signs point to yes.`,
    `Reply hazy, try again.`,
    `Ask again later.`,
    `Better not tell you now.`,
    `Cannot predict now.`,
    `Concentrate and ask again.`,
    `Don't count on it.`,
    `My reply is no.`,
    `My sources say no.`,
    `Very doubtful.`,
	"Maybe",
	"Probably",
	"Probably not",
]
module.exports = {
    name: '8ball', 
    aliases: ['8b'], 

    execute(client, message, args) {

        if(!args.join(" ")){
            message.channel.send('Please ask a question.')
            return;
        }

        const embed = new MessageEmbed()
        .setTitle('')
        .setColor('RANDOM')
        .addField("Question", args.join(" "))
        .addField("Answer", (Answers[Math.floor(Math.random() * Answers.length)]))
        .setFooter(client.config.footer,client.user.avatarURL)
        message.channel.send( {embed} );
    }
};