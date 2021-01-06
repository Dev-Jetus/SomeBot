const discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
const Enmap = require('enmap');

module.exports = async (client, member) => {

    let joinRole = client.settings.get(member.guild.id, "joinRole");
    let joinChannel = client.channels.get(client.settings.get(member.guild.id, "joinChannel"));
    let joinMessage = client.settings.get(member.guild.id, "joinMessage");

    if (joinRole != "none") {member.addRole(joinRole)}

    if (joinChannel === undefined || joinMessage === undefined) {return;}

    if (joinChannel == "none" || joinMessage == "none") {return;}
    
    let createdAt = `${moment(new Date()).diff(member.user.createdAt, 'days')} days ago`;

    joinMessage = joinMessage.replace("{user}", member.user.tag)
    joinMessage = joinMessage.replace("{userID}", member.user.id)
    joinMessage = joinMessage.replace("{@user}", `<@${member.user.id}>`)
    joinMessage = joinMessage.replace("{userName}", member.user.username)
    joinMessage = joinMessage.replace("{userBot}", member.user.bot)
    joinMessage = joinMessage.replace("{userCreatedAt}", createdAt);
    joinMessage = joinMessage.replace("{guildName}", member.guild.name)
    joinMessage = joinMessage.replace("{guildID}", member.guild.id)
    joinMessage = joinMessage.replace("{guildRegion}", member.guild.region)
    joinMessage = joinMessage.replace("{guildMemberCount}", member.guild.members.size)
    joinMessage = joinMessage.replace("{guildChannelCount}", member.guild.channels.size)
    joinMessage = joinMessage.replace("{guildRoleCount}", member.guild.roles.size)
    joinMessage = joinMessage.replace("{guildAfkTimeout}", member.guild.afkTimeout)
    joinMessage = joinMessage.replace("{guildDefaultNofications}", member.guild.defaultMessageNotifications)
    joinMessage = joinMessage.replace("{guildOwnerID}", member.guild.ownerID)
    
    const embed = new Discord.RichEmbed()
    .setColor(client.config.color)
    .setThumbnail(member.guild.iconURL)
    .setDescription(joinMessage)
    .setFooter(client.config.footer)
    .setTimestamp();

    joinChannel.send(embed).catch(console.error)

};
