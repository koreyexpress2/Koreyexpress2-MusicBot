const weather = require('weather-js');

const Discord = require('discord.js');

module.exports = {
    name: 'weather',
    aliases: ['w'],
    async execute(client, message, args,){
    
        weather.find({search: args.join(" "), degreeType: 'F'}, function (error, result){
        if(error) return message.channel.send(error);
        if(!args[0]) return message.channel.send('Please specify a location')

        if(result === undefined || result.length === 0) return message.channel.send('**Invalid** location');

        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Weather forecast for ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor("Blue")
        .addField('Timezone', `${location.timezone}`, true)
        .addField('Degree Type', 'fahrenheit', true)
        .addField('Temperature', `${current.temperature}°`, true)
        .addField('Wind', current.winddisplay, true)
        .addField('Feels like', `${current.feelslike}°`, true)
        .addField('Humidity', `${current.humidity}%`, true)


        message.member.send(weatherinfo)
        })        
    }
}