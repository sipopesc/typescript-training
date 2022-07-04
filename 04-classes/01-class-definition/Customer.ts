class CustomerOld {
  // properties
  private firstName: string;
  private lastName: string;

  // constructors
  constructor(theFirst: string, theLast: string) {
    this.firstName = theFirst;
    this.lastName = theLast;
  }

  // getter/setter methods
  public getFirstName(): string {
    return this.firstName;
  }

  public setFirstName(theFirst: string): void {
    this.firstName = theFirst;
  }

  public getLastName(): string {
    return this.firstName;
  }

  public setLastName(theLast: string): void {
    this.firstName = theLast;
  }
}

/* // without constructor
let customerOld = new Customer();
customerOld.firstName = 'Martin';
customerOld.lastName = 'Dixon';
*/

// better user constructor
let customerOld = new CustomerOld('Martin', 'Dixon');
console.log(customerOld);
