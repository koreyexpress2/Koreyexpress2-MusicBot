const {MessageEmbed} = require('discord.js');
const prefix = process.env.PREFIX;
require('dotenv').config();
module.exports = {
    name:'Commands',
    aliases: ['cm'],
    description: "shows the commands ",
    execute(client, message, args, cmd, Discord) {
        const Embed = new MessageEmbed()
       .setColor('RANDOM')
       .setAuthor('Koreyexpress2 Bot')
       .setURL()
       .setTitle('Commands Music')
       .addFields(
        {name: `**${prefix}weather**`, value: 'show you da weather', inline: true},
        {name: `**${prefix}play**`, value: 'plays the song requested', inline: true},
        {name: `**${prefix}stop**`, value: 'stop the bot from playing', inline: true},
        {name: `**${prefix}Queue**`, value: 'List of songs is playing', inline: true},
        {name: `**${prefix}Resume**`, value: 'Resume bot from playing', inline: true},
        {name: `**${prefix}Clear**`, value: 'Clear message to 10000 but not delete old message after 14 days', inline: true},
        {name: `**${prefix}Leave**`, value: 'stop the bot leave voice channel completely', inline: true},
        {name: `**${prefix}Ping**`, value: 'testing the bot will repond', inline: true},
          
        

        )
            message.member.send(Embed)
    

        }
    } 
        