const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d")

let x = 50
let speed = 2

function update() {
  x += speed

  if (x + 40 > canvas.width || x < 0) {
    speed *= -1
  }
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  ctx.fillStyle = "red"
  ctx.fillRect(x, 300, 40, 40)
}

function gameLoop() {
  update()
  render()
  requestAnimationFrame(gameLoop)
}

gameLoop()
