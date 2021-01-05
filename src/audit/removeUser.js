function removeUser(client){
    client.on('guildMemberRemove', member => {
        console.log(`**Leave User**
        \nUser: <@${member.id}>`)
    });
}

module.exports = removeUser