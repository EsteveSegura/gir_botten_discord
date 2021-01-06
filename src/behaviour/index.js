const onlyBotCanWrite = require('./onlyBotCanWrite');
const setRoleOnEnter = require('./setRoleOnEnter');

const basicData = require('../data.json')

function runBehaviour(client) {
    onlyBotCanWrite(client)
    setRoleOnEnter(client,basicData.ROL_USER);
}

module.exports = runBehaviour