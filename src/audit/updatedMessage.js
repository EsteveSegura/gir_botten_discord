function updatedMessage(client, logChannel) {
    client.on('messageUpdate', (oldMsg, newMsg) => {
        client.channels.get(logChannel).send(`**Message Updated**\n**Author**: <@${oldMsg.author.id}>\n**Channel**: #${oldMsg.channel.name}\n**OldMessage**: '${oldMsg.content}'\n**NewMessage**: '${newMsg.content}'`)
    });
}

module.exports = updatedMessage