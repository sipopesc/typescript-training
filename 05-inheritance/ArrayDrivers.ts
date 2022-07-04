import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

let myShape = new Shape(10, 15);
let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(0, 0, 10, 30);

// declare an array of shapes initially empty
let theShapes: Shape[] = [];

// add the shapes to the array
// all shapes extends Shape class, so it will work
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);
// this won't work - string doesn't extend Shape
// theShapes.push("this won't work")

for (let tempShape of theShapes) {
   console.log(tempShape.getInfo());
}
