export default class Dot {
  position: { x: number; y: number };
  width: number;
  lag: number;
  color: string;
  opacity: number;

  constructor(x: number, y: number, width: number, lag: number, color: string, opacity: number) {
    this.position = { x, y };
    this.width = width;
    this.lag = lag;
    this.color = color;
    this.opacity = opacity;
  }

  moveTowards(x: number, y: number, context: CanvasRenderingContext2D) {
    this.position.x += (x - this.position.x) / this.lag;
    this.position.y += (y - this.position.y) / this.lag;
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(
      this.position.x,
      this.position.y,
      this.width,
      0,
      2 * 3.1416
    );
    context.globalAlpha = this.opacity;
    context.fill();
    context.closePath();
  }
}