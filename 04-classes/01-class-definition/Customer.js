"use strict";
class Customer {
    // constructors
    constructor(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    // getter/setter methods
    getFirstName() {
        return this.firstName;
    }
    setFirstName(theFirst) {
        this.firstName = theFirst;
    }
    getLastName() {
        return this.firstName;
    }
    setLastName(theLast) {
        this.firstName = theLast;
    }
}
/* // without constructor
let myCustomer = new Customer();
myCustomer.firstName = 'Martin';
myCustomer.lastName = 'Dixon';
*/
// better user constructor
let myCustomer = new Customer('Martin', 'Dixon');
console.log(myCustomer);
