import { Player } from "./entities/Player.js"
import { Food } from "./entities/Food.js"

const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d")

const player = new Player(50, 300)

// exemple d’objets à ramasser
const foods = [
  new Food(200, 360),
  new Food(400, 360),
  new Food(600, 360)
]

let score = 0

function update() {
  player.update(canvas)

  foods.forEach(f => {
    if (f.checkCollision(player)) {
      score += 1
    }
  })
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  player.render(ctx)
  foods.forEach(f => f.render(ctx))

  // score
  ctx.fillStyle = "white"
  ctx.font = "20px Arial"
  ctx.fillText("Score: " + score, 10, 30)
}

function gameLoop() {
  update()
  render()
  requestAnimationFrame(gameLoop)
}

gameLoop()
