module.exports = {
    name: 'clear',
    aliases:['cl', 'delete', 'scram,'],
    description: "Clear messages!",
    async  execute(client, message, args, cmd, Discord)   {
        if (!args[0]) return message.reply("Please enter the amount of messages to clear!");

        if(isNaN(args[0])) return message.reply("Please type a real number!");

        if(args[0] > 1000) return message.reply("You can't remove more than 1000 messages!");
        
        if(args[0] < 1) return message.reply("You have to delete at least one message!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
            
    });

 }
}   