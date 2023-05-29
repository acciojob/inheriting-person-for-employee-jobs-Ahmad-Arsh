// complete this js code
function Person(name, age) {
	 this.name = name;
  this.age = age;
}

// Add greet method to Person prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
}

function Employee(name, age, jobTitle) {
	  // Call Person constructor with name and age arguments
  Person.call(this, name, age);
  this.jobTitle = jobTitle;

}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
