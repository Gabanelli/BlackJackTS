import Card from "./card.js"

export default class Player {
    private name : string
    private cards : Array<Card>

    constructor(name : string) {
        this.name = name
        this.cards = Array<Card>()
    }

    addCard(deck : Array<Card>) {
        const indexOfCard = Math.floor(Math.random() * deck.length)
        this.cards.push(deck[indexOfCard])
        deck.splice(indexOfCard, 1)
    }

    cardsToString() : string {
        const cards = this.cards.map(card => card.showCard()).join('')
        return `${this.getName()}: ${cards}`
    }

    getPoints() : number {
        return this.cards.reduce((acc, card) => acc + card.getValue(), 0)
    }

    getName() : string {
        return this.name
    }

    reduceA() : boolean {
        const asesIndex = this.cards.findIndex(card => card.getName() === 'A' && card.getValue() === 11);
        if(~asesIndex) {
            return this.cards[asesIndex].reduceValue()
        }
        return false;
    }
}