import { SuitSymbols } from "./suits.js";
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
    isRed() {
        return this.suit === 1 || this.suit === 2;
    }
    getHTMLCard() {
        return `
            <div>
                <div class="value-container">
                    <div class="suit">${SuitSymbols[this.suit]}</div>
                    <div class="name"><b>${this.getName()}</b></div>
                </div>
            </div>
            <div class="principal-symbol">
                ${SuitSymbols[this.suit]}
            </div>
            <div class="card-bottom">
                <div class="value-container">
                    <div class="suit">${SuitSymbols[this.suit]}</div>
                    <div class="name"><b>${this.getName()}</b></div>
                </div>
            </div>
        `;
    }
}
