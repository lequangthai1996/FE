class Circle {
  constructor(ctx, x, y, radius, color) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.name = 'circle';
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.arc(this.x,this.y,this.radius, 0, 2*Math.PI);
    this.ctx.fill();
  }
  
  reportArea(listId) {
    let listItem = document.getElementById(listId);
    let itemLi = document.createElement('li');
    itemLi.textContent = `${this.name} area is ${Math.round(Math.PI*this.radius*this.radius)}squared`;
    listItem.appendChild(itemLi);
  }
  
 reportPerimeter(listId) {
    let listItem = document.getElementById(listId);
    let itemLi = document.createElement('li');
    itemLi.textContent = `${this.name} perimeter is ${Math.round(Math.PI*2*this.radius)}pxs`;
    listItem.appendChild(itemLi);
  }
}

export {Circle};



