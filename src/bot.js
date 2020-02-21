require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const roles = require('./roles.json')

client.on('ready', () => {
  console.log(`Bot ON`);
});

client.on('message', msg => {
  let msgCleaned = msg.content.split(" ");
  if (msg.content === '!ping') {
    msg.reply('!pong');
  }
});

client.on('guildMemberAdd', member => {
  member.addRole(roles.ROL_USER);
});


client.login(process.env.DISCORD_TOKEN);
