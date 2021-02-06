const badWords 

function cleanBadVocabulary(client){
    client.on('message', msg =>{

        if(badWords.includes(msg.content)){
            msg.delete();
            msg.reply("oye por favor, habla bien maleducado");
        }
    })
}

module.exports = {cleanBadVocabulary}