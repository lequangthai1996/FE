import * as Canvas from './modules2/canvas.js';
import * as Square from './modules2/square.js';
import * as Circle from './modules2/circle.js';

let myCanvas = Canvas.create('myCanvas', document.body, 480, 320 );
let myReportList = Canvas.createExportList(myCanvas.id);
// draw square
let mySquare = Square.draw(myCanvas.ctx, 50, 100, 50, 'red');
Square.reportArea(mySquare.length, myReportList);
Square.reportPerimeter(mySquare.length, myReportList);

// draw circel
let myCircle = Circle.draw(myCanvas.ctx, 200, 150, 50, 'blue');
Circle.reportArea(myCircle.radius, myReportList);
Circle.reportPerimeter(myCircle.radius, myReportList);

