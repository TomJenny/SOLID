// ------------ WRONG WAY ----------------
class Employee {
  constructor(name, pos, hours) {
    this.name = name;
    this.pos = pos;
    this.hours = hours;
  }

  calculatePay = function () {
    // ...
  };
  reportHour = function () {
    // ...
  };
}

// ----------- RIGHT WAY -----------
class Employee {
  constructor(name, pos, hours) {
    this.name = name;
    this.pos = pos;
    this.hours = hours;
  }
}

class PayCalculator extends Employee {
  constructor() {
    super();
  }

  calculatePay = function () {
    // ...
  };
}

class PayCalculator extends Employee {
  constructor() {
    super();
  }

  reportHour = function () {
    // ...
  };
}
