export class Hazard {
  constructor(x, y, width, height = 20) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }

  render(ctx) {
    ctx.fillStyle = "darkred"
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }

  checkCollision(player) {
    return (
      player.x < this.x + this.width &&
      player.x + player.width > this.x &&
      player.y < this.y + this.height &&
      player.y + player.height > this.y
    )
  }
}
