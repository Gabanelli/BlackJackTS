const you = new Player('Você', 'player')
const machine = new Player('A maquina', 'machine')
const display = <HTMLInputElement>document.getElementById("display")

class Game {

  private isGameOver : boolean = false

  public startGame() {
    document.getElementById("pick")?.addEventListener('click', () => {
      this.pickCard()
    })
    
    document.getElementById("stop")?.addEventListener('click', () => {
      this.stopGame()
    })
    machine.setCardsHidden()
    for(let i = 0; i < 2; i++) {
      you.addCard(deck)
      machine.addCard(deck)
    }
    console.log(you.cardsToString())
    if(you.getPoints() === 21) {
      this.isGameOver = true
      return display.value = "21!"
    }
  }

  private pickCard() {
    if(!this.isGameOver) {
      you.addCard(deck)
      console.log(you.cardsToString())
      let playerPoints = you.getPoints()
      while(playerPoints > 21) {
        if(you.reduceA()) {
          playerPoints = you.getPoints()
        } else {
          this.isGameOver = true
          return display.value = "Seus pontos excederam 21."
        }
      }
      if(playerPoints === 21) {
        this.isGameOver = true
        return display.value = "21!"
      }
    }
  }

  private stopGame() {
    if(!this.isGameOver) {
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
            this.isGameOver = true
            return display.value = "Você venceu"
          }
        }
      }
      if(machinePoints <= 21) {
        this.isGameOver = true
        return display.value = "A maquina venceu!"
      }
    }
  }
}

const game = new Game()
game.startGame()