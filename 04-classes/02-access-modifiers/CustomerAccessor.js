var CustomerAccessor = /** @class */ (function () {
    // constructor and parameter properties
    function CustomerAccessor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(CustomerAccessor.prototype, "lastName", {
        // get/set accessors
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerAccessor.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerAccessor;
}());
// better user constructor
var myCustomerAcc = new CustomerAccessor('Martin', 'Dixon');
console.log(myCustomerAcc.firstName);
console.log(myCustomerAcc.lastName);
myCustomerAcc.firstName = 'George';
myCustomerAcc.lastName = 'Enescu';
console.log(myCustomerAcc.firstName);
console.log(myCustomerAcc.lastName);
