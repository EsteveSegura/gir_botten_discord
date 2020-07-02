require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const roles = require('./roles.json')
const typeRacer = require('./libs/typeracer');
const TypeRacer = require('./libs/typeracer');

client.on('ready', () => {
  console.log(`Bot ON`);
  /*let users = client.users.array()
  for (let i = 0; i < users.length; i++) {
    console.log(users[i])
  }*/
});

let newRace = new TypeRacer()

client.on('message', async(msg) => {
  if (msg.content.toLowerCase() == "!typerace") {
    let msgRacer = await msg.channel.send(`Preparaos! Debeis sustituir las barras bajas por espacios "_" !`)
    newRace.initGame(true)
    await sleep(10)
    for(let i = 3 ; i >= 1 ; i--){
      await msgRacer.edit(`${i}....`)
      await sleep(1)
    }
    await msgRacer.edit(newRace.getQuote().ofuscated)
    newRace.setStartDate()
  }

  if(newRace.getQuote().raw == msg.content && newRace.initGame){
    let timeOnRespond = Math.abs(Date.now() - newRace.startDate)
    msg.channel.send(`<@${msg.author.id}> : **${timeOnRespond}ms**`)
  }
});

client.on('guildMemberAdd', member => {
  member.addRole(roles.ROL_USER);
});

client.login(process.env.DISCORD_TOKEN);

async function sleep(s) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 1000 * 2);
  });
}