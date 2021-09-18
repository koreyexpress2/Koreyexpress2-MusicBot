module.exports = {
name: 'resume',
aliases: ['r','rs'], 
description: 'resume function',
async execute(client, message, args, cmd, Discord){
  const { channel } = message.member.voice;
    if (!channel) { message.channel.send("MUST JOIN VC BEFORE USING THIS COMMAND!")
                       }
    const server_queue = queue.get(message.guild.id);
    if (message.guild.me.voice.channel !== message.member.voice.channel) {
            return message.channel.send("JOIN MY VOICE CHANNEL IF YOU WANT USE ME!");
}
try {
    if (server_queue && !serverQueue.playing) {
      server_queue.playing = true;
         server_queue.connection.dispatcher.resume();
            return message.channel.send({embed:{
color: "RANDOM",                                       description:'▶ **Resumed**'}});
        }
        return message.channel.send('**There is nothing to resume**.');
      } catch {
        server_queue.connection.dispatcher.end();
        return message.channel.send("**TRY AGAIN**")
      }
    }
};