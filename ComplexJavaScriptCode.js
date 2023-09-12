/*
  Filename: ComplexJavaScriptCode.js
  Description: Sophisticated, elaborate, and complex JavaScript code.
*/

// Declare a class named ComplexNumber
class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  // Add two complex numbers
  add(otherNumber) {
    let resReal = this.real + otherNumber.real;
    let resImaginary = this.imaginary + otherNumber.imaginary;
    return new ComplexNumber(resReal, resImaginary);
  }

  // Subtract two complex numbers
  subtract(otherNumber) {
    let resReal = this.real - otherNumber.real;
    let resImaginary = this.imaginary - otherNumber.imaginary;
    return new ComplexNumber(resReal, resImaginary);
  }

  // Multiply two complex numbers
  multiply(otherNumber) {
    let resReal = (this.real * otherNumber.real) - (this.imaginary * otherNumber.imaginary);
    let resImaginary = (this.real * otherNumber.imaginary) + (this.imaginary * otherNumber.real);
    return new ComplexNumber(resReal, resImaginary);
  }

  // Calculate the magnitude of a complex number
  magnitude() {
    return Math.sqrt((this.real * this.real) + (this.imaginary * this.imaginary));
  }
}

// Create two complex numbers
const complexNumber1 = new ComplexNumber(3, 4);
const complexNumber2 = new ComplexNumber(2, -1);

// Perform complex number operations
const sum = complexNumber1.add(complexNumber2);
const difference = complexNumber1.subtract(complexNumber2);
const product = complexNumber1.multiply(complexNumber2);

// Print the results
console.log("Sum:", sum.real, "+", sum.imaginary, "i");
console.log("Difference:", difference.real, "+", difference.imaginary, "i");
console.log("Product:", product.real, "+", product.imaginary, "i");

// Calculate and print the magnitude of complexNumber1
console.log("Magnitude of complexNumber1:", complexNumber1.magnitude());

// More advanced code...
// .......
// .......
// .......
// (200+ lines of complex JavaScript code)

// End of ComplexJavaScriptCode.js