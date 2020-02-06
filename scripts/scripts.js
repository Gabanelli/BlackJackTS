var _a, _b;
import Player from "./player.js";
import { deck } from "./deck.js";
const you = new Player('Você');
const machine = new Player('A maquina');
var isGameOver = false;
(_a = document.getElementById("pick")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    pickCard();
});
(_b = document.getElementById("stop")) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
    stopGame();
});
const startGame = () => {
    for (let i = 0; i < 2; i++) {
        you.addCard(deck);
        machine.addCard(deck);
    }
    console.log(you.cardsToString());
    if (you.getPoints() === 21) {
        isGameOver = true;
        return console.log("Você ganhou com um 21!");
    }
};
const pickCard = () => {
    if (!isGameOver) {
        you.addCard(deck);
        console.log(you.cardsToString());
        let playerPoints = you.getPoints();
        while (playerPoints > 21) {
            if (you.reduceA()) {
                playerPoints = you.getPoints();
            }
            else {
                isGameOver = true;
                return console.log("Seus pontos excederam 21.");
            }
        }
    }
};
const stopGame = () => {
    if (!isGameOver) {
        console.log(machine.cardsToString());
        const playerPoints = you.getPoints();
        let machinePoints = machine.getPoints();
        while (machinePoints <= playerPoints) {
            machine.addCard(deck);
            console.log(machine.cardsToString());
            machinePoints = machine.getPoints();
            if (machinePoints > 21) {
                if (machine.reduceA()) {
                    machinePoints = machine.getPoints();
                }
                else {
                    isGameOver = true;
                    return console.log("O valor da maquina excedeu 21.");
                }
            }
        }
        if (machinePoints <= 21) {
            isGameOver = true;
            return console.log("A maquina venceu!");
        }
    }
};
startGame();
