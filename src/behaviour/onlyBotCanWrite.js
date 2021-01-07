const autoDeleteMessageChannels = [
    "670952127975391264",
    "675440617853157406",
    "622566137795837973"
]

async function deleteCondition(idChannels, msg) {
     idChannels.map(async(id) => {
        if (msg.channel.id == id && !msg.author.bot){
            await msg.delete()
        }
     })
}

async function onlyBotCanWrite(client) {
    client.on('message', async (msg) => {
        await deleteCondition(autoDeleteMessageChannels, msg)
    });
}

module.exports = onlyBotCanWrite