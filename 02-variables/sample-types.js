"use strict";
// Declaring variables
// TypeSript is strongly typed language
let found = true;
let grade = 88.6;
let firstName = 'Silviu';
let lastName = 'Popescu';
let myAnyData = 5.0;
// If I later try the following assignments:
// grade = 'A'; -> compilation error
// found = 10; -> compilation error
// Nevertheless, the js file will be generated, you need to use:
// tsc -noEmitOnError sample-types.ts to prevent js file generation
myAnyData = 'Eric';
//Use "any" data type for generics: list, array, that can have different types of data
// sample print to console
console.log('Hi ' + firstName + ' ' + lastName);
console.log(`Hi ${firstName} ${lastName}`); // using template string
