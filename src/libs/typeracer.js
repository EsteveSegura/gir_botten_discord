class TypeRacer {
    constructor() {
        this.winners = []
        this.gameStatus = false;
        this.startDate;
        this.quote = [
            "El murcielago esta triste",
            "No sabemos que hacer con el",
            "La verdad es que PHP no esta tan mal",
            "Las rotaciones son aburridas",
            "Dime tu signo del zodiaco",
            "Iván con B, como lo de los bancos",
            "El malo siempre alcanza al bueno",
            "Estoy muy cansado para esto",
            "Mira una película que sean todos buenos",
            "Voy a tirar las cajas de cartón",
            "Quieres que te llame por tu numeró",
            "Exprésate con corrección",
            "Han cambiado los signos del zodiaco",
            "Ofiuco no es un un signo del zodiaco",
            "Es luna llena, tengo que cargar mis piedras"
        ]
        this.randomQuoteIndex = 0;
    }

    getGameStatus() {
        return this.gameStatus;
    }

    initGame(bool) {
        this.gameStatus = bool;
        this.randomQuoteIndex = Math.round(Math.random() * (this.quote.length - 1))
        console.log(this.quote[this.randomQuoteIndex])
    }

    setStartDate() {
        this.startDate = Date.now();
    }

    addWinner(user) {
        this.winners.push(user);
    }

    getQuote() {
        let splitToOfuscate = this.quote[this.randomQuoteIndex].split(" ").join("_")
        return {ofuscated : splitToOfuscate, raw : this.quote[this.randomQuoteIndex]}
    }
}

module.exports = TypeRacer