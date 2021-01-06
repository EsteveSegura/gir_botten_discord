async function deleteCondition(idChannel, msg) {
    if (msg.channel.id == idChannel && !msg.author.bot) await msg.delete()
}

async function onlyBotCanWrite(client) {
    client.on('message', async (msg) => {
        await deleteCondition("670952127975391264", msg)
        await deleteCondition("675440617853157406", msg)
        await deleteCondition("622566137795837973", msg)
    });
}

module.exports = onlyBotCanWrite