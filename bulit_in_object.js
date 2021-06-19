// 1. Write a functional expression that duplicates each element of a given array.

var array = [2, 4, 7, 11, -2, 1];

function duplicates (array) {
  var newArray = [];
  array.forEach (function (element) {
    newArray.push(element, element);
  });
  return newArray;
}

console.log(duplicates(array));

// 2.	Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13] 

var array = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

var newArray = array.filter(function(num, pos) {
  return array.indexOf(num) === pos;
});

function sorting(a, b) {
  return a - b;
}

console.log(newArray.sort(sorting));


// 3.
// a.	Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true
// b.	Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4


var array = [1, 2, 9, 2, 1];

function oddElements (array) {
  if(array.length % 2 !== 0) {
    return true;
  }
  return false;
}

console.log(oddElements(array));


var array = [-1, 8.1, 3, 6, 2.3, 44, 2.11];

function middleElements (array) {

  var count = 0;

  if (oddElements(array)) {
    var mid = array[Math.floor(array.length/2)];

    for (var i = 0; i < array.length; i++) {
      if (mid > array[i]) {
        count++;
      }
    } return count;
  } else {
   return "Array has even number od elements!!";
  }
}

console.log(middleElements(array));


// 4.	Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output:  { minValue: -2, minLastIndex: 6 }

var array = [1, 4, -2, 11, 8, 1, -2, 3];

function minValue (array) {
  var minValue = Math.min (...array);
  var minLastIndex = array.lastIndexOf(minValue);
  return {minValue, minLastIndex};
}

console.log(minValue(array));


// 5.
// a.	Write a function that finds all the elements in a given array less than a given element. 
// Input: [2, 3, 8, -2, 11, 4], 6 
// Output: [2, 3, -2, 4]
// b.	Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
// Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
//Output: [’Programming’, ‘product’]
// c.	Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it. 


/* a */

var array = [2, 3, 8, -2, 11, 4];
var value = 6;

function lessThanGivenEl (array, value) {
  var output = array.filter(function(number) {
    return number < value;
  });

  return output;
};

console.log(lessThanGivenEl(array, value));

/* b */

var array = ["JavaScript", "Programming", "fun", "product"];
var string = "pro";

function findStringElement (array, string) {
  var output = [];
  var mod = array.slice();

  mod = mod.map(function (value) {
    return value.toUpperCase();
  });

  for(var i = 0; i < array.length; i++) {
    if(mod[i].slice(0, string.length) == string.toUpperCase()) {
      output.push(array[i]);
    }
  }
  return output;
};

console.log(findStringElement(array, string));

/* c */




// 6.
// a.	Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
//	[
// {name: ‘apples’, price: 100}, 
// {name: ‘milk’, price: 80}, 
// {name:’bananas’, price: 150}
// ]
// b.	Write a function that calculates the total price of your shopping list. 
// c.	Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. 
// d.	Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase. 

/* a */

var productLists = [
  {name: "apples", price: 100}, 
  {name: "milk", price: 80}, 
  {name: "bananas", price: 150}
]

/* b */

function getTotalPrice (params) {
  var sum = 0;

  for(var i in params) {
    sum += params[i].price;
  }

  return sum;
};

console.log("Total price: " , getTotalPrice(productLists));

/* c */

function getAveragePrice (params) {
  var sum = 0;

  for(var i in params) {
    sum += params[i].price;
  }

  return sum / params.length;
};

console.log("Average price: ", getAveragePrice(productLists));

/* d */

function getMostExpensive (params) {

  var expensive = params[0].price; 

  for(var i in params) {
    if(params[i].price > expensive) {
      expensive = params[i].price;
    }
  }

  return expensive;
};

console.log("Most expensive product: ", getMostExpensive(productLists));


// 7.
// a.	Write a function that checks if a given string is written in all capitals.
// b.	Write a function that checks if a given string contains any digits.
// c.	Write a function that checks if a given string is a valid hexadecimal color.
// d.	Write a function that checks if a given number belongs to the interval from 1900 to 2018. 
// e.	Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).


/* a */

var string1 = "String";

function allCapitals (value) {
  var output;
  var string1UpperCase = value.toUpperCase();
  if(string1UpperCase == value) {
    output = "String is written in all capitals";
  } else {
    output = "String isn't written in all capitals";
  }

  return output;
};

console.log(allCapitals(string1));

/* b */

var string2 = "M1los";

function checkIsDigit(params) {
  var input = params + "";
  var output;
  
  for (var i = 0; i < input.length; i++) {
    if (isFinite(parseInt(input[i]))) {
      output = "Contains digit.";
      break;
    } else {
      output = "No digit.";
    }
  }
  return output;
}

console.log(checkIsDigit(string2));

/* c */

var string3 = "#fff";

function isHexColor (string) {
  var letterNumber = /^[0-9a-fA-F]+$/;
  if (string.startsWith('#') && string.length < 8 && string.length > 2 && string.value.match(letterNumber) ) {
    return true;
  } else {
    return false;
  }
}


