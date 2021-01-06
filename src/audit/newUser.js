function newUser(client,logChannel){
    client.on('guildMemberAdd', member => {
        client.channels.get(logChannel).send(`**New User**\n**User**: <@${member.id}>`)
    });
}

module.exports = newUser