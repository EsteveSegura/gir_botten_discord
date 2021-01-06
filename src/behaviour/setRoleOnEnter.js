async function setRoleOnEnter(client, rolUserId) {
    client.on('guildMemberAdd', async (member) => {
        await member.addRole(rolUserId);
    });
}

module.exports = setRoleOnEnter