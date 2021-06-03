// 1. Write a program that checks if a given element e is in the array a.

var a = function(array, e) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === e) {
            return true
        }
    }
    return false;
}

console.log(a([1, 2, 3, 4, 5], 4));
console.log(a([1, 2, 3, 4, 5], 8));

// 2. Write a program that multiplies every positive element of a given array by 2.

var b = function(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            array[i] *= 2;
        } 
    }
    return array;
}

console.log(b([17, 22, -7, 14, -3, -4, 25]));

// 3. Write a program that finds the minimum of a given array and prints out its value and index.

var c = function(array) {
    var min = array[0];
    var index = 0;
    for (var i = 1; i < array.length; i++) {
        if (array[i] < min ) {
            min = array[i];
            index = i;
        }
    }
    return min + ',' + index;
}

console.log(c([32, 44, 3, 23, -14, 8, -5]));

// 4. Write a program that finds the first element larger than minimum and prints out its value.

var d = function(arr) {
    var secondMin = Infinity;
    var y = 0;

    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                y = arr[j];
                arr[j] = arr[i];
                arr[i] = y;
            }
        }
    } for (i = 0, j = 1; i < arr.length - 1; i++, j++) { 
            if (arr[i] === arr[j]) {
                continue;
            } secondMin = arr[j];
                break;
                
    } if (secondMin === Infinity) {
        console.log('All numbers are equal');
    } else {
        return secondMin;
    }
}

console.log(d([32, 44, 3, 23, -14, 8, -5]));

// 5. Write a program that calculates the sum of positive elements in the array.

var e = function (array) {

    var sum = 0;

for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        sum += array[i];
    }
}

return sum;

}

console.log(e([32, 44, -26, 57, 14, -16, 6, 90]));


// 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.


var f = function(array) {

var symmetrical = true;

for (var i = 0; i < array.length/2; i++) {
    if (array[i] !== array[array.length - 1 - i]) {
        symmetrical = false;
    }
}

    return symmetrical;
}

console.log(f([1, 2, 3, 4, 3, 2, 1]));
console.log(f([1, 2, 3, 4, 3, 2, 1, 0]));

// 7. Write a program that intertwines two arrays. You can assume the arrays are of the same length.

var g = function(array1, array2) {
    var counter = 0;
    var newArray = [];

    for (var i = 0; i < array1.length; i++) {
    newArray[i + counter] = array1[i];
    counter++;
    newArray[i + counter] = array2[i];
    }

return newArray;
}

console.log(g([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));

// 8. Write a program that concatenates two arrays.

var h = function(array1, array2) {

var newArray = [];

for (var i = 0; i < array2.length; i++) {
    newArray[i] = array1[i];
    newArray[i + array1.length] = array2[i];
}

return newArray;
}

console.log(h( [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] ) );

// 9. Write a program that deletes a given element e from the array a. 

var i = function(array, n) {
    var newArray = [];

    var counter = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] !== n) {
            newArray[counter] = array[i];
            counter++;
        }
}
return newArray;
}

console.log(i([1, 2, 3, 4, 5, 6], 5));

// 10. Write a program that inserts a given element e on the given position p in the array a. If
// the value of the position is greater than the array length, print the error message.

var j = function(array, el, pos) {

    if (pos >= array.length || pos < 0) {
        console.log('Error message!');
    } else {
        for (var i = array.length; i > pos; i--) { 
            array[i] = array[i - 1]; 
        }
       array[pos] = el;
    }
    
    return array;
}

console.log(j([1, 2, 3, 4, 5], 35, 3));