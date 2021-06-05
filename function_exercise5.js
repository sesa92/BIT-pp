// 1. Find the min and max element in the following array and switch their places. Print out the modified array in the console.
// Input: Input: [ 3, 500, 12, 149, 53, 414, 1, 19 ];

// Moj primer 1

function reverseMinMax (array) {

    var indexOfMin = 0;
    var indexOfMax = 0;
    var min = array[0];
    var max = array[0];


    for (var i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            indexOfMin = i;
        }
         if (array[i] > max) {
            max = array[i];
            indexOfMax = i;
        }
    }
        array[indexOfMin] = max;
        array[indexOfMax] = min;

    return array;
}

console.log(reverseMinMax([3, 500, 12, 149, 53, 414, 1, 19 ]));

// Moj primer 2

function findMin (array) {

    var min = array[0];
    var indexOfMin = 0;
    var newArray = [];

    for (var i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            indexOfMin = i;
        }
    }
        newArray[newArray.length] = min;
        newArray[newArray.length] = indexOfMin;

    return newArray;
    
}


function findMax (array) {

    var max = array[0];
    var indexOfMax = 0;
    var newArray = [];

    for (var i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
            indexOfMax = i;
        }
    }
        newArray[newArray.length] = max;
        newArray[newArray.length] = indexOfMax;

    return newArray;
    
}


function reverseMinMax(array) {

    var min = findMin(array);
    var max = findMax(array);

    array[min[1]] = max[0];
    array[max[1]] = min[0];

    return array;
}

console.log(reverseMinMax([3, 500, 12, 149, 53, 414, 1, 19 ]));

// 2. Use the following array to make a new one by dividing its values by two and adding 5. If a given elements value is 0, change it to 20.
// Input: [ 3, 500, -10, 149, 53, 414, 1, 19 ];


function divideAdd (array) {

    var temp = 0;
    var newArray = []
    
    for (var i = 0; i < array.length; i++) {
        temp = array[i]/2 + 5;

        if (temp === 0) {
            temp = 20;
            newArray[newArray.length] = temp;
    }

    newArray[newArray.length] = temp;

}    

    return newArray;

}

console.log(divideAdd([3, 500, -10, 149, 53, 414, 1, 19]));


// 3. Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students names with their corresponding grade. Use the following ranges:
// 51-60 -> 6,
// 61-70 -> 7,
// 71-80 -> 8,
// 81-90 -> 9,
// 91-100 -> 10.
// Input: [ 'Michael', 'Anne', 'Frank', 'Joe', 'John', 'David', 'Mark', 'Bill' ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]

function grade(array1, array2) {

    var string = '';
  
    for (var i = 0, j = 0; i < array1.length, j < array2.length; i++, j++) {
        var name = array1[i];
        if (array2[j] < 51) {
            string = name + ' acquired ' + array2[j] + ' and failed to complete exam.';
        } else if (array2[j] >= 51 && array2[j] < 60) {
            string = name + ' acquired ' + array2[j] + ' and earned 6.';
        } else if (array2[j] >= 61 && array2[j] < 70) {
            string = name + ' acquired ' + array2[j] + ' and earned 7.';
        } else if (array2[j] >= 71 && array2[j] < 80) {
            string = name + ' acquired ' + array2[j] + ' and earned 8.';
        } else if (array2[j] >= 81 && array2[j] < 90) {
            string = name + ' acquired ' + array2[j] + ' and earned 9.';
        } else if (array2[j] >= 91 && array2[j] < 100) {
            string = name + ' acquired ' + array2[j] + ' and earned 10.';
        } console.log(string);   
    } 
}
  
grade(['Michael', 'Anne', 'Frank', 'Joe', 'John', 'David', 'Mark', 'Bill'], [50, 39, 63, 72, 99, 51, 83, 59]);



// 4. Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first arrays values multiplied by 2.
// Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ];

function sortMultiply(array) {
    var newArray = [];
    var temp = 0;

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[i] < array[j]) {
                temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        } 
    }
    for (var i = 0; i < array.length; i++) {
        newArray[newArray.length] = array[i] * 2;
    }
    return newArray;
}

console.log(sortMultiply([13, 11, 15, 5, 6, 1, 8, 12]));


// 5. Sort a previously defined array in a descending order and display it in the console.
// Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]

function sortMultiply(array) {


    var newArray = [];
    var temp = 0;

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[i] > array[j]) {
                temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        } 
    }
    
    newArray = array;
    
    return newArray;
}

console.log(sortMultiply([13, 11, 15, 5, 6, 1, 8, 12]));


// 6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.

function mixMath () {

    var sumEven = 0;
    var sumOdd = 0;
    var sum = 0;

    for (var i = 1; i <= 1000; i++) {
        if (i % 2 === 0) {
            sumEven += i;
        } else if (i % 2 !== 0 && i <= 500) {
            sumOdd += i;
        }
    }

    sum = (sumEven - sumOdd) * 12.5

    return sum;
}

console.log(mixMath());


// 7. Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
// Input: ['M', 'Anne', 12, 'Steve', 'Joe', 'John', 'David', 'Mark', true, 'A']


function newWord (array) {
    var string = ''
  
    for (var i = 0; i < array.length; i++) {
      var name = array[i];
        if (name.length >= 2) {
          string += name[0] + name[1];
        }
    }
    return string;
  }
  
  console.log(newWord(['M', 'Anne', 12, 'Steve', 'Joe', 'John', 'David', 'Mark', true, 'A']));


// 8. Write a program that takes a string and prints its characters out in reversed order in the console.
// Input: Belgrade Institute of Technology

function reverse (string) {
    var newString = ''

    for (var i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}

console.log(reverse('Belgrade Institute of Technology'));


// 9. Write a program that displays all the combinations of two numbers between 1 and 7. Dont display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).

function displayNumbers() {
  
    for (var i = 0; i <= 7; i++) {
        for (var j = 0; j <= 7; j++) {
            if (i !== j) {
              console.log(i + ',' + j);
            }
        }
    }
}
  
displayNumbers();


// 10. Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
// Input: 17 | 15

function primeNumber (number) {

    var isPrime = true;

    if (number < 0) {
        console.log(false);
    } else if (number === 1) {
        console.log(false);
    } else if (number > 1) {
        for (var i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

primeNumber(17);
primeNumber(15);

// 11. Check if a given string is a palindrome (spaces are ignored).
// Input: eye | Geek | a nut for a jar of tuna

function palindrome(string) {

    var str = '';
    var isPalindrome = true;
  
    for (var i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            str += string[i];
        }
    }

    for (var j = 0; j < str.length/2; j++) {
        if (str[j] !== str[str.length - 1 - j]) {
            isPalindrome = false;
        }
    }

    return isPalindrome;

}



console.log(palindrome('eye'));
console.log(palindrome('Geek'));
console.log(palindrome('a nut for a jar of tuna'));

  // 12. Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
  //Input: 192 42 | 81 9

function greatestCommonDivisor (num1, num2) {
    var greatest = 0;

    for (var i = 1; i <= num2; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            greatest = i;
        }
    }
      return greatest;
}

console.log(greatestCommonDivisor(192,42));
console.log(greatestCommonDivisor(81,9));
