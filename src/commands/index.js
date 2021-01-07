const addTool = require('./addTool')

function runCommands(client) {
    client.on('message', async (msg) => {
        if (msg.content.startsWith('!addtool')) {
            await addTool(msg)
        }

    });
}


module.exports = runCommands