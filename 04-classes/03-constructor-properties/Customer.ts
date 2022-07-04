class Customer {
  // constructor and parameter properties
  constructor(private _firstName: string, private _lastName: string) {}

  // get/set accessors
  public get lastName(): string {
    return this._lastName;
  }

  public set lastName(value: string) {
    this._lastName = value;
  }

  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(value: string) {
    this._firstName = value;
  }
}

// better user constructor
let customer = new Customer('Martin', 'Dixon');

console.log(customer.firstName);
console.log(customer.lastName);

myCustomerAcc.firstName = 'George';
myCustomerAcc.lastName = 'Enescu';

console.log(customer.firstName);
console.log(customer.lastName);
