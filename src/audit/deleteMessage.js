function deleteMessage(client,logChannel){
    client.on('messageDelete', msg => {
        client.channels.get(logChannel).send(`**Message Deleted**
        \n**Author**: <@${msg.author.id}>
        \n**Channel**: #${msg.channel.name}
        \n**Message**: '${msg.content}'`)
    });
}

module.exports = deleteMessage