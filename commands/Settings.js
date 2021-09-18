const {MessageEmbed} = require('discord.js');
const prefix = process.env.PREFIX;
require('dotenv').config();
module.exports = {
    name:'Settings',
    aliases: ['sm', 'g'],
    description: 'This is Settings',
    execute(client, message, args, cmd, Discord) {
        const Embed = new MessageEmbed()
       .setColor('RED')
       .setAuthor('Koreyexpress2 Bot')
       .setURL()
       .setTitle('Settings')
       .addFields(
        {name: `**${prefix}Avatar**`, value: 'this is a Avatar link', inline: true },
        {name: `**${prefix}Commands**`, value: 'this is the command info', inline: true },
        {name: `**${prefix}Ver**`, value: 'this what tell you the version this bot is running', inline: true },
        {name: `**${prefix}Info**`, value: 'this what tell you what is the bot about', inline: true },
          
        )
        message.member.send(Embed)
       
       
        }
   } 