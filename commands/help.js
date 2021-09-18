const {MessageEmbed} = require('discord.js');
const prefix = process.env.PREFIX;
require('dotenv').config();

module.exports = {
    name:'help',
    aliases: ['h', 'panic'],
    description: 'This is a help commands',
    execute(client, message, args, cmd, Discord) {
        const Embed = new MessageEmbed()
       .setColor('BLUE')
       .setAuthor('Koreyexpress2 Bot')
       .setTitle('Please Select from the following Category ')
       .addFields(
           {name: `**${prefix}Feature**`, value: 'this what site is on this bot' },
           {name: `**${prefix}Settings**` , value: 'what function of the bot' },
        
           )
           message.member.send(Embed)
       }
   } 