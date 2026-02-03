export class Player {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.width = 40
    this.height = 40
    this.normalHeight = 40
    this.crawlHeight = 20
    this.speed = 4
    this.velocityY = 0
    this.jumpStrength = 12
    this.gravity = 0.5
    this.grounded = false
    this.crawling = false

    this.keys = {}
    window.addEventListener("keydown", (e) => this.keys[e.code] = true)
    window.addEventListener("keyup", (e) => this.keys[e.code] = false)
  }

  update(canvas) {
    // Détecter si le joueur rampe
    if (this.keys["ArrowDown"]) {
      if (!this.crawling) {
        this.crawling = true
        this.y += this.normalHeight - this.crawlHeight // garder les pieds au même endroit
        this.height = this.crawlHeight
      }
    } else if (this.crawling) {
      // Remonter à la hauteur normale si on n'appuie plus sur bas
      this.crawling = false
      this.y -= this.normalHeight - this.crawlHeight
      this.height = this.normalHeight
    }

    // Déplacement horizontal
    if (this.keys["ArrowLeft"]) this.x -= this.speed
    if (this.keys["ArrowRight"]) this.x += this.speed

    // Saut uniquement si pas en train de ramper
    if (this.keys["ArrowUp"] && this.grounded && !this.crawling) {
      this.velocityY = -this.jumpStrength
      this.grounded = false
    }

    // Gravité
    this.velocityY += this.gravity
    this.y += this.velocityY

    // Collision avec le sol
    if (this.y + this.height > canvas.height) {
      this.y = canvas.height - this.height
      this.velocityY = 0
      this.grounded = true
    }

    // Limites gauche/droite
    if (this.x < 0) this.x = 0
    if (this.x + this.width > canvas.width) this.x = canvas.width - this.width
  }

  render(ctx) {
    ctx.fillStyle = "red"
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}
