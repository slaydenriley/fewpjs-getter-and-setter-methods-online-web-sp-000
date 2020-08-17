class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter(radius) {
    return this.radius * Math.PI;
  }
}
