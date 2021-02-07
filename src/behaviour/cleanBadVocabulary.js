const {readFile} = require('../utils/readFile')

const badWords = readFile('insultos.txt');

function cleanBadVocabulary(client){
    client.on('message', msg =>{


        console.log(badWords)

        if(badWords.includes(msg.content.toLowerCase())){
            msg.delete();
            msg.reply("Oye por favor, habla bien maleducado");
        }
    })
}

module.exports =  cleanBadVocabulary 