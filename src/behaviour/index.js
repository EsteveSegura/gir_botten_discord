const onlyBotCanWrite = require('./onlyBotCanWrite');
const setRoleOnEnter = require('./setRoleOnEnter');
const cleanBadVocabulary = require('./cleanBadVocabulary');
const basicData = require('../data.json')

function runBehaviour(client) {
    onlyBotCanWrite(client)
    setRoleOnEnter(client,basicData.ROL_USER);
    cleanBadVocabulary(client);
}

module.exports = runBehaviour