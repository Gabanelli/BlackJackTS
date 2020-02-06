import { Suits } from "./suits.js"

export default class Card {
    private name : string
    private value : number
    private suit : Suits

    constructor(name : string, value : number, suit : Suits) {
        this.name = name
        this.value = value
        this.suit = suit
    }

    public getValue() : number {
        return this.value
    }

    public showCard() : string {
        return `[${this.name}]`
    }
    
    public getName() : string {
        return this.name
    }

    public reduceValue() : boolean {
        if(this.getValue() === 11) {
            this.value = 1;
            return true;
        }
        return false;
    }
}