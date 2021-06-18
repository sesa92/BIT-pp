// ● Random
// Create a function that builds an array of 10 random numbers between 1 and 50.
// The function prints that array out in the console and then returns it.

function randomArray() {
    var array = [];
  
    while (array.length < 10) {
      array.push(Math.floor(Math.random() * 50) + 1);
    }
  
    console.log(array);
  };
  randomArray();
  
  
//   ●	Round
//   Create a function that uses the passed array of numbers and rounds all its elements to two decimals.
//   Print out the modified array in the console.
//   Use the first function for generating the input array.

  var array1 = [1.85784, 55.12345, 13.6784, 5.3333];
  
  function roundedDecimal(params) {
  
    var rounded = params.map(function (num) {
      return Math.round(num * 100) / 100;
    });
  
    console.log(rounded);
  };
  roundedDecimal(array1);
  
 
//   ●	Floor
//   Create a function that uses the passed array of numbers and rounds all its elements to the nearest integer.
//   Print out the modified array in the console.
//   Use the first function for generating the input array.
 
  
  var array2 = [1.87, 55.12, 13.67, 5.33];
  
  function floorInteger(params) {
  
    var rounded = params.map(function (num) {
      return Math.round(num);
    });
  
    console.log(rounded);
  };
  floorInteger(array2);
  

//   ●	Max
//   Create a function that finds and prints out the biggest element in the passed array of numbers.
  
  var array3 = [1, 55, 73, 5];
  
  function biggestElement(params) {
  
    console.log(Math.max(...params));
  
  };
  biggestElement(array3);