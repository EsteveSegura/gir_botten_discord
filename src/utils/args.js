function splitArgs(plaintText,args){
    let argsObj = {}
    for(let i = 0 ; i < args.length ; i++){
        let firstPlace = plaintText.split(args[i])[1].split(args[i+1])[0]
        argsObj[args[i].substring(1)] = firstPlace
    }
    return argsObj
}


module.exports = { splitArgs }