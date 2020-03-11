class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(4, 4);
const p2 = new Point(7, 7);
p1.distance; //undefined
p2.distance; //undefined

console.log(Point.distance(p1, p2));