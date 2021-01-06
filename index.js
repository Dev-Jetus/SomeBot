// Require the dependencies
const Statcord = require("statcord.js");
const Discord = require("discord.js");
const path = require('path');
const glob = require('glob');
const fs = require('fs');
const DBL = require("dblapi.js");
const Enmap = require('enmap');

// Require the config.json file, and define our Client.
const config = require('./config.json');
const client = new Discord.Client({ ws: { properties: { $browser: "Discord iOS" }} });
const statcord = new Statcord.Client("statcord.com-SUyu3RrYo3Z2TRFSWf8K", client);
client.config = config;
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczMDg1NjcwODc2MjYzMjI3NCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTk3NDMxODA0fQ.oQWGDhghXnSCacRtrcGfBwd06gDw4r_2XcyZrUBaaOk', client);

// Create two Collections where we can store our commands and aliases in.
// Store these collections on the client object so we can access them inside commands etc.
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

client.settings = new Enmap({
    name: "settings",
    fetchAll: false,
    autoFetch: true,
    dataDir: "./data/servers/",
    cloneLevel: 'deep'
});
client.users.settings = new Enmap({
    name: "users",
    fetchAll: false,
    autoFetch: true,
    dataDir: "./data/users/",
    cloneLevel: 'deep'
  });

const defaultSettings = {
    prefix: "o!",
    modLogChannel: "mod-log",
    modRole: "Moderator",
    adminRole: "Administrator",
    welcomeChannel: "welcome",
    welcomeMessage: "Welcome {{user}}!"
}

client.defaultSettings = defaultSettings;


client.on("ready", async () => {
    console.log("ready");

    // Start auto posting
    let initalPost = await statcord.autopost();

    // If there is an error, console.error and exit
    if (initalPost) {
        console.error(initalPost);
        process.exit();
    }

});



// Load functions
require('./modules/functions.js')(client);

// Function that will load all commands from the given directory.
function loadCommands(cmdDir) {
    // Create an empty array that will store all the file paths for the commands,
    // and push all files to the array.
    const items = [];
    items.push(...glob.sync(`${path.join(__dirname, cmdDir)}/**/*.js`));

    // Iterate through each element of the items array and add the commands / aliases
    // to their respective Collection.
    for (const item of items) {
        // Remove any cached commands
        if (require.cache[require.resolve(item)]) delete require.cache[require.resolve(item)];

        // Store the command and aliases (if it has any) in their Collection.
        const command = require(item);
        client.commands.set(command.name, command);
        if (command.aliases) {
            for (const alias of command.aliases) {
                client.aliases.set(alias, command.name);
            }
        }
    }
    console.log('Commands was loaded...');
}
// Run function and pass the relative path to the 'commands' folder.
loadCommands('commands');

// Load events
fs.readdir(`${process.cwd()}/events/`, (err, files) => {
    if (err) return console.error(err);
    for (const file of files) {
        if (!file.endsWith(".js")) continue;
        let event = require(`${process.cwd()}/events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`${process.cwd()}/events/${file}`)];
        console.log(`\x1b[33m${client.config.botname} >\x1b[32m Loaded \x1b[36m${file} \x1b[32mEvent\x1b[37m`)
    }
});
client.on("ready", async () => {
    let postError = await statcord.post();

    // If there is a post error notify command runner
    if (postError) {
        console.error(postError.message);
    }

});
// Login
client.login(config.token)