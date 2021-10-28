// code does not allow to modify.
const roles = ["ADMIN", "USER"];
checkRole = (user) => {
  if (roles.includes(user.role)) {
    return true;
  } else {
    return false;
  }
};

// define a function that add a role to this function that

function addRole(role) {
  roles.push(role);
}

//call function with parameters with new role

addRole("SUPER_USER");

//check role exists
checkRole("ADMIN"); //true
checkRole("Foo"); //false
checkRole("SUPER_USER"); //true
