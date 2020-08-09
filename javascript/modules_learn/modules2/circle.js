const name = 'circle';
function draw(ctx, x, y, radius, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x,y,radius, 0, 2*Math.PI);
  ctx.fill();
  return {
    x: y,
    y: y,
    radius: radius,
    color: color
  };
}

function reportArea(radius, listId) {
  let listItem = document.getElementById(listId);
  let itemLi = document.createElement('li');
  itemLi.textContent = `${name} area is ${Math.round(Math.PI*radius*radius)}squared`;
  listItem.appendChild(itemLi);
}

function reportPerimeter(radius, listId) {
  let listItem = document.getElementById(listId);
  let itemLi = document.createElement('li');
  itemLi.textContent = `${name} perimeter is ${Math.round(Math.PI*2*radius)}pxs`;
  listItem.appendChild(itemLi);
}

export {draw, reportArea, reportPerimeter};