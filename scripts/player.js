export default class Player {
    constructor(name) {
        this.name = name;
        this.cards = Array();
    }
    addCard(deck) {
        const indexOfCard = Math.floor(Math.random() * deck.length);
        this.cards.push(deck[indexOfCard]);
        deck.splice(indexOfCard, 1);
    }
    cardsToString() {
        const cards = this.cards.map(card => card.showCard()).join('');
        return `${this.getName()}: ${cards}`;
    }
    getPoints() {
        return this.cards.reduce((acc, card) => acc + card.getValue(), 0);
    }
    getName() {
        return this.name;
    }
    reduceA() {
        const asesIndex = this.cards.findIndex(card => card.getName() === 'A' && card.getValue() === 11);
        if (~asesIndex) {
            return this.cards[asesIndex].reduceValue();
        }
        return false;
    }
}
