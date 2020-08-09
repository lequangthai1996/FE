const name = 'square';
function draw(ctx, x, y, length, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x,y,length,length);

  return {
    length: length,
    x: x,
    y: y,
    color: color
  };
}

function reportArea(length, listId) {
  let list = document.getElementById(listId);
  let itemElm = document.createElement('li');
  itemElm.textContent = `${name} area is ${length*length}px squared`;
  list.appendChild(itemElm);
}

function reportPerimeter(length, listId) {
  let list = document.getElementById(listId);
  let itemElm = document.createElement('li');
  itemElm.textContent = `${name} perimeter is ${length*4}px`;
  list.appendChild(itemElm);
}
export {draw, reportArea, reportPerimeter};