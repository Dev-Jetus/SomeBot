const figlet = require("figlet");
module.exports = {
    name: 'ascii', 
    aliases: ['as'], 
    
async execute(client, message, args) {    
    
    if (args.length < 1) return message.channel.send('\**Message is below 1 Character.\** \n Please provide a message below 28 Characters.');
    if (args.length > 28) return message.channel.send('\**Message is above 28 Characters.\** \n Please provide a message below 28 Characters.');
    
        figlet(args.join(" "), async (err, data) => {
            await message.channel.send("```" + data.substr(0,1016) + "```");
        });
    
        return;
}
}