/* 
Filename: sophisticated_code.js 

This code is a sophisticated, elaborate and complex JavaScript program that performs various tasks. It consists of multiple functions, classes, and logical operations. The code is well-commented and organized for better understanding. 

Note: This code is purely for demonstration purposes and may not have any real-world applications. 

*/

// A class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  celebrateBirthday() {
    this.age++;
  }
}

// A function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

// A function to calculate the Fibonacci sequence
function fibonacci(n) {
  const sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}

// A function to remove duplicate elements from an array
function removeDuplicates(arr) {
  const uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }

  return uniqueArr;
}

// A function to reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Usage example
const john = new Person("John", 30);

john.greet();
john.celebrateBirthday();

console.log(isPrime(17)); // true

console.log(fibonacci(10));

console.log(removeDuplicates([1, 1, 2, 2, 3, 3]));

console.log(reverseString("Hello, World!"));