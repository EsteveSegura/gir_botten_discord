const onlyBotCanWrite = require('./onlyBotCanWrite');
const setRoleOnEnter = require('./setRoleOnEnter');
const removeBadWords = require('./removeBadWords');

const basicData = require('../data.json')

function runBehaviour(client) {
    onlyBotCanWrite(client)
    setRoleOnEnter(client,basicData.ROL_USER);
    removeBadWords(client);
}

module.exports = runBehaviour