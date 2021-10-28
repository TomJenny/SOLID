//-------WRONG CASE---------

// Validate in any case
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.initiateUser();
  }

  initiateUser() {
    this.username = this.username;
    this.validateUser();
  }

  validateUser = (user, pass) => {
    console.log("validating...");
  };
}
const user = new User("Francesco", "aasdasd");
console.log(user);
//validating...
// User {
// validateUser: [Function: validateUser],
//   username: 'Franceso',
//   password: 'assdasd'
// }

//-------------RIGHT CASE---------
//validation when we needed
class UserISP {
  constructor(username, password, validate) {
    this.username = username;
    this.password = password;
    this.validate = validate;

    if (validate) {
      this.initiateUser(username, password);
    } else {
      console.log("no validation required");
    }
  }

  initiateUser() {
    this.validateUser(this.username, this.password);
  }

  validateUser = (username, password) => {
    console.log("validating...");
  };
}

//when user need to be validate
console.log(new UserISP("Francesco", "asdasd", true));
// validating...
// UserISP {
//   validateUser: [Function: validateUser],
//   username: 'Francesco',
//   password: 'asdasd',
//   validate: true
// }

//when user does not need to be validate

console.log(new UserISP("guest", "guest", false));
// no validation required
// UserISP {
//   validateUser: [Function: validateUser],
//   username: 'guest',
//   password: 'guest',
//   validate: false
// }
