function newUser(client){
    client.on('guildMemberAdd', member => {
        console.log(`**New User**
        \nUser: <@${member.id}>`)
    });
}

module.exports = newUser