
class Square {
  constructor(ctx, x, y, length, color) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.length = length;
    this.color = color;
    this.name = 'square';
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.length, this.length);
  }

  reportArea(reportId) {
    let list = document.getElementById(reportId);
    let itemElm = document.createElement('li');
    itemElm.textContent = `${this.name} area is ${this.length*this.length}px squared`;
    list.appendChild(itemElm);
  }

   reportPerimeter(reportId) {
    let list = document.getElementById(reportId);
    let itemElm = document.createElement('li');
    itemElm.textContent = `${this.name} perimeter is ${this.length*4}px`;
    list.appendChild(itemElm);
  }
}

export {Square};