const argsUtils = require('../utils/args');

const allowedChannelIds = [
    "670952127975391264",
    "675440617853157406",
    "622566137795837973"
]

async function addTool(msg) {
    try {
        if (allowedChannelIds.includes(msg.channel.id)) {
            const cmd = argsUtils.splitArgs(msg.content, ['-name', '-description', '-url'])
            await msg.channel.send(`**${cmd.name}**:${cmd.description}<${cmd.url}> añadido por: <@${msg.author.id}> `)
        }
    } catch (e) {
        console.log(e)
        await msg.reply(`Error!: El comando no esta formateado correctamente, debe contener los argumento -name -description -url
        \nej: !addtool -name TestName -description DescriptionName -url http://example.com`).then(msg => {
            msg.delete(30000)
        })
    }
}

module.exports = addTool
