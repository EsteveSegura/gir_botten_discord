async function onlyBotCanWrite(idChannel, msg) {
    if (msg.channel.id == idChannel && !msg.author.bot) await msg.delete()
}

module.exports = onlyBotCanWrite