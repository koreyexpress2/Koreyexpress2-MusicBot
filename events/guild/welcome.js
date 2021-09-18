module.exports = (client, message, args, Discord, cmd) => {
    client.on('guildMemberAdd', (member) => {
let role = member.guild.roles.cache.find(role => role.name === 'Members');
member.roles.add(role);
guildMember.roles.add(welcomeRole);
guildMember.guild.channels.cache.get('548330871611195402').send(`Welcome <@${guildMember.user.id}> Make Sure To Check Out ExtremeX On https://archive.org/details/@extremex `)

});


}