module.exports = {
    name: 'ping',
    aliases: ['pg, hi, hello'],
    description: "this is a ping command!",
    execute(message){
        message.channel.send('pong!');
    },
};