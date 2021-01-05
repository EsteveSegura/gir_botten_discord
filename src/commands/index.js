const addTool = require('./addTool')

function runCommands(client) {
    client.on('message', async (msg) => {
        if (msg.content.startsWith('!addtool') && msg.channel.id == "670952127975391264") {
            await addTool(msg)
        }

        if (msg.content.startsWith('!addtool') && msg.channel.id == "675440617853157406") {
            await addTool(msg)
        }

        if (msg.content.startsWith('!addtool') && msg.channel.id == "622566137795837973") {
            await addTool(msg)
        }
    });
}


module.exports = runCommands