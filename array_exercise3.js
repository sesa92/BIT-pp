// 1. Write a program that checks if a given element e is in the array a.
// Input: e = 3, a = [5, -4.2, 3, 7];

var a = [5, -4.2, 3, 7];
var e = 3;
var string = 'No';

for (var i = 0; i < a.length; i++) {
    if (a[i] === e) {
        string = 'Yes';
        break;
    }
}

console.log(string);

// 2. Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8];

var arr = [-3, 11, 5, 3.4, -8];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        arr[i] *= 2;
    } 
}

console.log(arr);


// 3. Write a program that finds the minimum of a given array and prints out its value and index.
// Input array: [4, 2, 2, -1, 6];

var arr = [4, 2, 2, -1, 6];
var min = arr[0];
var index = 0;


for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min ) {
        min = arr[i];
        index = i;
    }
}

console.log('Minimum number is: ' + min + ' with index: ' + index);

// 4. Write a program that finds the first element larger than minimum and prints out its value.
// Input array: [4, 2, 2, -1, 6];

// Moj primer 1

var x = [4, 2, 2, -1, 6];

var min = x[0];
var secondMin = Infinity;

for (var i = 1; i < x.length; i++) { 
    if(x[i] < min) { 
        secondMin = min; 
        min=x[i]; 
    } if(x[i] != min) {
        if(secondMin === Infinity) {
            secondMin = x[i];
        } else if (secondMin > x[i]) {
            secondMin = x[i]; 
        }  
    }
} if (secondMin === Infinity) {
    console.log('All numbers are equal');
} else {
    console.log(secondMin);
}


// Moj primer 2

var arr = [4, 2, 2, -1, 6];

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
    console.log(secondMin);
}

// 3. primer 

var arr = [4, 2, 2, -1, 6];

var secondMin = Infinity;
var min = Infinity;

for (i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
        secondMin = min;
        min = arr[i];
    } else if (secondMin > arr[i] && arr[i] > min) {
        secondMin = arr[i];
    } 
} if (secondMin === Infinity) {
    console.log('All elements is equal');
} else {
    console.log(secondMin);
}


// 5.Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]

var z = [3, 11, -5, -3, 2];
var sum = 0;

for (var i = 0; i < z.length; i++) {
    if (z[i] > 0) {
        sum += z[i];
    }
}

console.log(sum);


// 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side. Input array: [2, 4, -2, 7, -2, 4, 2]


// Moj primer

var a = [2, 4, -2, 7, -2, 4, 2];

var symmetrical = true;

for (var i = 0; i < a.length/2; i++) {
    if (a[i] !== a[a.length - 1 - i]) {
        symmetrical = false;
    }
}

console.log('Array is symmetrical: ' + symmetrical);

// 2. primer

var a = [2, 4, -2, 7, -2, 4, 2];

var symmetrical = true;

for (var i = 0, j = a.length - 1; i <= j; i++, j--) {
    if (a[i] !== a[j]) {
        symmetrical = false;
        break;
    }
}

if (symmetrical) {
    console.log('The array is symmetric.')
} else {
    console.log('The array is not symmetric.')
}

// 7. Write a program that intertwines two arrays. You can assume the arrays are of the same length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]

// Moj primer

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var c = [];

var counter = 0;

for (var i = 0; i < a.length; i++) {
    c[i + counter] = a[i];
    counter++;
    c[i + counter] = b[i];
    
}
console.log(c);

// 2. primer

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];

var newArray = [];

for (var i = 0; i < a.length; i++) {
    newArray[newArray.length] = a[i];
    newArray[newArray.length] = b[i];
}

console.log(newArray);
  
// 8. Write a program that concatenates two arrays.
// Input arrays: [4, 5, 6, 2],[3, 8, 11, 9];

// Moj primer

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var c = [];

for (var i = 0; i < b.length; i++) {
    c[i] = a[i];
    c[i + a.length] = b[i];
}

console.log(c);

// 2. primer

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];

var newArray = a;

for (var i = 0; i < b.length; i++) {
    newArray[newArray.length] = b[i];
}

console.log(newArray, a);

// 9. Write a program that deletes a given element e from the array a. 
// Input: e = 2, a = [4, 6, 2, 8, 2, 2];

var array = [4, 6, 2, 8, 2, 2];
var input = 2;

var newArray = [];

var counter = 0;

for (var i = 0; i < array.length; i++) {
    if (array[i] !== input) {
        newArray[counter] = array[i];
        counter++;
    }
}

console.log(newArray);


// 10. Write a program that inserts a given element e on the given position p in the array a. If
// the value of the position is greater than the array length, print the error message.
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]

// Moj primer

var arr = [2, -2, 33, 12, 5, 8];
var el = 78;
var pos = 3;

if (pos >= arr.length || pos < 0) {
    console.log('Error message!');
} else {
    for (var i = arr.length; i > pos; i--) { 
        arr[i] = arr[i - 1]; 
    }
   arr[pos] = el;
}

console.log(arr);

// 2. primer

var arr = [2, -2, 33, 12, 5, 8];
var el = 78;
var pos = 3;

var newArray = [];

for (var i = 0; i < arr.length; i++) {
    if (i === pos) {
        newArray[newArray.length] = el;
        newArray[newArray.length] = arr[i];
    } else {
        newArray[newArray.length] = arr[i];
    }
}

console.log(newArray);