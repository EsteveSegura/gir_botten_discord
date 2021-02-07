require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

const runBehaviour = require('./behaviour/');
const runCommands = require('./commands/')
const runAudit = require('./audit/')


client.on('ready', function () {
  runAudit(client)
  runCommands(client)
  runBehaviour(client)
});

client.login(process.env.DISCORD_TOKEN);
