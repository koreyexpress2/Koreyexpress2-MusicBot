module.exports = {
    name: 'pause',
    aliases: ['wait', 'hold'],
    description: 'pauses the music',
    async execute(client, message, args, cmd, Discord) {
        const voiceChannel = message.member.voice.channel;
if(args[0] == "pause"){
    if(server_queue.connection.dispatcher.paused) return message.channel.send("Song is already paused!");
    server_queue.connection.dispatcher.pause();
    message.channel.send("Paused the song!");
       }
       if(args[0] == "unpause"){
        if(!server_queue.connection.dispatcher.paused) return message.channel.send("Song isn't paused!");
        server_queue.connection.dispatcher.resume();
        message.channel.send("Unpaused the song!");
    }
  }
}