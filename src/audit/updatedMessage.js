function updatedMessaged(client){
    client.on('guildMemberAdd', (oldMsg,newMsg) => {
        console.log(`**Message Updated**
        \nAuthor: <@${oldMsg.author.id}>
        \nChannel: #${oldMsg.channel.name}
        \nOldMessage: '${oldMsg.content}'
        \nNewMessage: '${newMsg.content}'`)
    });
}

module.exports = updatedMessaged