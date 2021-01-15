const badWords = ["puta","puto","gilipollas","zorra","tonto"];

async function removeBadWords(client){
    client.on('message', msg =>{
        console.log(msg.content);
    
        if(badWords.includes(msg.content)){
            msg.delete();
            msg.reply("oye por favor, habla bien maleducado");
        }
    })
}

module.exports = removeBadWords