const Discord = require("discord.js");

module.exports = async (client,message) => {
    
    let startDate = new Date().now;

    console.log(`\x1b[37m`)
    console.log(`\x1b[32m==========================================`)
    console.log(`\x1b[33m   Logged in as ${client.user.tag}!`)
    console.log(`\x1b[33m   Author: ${client.config.ownersname}`)
    console.log(`\x1b[32m==========================================`)
    console.log(`\x1b[33m   Servers: ${client.guilds.cache.size}`)
    console.log(`\x1b[33m   Channels: ${client.channels.cache.size}`)
    console.log(`\x1b[33m   Users: ${client.users.cache.size}`)
    console.log(`\x1b[33m   Emojis: ${client.emojis.cache.size}`)
    console.log(`\x1b[32m==================================`)
    console.log(`\x1b[37m`)

    let endDate = new Date().now;
    
    setInterval(async () => {
        await client.user.setActivity(`o! | ${client.guilds.cache.size} Servers`, { type: "PLAYING" });
    }, 5000);

};