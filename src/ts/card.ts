class Card {
    private name : string
    private value : number
    private suitIndex : number

    constructor(name : string, value : number, suit : number) {
        this.name = name
        this.value = value
        this.suitIndex = suit
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

    public isRed() : boolean {
        return this.suitIndex === 1 || this.suitIndex === 2
    }

    public getHTMLCard() : string {
        return `
            <div>
                <div class="value-container">
                    <div class="suit">${Suits.suitSymbols[this.suitIndex]}</div>
                    <div class="name"><b>${this.getName()}</b></div>
                </div>
            </div>
            <div class="principal-symbol">
                ${Suits.suitSymbols[this.suitIndex]}
            </div>
            <div class="card-bottom">
                <div class="value-container">
                    <div class="suit">${Suits.suitSymbols[this.suitIndex]}</div>
                    <div class="name"><b>${this.getName()}</b></div>
                </div>
            </div>
        `
    }
}