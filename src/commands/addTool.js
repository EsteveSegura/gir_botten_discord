const argsUtils = require('../utils/args');

async function addTool(msg) {
    try {
        const cmd = argsUtils.splitArgs(msg.content, ['-name', '-description', '-url'])
        await msg.channel.send(`**${cmd.name}**:${cmd.description}${cmd.url} añadido por: <@${msg.author.id}> `)
    } catch (e) {
        await msg.reply(`Error!: El comando no esta formateado correctamente, debe contener los argumento -name -description -url\nej: !addtool -name TestName -description DescriptionName -url http://example.com`).then(msg => {
            msg.delete(30000)
        })
    }
}

module.exports = addTool