const { MessageEmbed } = require('discord.js');
// Make sure to export properties
module.exports = {
    name: 'help', // Command name (what's gonna be used to call the command)
    aliases: ['commands','h'], // Command aliases

    execute(client, message, args) {
   
  
            const mainembed = new MessageEmbed()
            .setTitle('Help')
            .setColor("#2F32DF")
            .setDescription(`[Support Server](https://discord.gg/4ncuFrz) - [BlueFox](https://discord.gg/vJqCpuD)
            Prefix: \`${client.config.prefix}\`\n 
            General Commands - \`${client.config.prefix}help general\` 
            \n   Meme Commands - \`${client.config.prefix}help meme\` 
            \n   Utility Commands - \`${client.config.prefix}help utility\` 
            \n   Moderation Commands - \`${client.config.prefix}help moderation\``)
            .setFooter(client.config.footer,client.user.avatarURL)
            
            
            const Generalembed = new MessageEmbed()
            .setTitle('General Commands')
            .setColor("#2F32DF")
            .setDescription(`[Support Server](https://discord.gg/4ncuFrz) - [BlueFox](https://discord.gg/vJqCpuD)
            Prefix: \`${client.config.prefix}\`\n 
            Suggest - \`${client.config.prefix}suggest (i!suggest (suggestion for the bot))\`
            8ball - \`${client.config.prefix}8ball (question)\`
            Avatar - \`${client.config.prefix}avatar\` - Alias: \`${client.config.prefix}avatar (optional: membermention)/av\`
            Coinflip - \`${client.config.prefix}coinflip\` - Alias: \`${client.config.prefix}cf\`
            Echo - \`${client.config.prefix}echo (type anything)\` - Alias: \`${client.config.prefix}say\`
            Mock - \`${client.config.prefix}mock (type anything)\`
            RPS - \`${client.config.prefix}rps (Options: Rock, Paper, Sissors)\`
            NumberGen - \`${client.config.prefix}numbergen\` - Alias: \`${client.config.prefix}numgen\`
            Ascii - \`${client.config.prefix}ascii (text)\` - Alias: \`${client.config.prefix}as (text)\`
            Penis -\`${client.config.prefix}penis\` - Alias: \`${client.config.prefix}pp\`
            How Gay - \`${client.config.prefix}howgay\`
            Simp Rate - \`${client.config.prefix}simprate\``)
            .setFooter(client.config.footer,client.user.avatarURL);
            
            const MemeHelpembed = new MessageEmbed()
            .setTitle('Meme Commands')
            .setColor("#2F32DF")
            .setDescription(`[Support Server](https://discord.gg/4ncuFrz) - [BlueFox](https://discord.gg/vJqCpuD)
            Prefix: \`${client.config.prefix}\`\n 
            DankMeme - \`${client.config.prefix}dankmeme\`
            Meme - \`${client.config.prefix}meme\`
            DogMeme - \`${client.config.prefix}dogmeme\`
            ComedyMeme - \`${client.config.prefix}comedymeme\` - Alias: \`${client.config.prefix}comedy\`
            Funny - \`${client.config.prefix}funnymeme\` - Alias: \`${client.config.prefix}funny\`
            DiscordMeme - \`${client.config.prefix}discordmeme\` - Alias: \`${client.config.prefix}discord\``)
            .setFooter(client.config.footer,client.user.avatarURL);
            
            
            const Utilityembed = new MessageEmbed()
            .setTitle('Utility Commands')
            .setColor('RANDOM')
            .setDescription(`[Support Server](https://discord.gg/4ncuFrz) - [BlueFox](https://discord.gg/vJqCpuD)
            Prefix: \`${client.config.prefix}\`\n 
            Ping - \`${client.config.prefix}ping\` - Alias: \`${client.config.prefix}pong/${client.config.prefix}latency\`
            Userinfo - \`${client.config.prefix}userinfo\` - Alias: \`${client.config.prefix}userinfo (membermention\`
            Serverinfo - \`${client.config.prefix}serverinfo\` - Alias: \`${client.config.prefix}si\`
            Stats - \`${client.config.prefix}stats (type anything)\`  - Alias: \`${client.config.prefix}stats/${client.config.prefix}s\`
            Invite - \`${client.config.prefix}invite\` - Alias: \`${client.config.prefix}inv\`
            Vote - \`${client.config.prefix}vote\``)
            .setFooter(client.config.footer,client.user.avatarURL);
            
            
            const Modembed = new MessageEmbed()
            .setTitle('Moderation Commands ')
            .setColor("#2F32DF")
            .setDescription(`
            \**NOT WORKING\**
            [Support Server](https://discord.gg/4ncuFrz) - [BlueFox](https://discord.gg/vJqCpuD)
            Prefix: \`${client.config.prefix}\`\n 
            Ban - \`${client.config.prefix}ban\` 
            Unban - \`${client.config.prefix}unban\`
            Kick - \`${client.config.prefix}kick\`
            Clear - \`${client.config.prefix}clear (ammount of messages)\`
            Addrole - \`${client.config.prefix}Addrole (membermention) (role)\`
            Embed - \`${client.config.prefix}embed (type anything)\` `)
            .setFooter(client.config.footer,client.user.avatarURL);
     
        
        if (!args[0]){
         message.channel.send(mainembed);
        }
        if (args[0] === 'general'){
         message.channel.send(Generalembed);
        }
        if (args[0] === 'meme'){
         message.channel.send(MemeHelpembed);
        }
        if (args[0] === 'utility'){
         message.channel.send(Utilityembed);
         }
        if (args[0] === 'moderation'){
         message.channel.send(Modembed);
        }
     }
        
};