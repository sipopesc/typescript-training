"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myCircle = new Circle_1.Circle(5, 10, 20);
let myRectangle = new Rectangle_1.Rectangle(0, 0, 3, 7);
// declare an array of shapes initially empty
let theShapes = [];
// add the shapes to the array
// all shapes extends Shape class, so it will work
theShapes.push(myCircle);
theShapes.push(myRectangle);
// this won't work - string doesn't extend Shape
// theShapes.push("this won't work")
for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
    console.log(`Aria is= ${tempShape.calculateArea()}`);
}
