"use strict";
let sportsOne = ['football', 'tennis', 'ping-pong', 'swimming'];
let sportsTwo = ['handball', 'basket', 'volley', 'hockey'];
let reviews = [5, 7, 10, 10];
for (let i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
// simplified for loop
for (let sport of sportsTwo)
    sportsOne.push(sport); // arrays are growable
console.log(sportsOne);
let sum = 0;
for (let review of reviews) {
    sum += review;
}
console.log(`The reviews average is ${sum / reviews.length}`);
