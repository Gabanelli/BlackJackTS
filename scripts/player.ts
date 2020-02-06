import Card from "./card.js"

export default class Player {
    private name : string
    private cards : Array<Card>
    private deskSide : string

    constructor(name : string, deskSide : string) {
        this.name = name
        this.deskSide = deskSide
        this.cards = Array<Card>()
    }

    addCard(deck : Array<Card>) {
        const indexOfCard = Math.floor(Math.random() * deck.length)
        this.cards.push(deck[indexOfCard])
        deck.splice(indexOfCard, 1)
        this.renderizeCard(this.cards[this.cards.length - 1])
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

    setCardsHidden() {
        document.querySelector(`#${this.deskSide}-side`)?.classList.add("hidden")
    }

    showCards() {
        document.querySelector(`#${this.deskSide}-side`)?.classList.remove("hidden")
    }

    private renderizeCard(card : Card) {
        const div = document.createElement("div")
        div.className = "card"
        if(card.isRed()) {
            div.classList.add("card-red")
        }
        div.innerHTML = card.getHTMLCard()
        document.querySelector(`#${this.deskSide}-side`)?.appendChild(div)
    }
}