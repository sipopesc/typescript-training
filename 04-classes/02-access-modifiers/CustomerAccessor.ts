class CustomerAccessor {
  // properties
  private _firstName: string;
  private _lastName: string;

  // constructors
  constructor(theFirst: string, theLast: string) {
    this._firstName = theFirst;
    this._lastName = theLast;
  }

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
let myCustomerAcc = new CustomerAccessor('Martin', 'Dixon');

console.log(myCustomerAcc);

myCustomerAcc.firstName = 'George';
myCustomerAcc.lastName = 'Enescu';

console.log(myCustomerAcc.firstName);
console.log(myCustomerAcc.lastName);
