export default class Card {
    constructor(name, value, suit) {
        this.name = name;
        this.value = value;
        this.suit = suit;
    }
    getValue() {
        return this.value;
    }
    showCard() {
        return `[${this.name}]`;
    }
    getName() {
        return this.name;
    }
    reduceValue() {
        if (this.getValue() === 11) {
            this.value = 1;
            return true;
        }
        return false;
    }
}
