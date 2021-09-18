const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.aliases = new Discord.Collection();

['Command_Handler', 'Event_Handler'].forEach(handler =>{
        require(`./Handlers/${handler}`)(client, Discord);
}) 

client.on('guildMemberAdd', guildMember =>{
        let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');
        
        guildMember.roles.add(welcomeRole);
        guildMember.guild.channels.cache.get('548330871611195402').send(`Welcome <@${guildMember.user.id}> Make Sure To Check Out ExtremeX On https://archive.org/details/@extremex `)
    });

client.login(process.env.DISCORD_TOKEN);