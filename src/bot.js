require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

const roles = require('./roles.json')
const runBehaviour = require('./behaviour/');
const runCommands = require('./commands/')
const audit = require('./audit/')


client.on('ready', function () {
  console.log(`Bot ON`);
});

runCommands(client)
runBehaviour(client)

audit.deleteMessage(client);
audit.updatedMessage(client);
audit.newUser(client);
audit.removeUser(client);

client.on('guildMemberAdd', member => {
  member.addRole(roles.ROL_USER);
});

client.login(process.env.DISCORD_TOKEN);
