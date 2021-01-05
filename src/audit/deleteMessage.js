function deleteMessage(client){
    client.on('messageDelete', msg => {
        console.log(`**Message Deleted**
        \nAuthor: <@${msg.author.id}>
        \nChannel: #${msg.channel.name}
        \nMessage: '${msg.content}'`)
    });
}

module.exports = deleteMessage