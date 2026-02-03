import { Player } from "./entities/Player.js"
import { Food } from "./entities/Food.js"

const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d")

// --- Monde ---
const worldWidth = 2000

// --- Caméra ---
let cameraX = 0

// --- Joueur ---
const player = new Player(50, 300)

// --- Objets à ramasser ---
const foods = [
  new Food(200, 360),
  new Food(400, 360),
  new Food(600, 360),
  new Food(900, 360),
  new Food(1300, 360),
  new Food(1700, 360)
]

let score = 0

function update() {
  // le joueur est maintenant limité par le monde, pas le canvas
  player.update({ width: worldWidth, height: canvas.height })

  // caméra centrée sur le joueur
  cameraX = player.x - canvas.width / 2 + player.width / 2

  // limites caméra
  if (cameraX < 0) cameraX = 0
  if (cameraX > worldWidth - canvas.width) {
    cameraX = worldWidth - canvas.width
  }

  foods.forEach(f => {
    if (f.checkCollision(player)) {
      score += 1
    }
  })
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // --- Monde (déplacé par la caméra) ---
  ctx.save()
  ctx.translate(-cameraX, 0)

  player.render(ctx)
  foods.forEach(f => f.render(ctx))

  ctx.restore()

  // --- UI (fixe à l’écran) ---
  ctx.fillStyle = "yellow"
  ctx.font = "20px Arial"
  ctx.fillText("Score: " + score, 10, 30)
}

function gameLoop() {
  update()
  render()
  requestAnimationFrame(gameLoop)
}

gameLoop()
