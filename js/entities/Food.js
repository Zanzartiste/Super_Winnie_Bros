export class Food {
  constructor(x, y, size = 20) {
    this.x = x
    this.y = y
    this.size = size
    this.collected = false
  }

  render(ctx) {
    if (!this.collected) {
      ctx.fillStyle = "yellow"
      ctx.fillRect(this.x, this.y, this.size, this.size)
    }
  }

  checkCollision(player) {
    if (this.collected) return

    // simple AABB collision
    if (
      player.x < this.x + this.size &&
      player.x + player.width > this.x &&
      player.y < this.y + this.size &&
      player.y + player.height > this.y
    ) {
      this.collected = true
      return true
    }

    return false
  }
}
