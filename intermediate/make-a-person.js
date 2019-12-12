// Fill in the object constructor with the following methods
// below:
// getFirstName();
// getLastName();
// getFullName();
// setFirstName(first);
// setLastName(last);
// setFullName(firstAndLast);

// The methods that take an argument must accept only one
// argument and it has to be a string. These methods must be
// the only available means of interacting with the object.

const Person = function Person(firstAndLast) {
  let nameArray = firstAndLast.split(' ');

  this.getFirstName = function getFirstName() {
    return nameArray[0];
  };
  this.getLastName = function getLastName() {
    return nameArray[1];
  };
  this.getFullName = function getFullName() {
    return nameArray.join(' ');
  };
  this.setFirstName = function setFirstName(firstName) {
    nameArray[0] = firstName;
  };
  this.setLastName = function setLastName(lastName) {
    nameArray[1] = lastName;
  };
  this.setFullName = function setFullName(fullName) {
    nameArray = fullName.split(' ');
  };
};

export default Person;
