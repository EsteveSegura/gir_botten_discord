function removeUser(client,logChannel){
    client.on('guildMemberRemove', member => {
        client.channels.get(logChannel).send(`**Leave User**
        \n**User**: <@${member.id}>`)
    });
}

module.exports = removeUser