export default class Player {
    constructor(name, deskSide) {
        this.name = name;
        this.deskSide = deskSide;
        this.cards = Array();
    }
    addCard(deck) {
        const indexOfCard = Math.floor(Math.random() * deck.length);
        this.cards.push(deck[indexOfCard]);
        deck.splice(indexOfCard, 1);
        this.renderizeCard(this.cards[this.cards.length - 1]);
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
    setCardsHidden() {
        var _a;
        (_a = document.querySelector(`#${this.deskSide}-side`)) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
    }
    showCards() {
        var _a;
        (_a = document.querySelector(`#${this.deskSide}-side`)) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
    }
    renderizeCard(card) {
        var _a;
        const div = document.createElement("div");
        div.className = "card";
        if (card.isRed()) {
            div.classList.add("card-red");
        }
        div.innerHTML = card.getHTMLCard();
        (_a = document.querySelector(`#${this.deskSide}-side`)) === null || _a === void 0 ? void 0 : _a.appendChild(div);
    }
}
