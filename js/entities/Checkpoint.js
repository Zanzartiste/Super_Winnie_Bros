export class Checkpoint {
  constructor(x, y, width = 30, height = 60) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.active = false
  }

  render(ctx) {
    ctx.fillStyle = this.active ? "lime" : "gray"
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
