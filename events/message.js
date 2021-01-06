const Discord = require("discord.js");

module.exports = async (client, message) => {
    // Make sure the message author isn't a bot.
    if (message.author.bot) return;
    // Make sure the channel the command is called in is a text channel.
    if (message.channel.type !== 'text' & 'dm') return;

    /* Split the message content and store the command called, and the args.
    * The message will be split using space as arg separator.
    */
    const guildConf = client.settings.ensure(message.guild.id, client.defaultSettings);

    const userConf = client.users.settings.ensure(message.author.id, {user: message.author.id, balance: 0, level: 0});
    
    if (message.content.indexOf(guildConf.prefix) !== 0) return;

    
    const cmd = message.content.split(/\s+/g)[0].slice(client.config.prefix.length);
    const args = message.content.split(/\s+/g).slice(1);

    try {
        // Check if the command called exists in either the commands Collection
        // or the aliases Collection.
        let command;
        if (client.commands.has(cmd)) {
            command = client.commands.get(cmd);
        } else if (client.aliases.has(cmd)) {
            command = client.commands.get(client.aliases.get(cmd));
        }

        // Make sure command is defined.
        if (!command) return;

        // If the command exists then run the execute function inside the command file.
        command.execute(client, message, args, userConf, guildConf);
        console.log(`Ran command: ${command.name}`); // Print the command that was executed.
    } catch (err) {
        console.error(err);
    }

}