import * as Canvas from './modules2/canvas.js';
import {Square, Circle} from './module3/shape.js';

let myCanvas = Canvas.create('myCanvas', document.body, 480, 320 );
let myReportList = Canvas.createExportList(myCanvas.id);

let squareBtn = document.querySelector('.square');
let circleBtn = document.querySelector('.circle');

squareBtn.addEventListener('click', () => {
  import('./module3/shapes/square.js').then((Module) => {
    let square = new Module.Square(myCanvas.ctx, 50, 100, 50, 'red', myCanvas.id);
    square.draw();
    square.reportArea(myReportList);
    square.reportPerimeter(myReportList);
  })
})

circleBtn.addEventListener('click', () => {
  import('./module3/shapes/circle.js').then((Module) => {
    let circle = new Module.Circle(myCanvas.ctx, 150, 150, 50, 'blue');
    circle.draw();
    circle.reportArea(myReportList);
    circle.reportPerimeter(myReportList);
  })
})

