const deleteMessage = require('./deleteMessage');
const updatedMessage = require('./updatedMessage');
const newUser = require('./newUser');
const removeUser = require('./removeUser');

const basicData = require('../data.json')

function runAudit(client) {
    deleteMessage(client, basicData.LOG_CHANNEL);
    updatedMessage(client, basicData.LOG_CHANNEL);
    newUser(client, basicData.LOG_CHANNEL);
    removeUser(client, basicData.LOG_CHANNEL);
}

module.exports = runAudit
