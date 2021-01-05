const onlyBotCanWrite = require('./onlyBotCanWrite');
const timeUtils = require('../utils/time')

function runBehaviour(client) {
    client.on('message', async (msg) => {
        await onlyBotCanWrite("670952127975391264", msg)
        await onlyBotCanWrite("675440617853157406", msg)
        await onlyBotCanWrite("622566137795837973", msg)
    });
}

module.exports = runBehaviour