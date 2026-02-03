export class Platform {
  constructor(x, y, width, height = 20) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }

  render(ctx) {
    ctx.fillStyle = "#654321"
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }

  // collision par le dessus uniquement
  checkCollision(player) {
    const prevBottom = player.y + player.height - player.velocityY
    const playerBottom = player.y + player.height

    if (
      player.x + player.width > this.x &&
      player.x < this.x + this.width &&
      prevBottom <= this.y &&
      playerBottom >= this.y
    ) {
      return true
    }
    return false
  }
}
