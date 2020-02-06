import Player from "./player.js"
import { deck } from "./deck.js"

const you = new Player('Você', 'player')
const machine = new Player('A maquina', 'machine')
var isGameOver = false

const display = <HTMLInputElement>document.getElementById("display")

document.getElementById("pick")?.addEventListener('click', () => {
  pickCard()
})

document.getElementById("stop")?.addEventListener('click', () => {
  stopGame()
})

const startGame = () => {
  machine.setCardsHidden()
  for(let i = 0; i < 2; i++) {
    you.addCard(deck)
    machine.addCard(deck)
  }
  console.log(you.cardsToString())
  if(you.getPoints() === 21) {
    isGameOver = true
    return display.value = "21!"
  }
}

const pickCard = () => {
  if(!isGameOver) {
    you.addCard(deck)
    console.log(you.cardsToString())
    let playerPoints = you.getPoints()
    while(playerPoints > 21) {
      if(you.reduceA()) {
        playerPoints = you.getPoints()
      } else {
        isGameOver = true
        return display.value = "Seus pontos excederam 21."
      }
    }
    if(playerPoints === 21) {
      isGameOver = true
      return display.value = "21!"
    }
  }
}

const stopGame = () => {
  if(!isGameOver) {
    machine.showCards()
    console.log(machine.cardsToString())
    const playerPoints = you.getPoints()
    let machinePoints = machine.getPoints()
    while(machinePoints <= playerPoints) {
      machine.addCard(deck)
      console.log(machine.cardsToString())
      machinePoints = machine.getPoints()
      if(machinePoints > 21) {
        if(machine.reduceA()) {
          machinePoints = machine.getPoints()
        } else {
          isGameOver = true
          return display.value = "Você venceu"
        }
      }
    }
    if(machinePoints <= 21) {
      isGameOver = true
      return display.value = "A maquina venceu!"
    }
  }
}

startGame()