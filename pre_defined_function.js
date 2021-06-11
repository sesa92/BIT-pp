// 1. Write a function that converts an array of strings into an array of numbers. Filter
// out all non-numeric values.
// Input: ['1', '2', undefined, '42', '1e+3', Infinity]


function conversion (array) {
    var transformedArray = [];

    for (var i = 0; i < array.length; i++) {
        var current = array[i];
        var isValid = isFinite(current);
        if (isValid) {
            var number = parseFloat(current);
            transformedArray[transformedArray.length] = number;
        }
    }
    return transformedArray;
}

console.log(conversion(['1', '21', undefined, '42', '1e+3', Infinity]));

// 2. Write a program to join all elements of the array into a string skipping elements
// that are undefined, null, NaN or Infinity.
// Input: [NaN, 0, 15, false, -22, '',  undefined, 47, null]


function join(array) {
    var str = '';

    for (var i = 0; i < array.length; i++) {
        if (array[i] !== null) {
        var cur = array[i];
        var valid = isFinite(cur);
        if (valid) {
        str += cur;
        }
    }
}
    return str;
}


console.log(join([NaN, 0, 15, false, -22, '',  undefined, 47, null]));


// 3. Write a program to filter out falsy values from the array.
// Input: [NaN, 0, 15, false, -22, '', undefined, 47, null];

function falsyValue(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i]) {
            result[result.length] = array[i];
    }
}
    return result;

}

console.log(falsyValue([NaN, 0, 15, false, -22, '',  undefined, 47, null]));



// 4. Write a program that calculates a number of integer values in the array.
// Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];

function values(array) {
    var counter = 0;

    for (var i = 0; i < array.length; i++) {
        var result = array[i];
        if (result === parseInt(array[i])) {
            counter++;
        }
    }
    return counter;
}

console.log(values([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));


// 5. Write a program that calculates a number of float values in the array.
// Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]

function floatValues(array) {
    var counter = 0;
  
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== null) {
        var result = array[i];
        if (result % 1 !== 0 && isNaN(result) === false) {
            counter++;
        }
    }
  }
    return counter;
  
  }
  
  console.log(floatValues([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));