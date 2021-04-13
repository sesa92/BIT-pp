// 1. Write a program that calculates the maximum of two given numbers.


function maxNum(a,b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}


console.log(maxNum(10,5));


// 2. Write a program that checks if a given number is odd.


function check(a) {
    if (a % 2 === 0) {
        return false;
    } else {
        return true;
    }
}

console.log(check(4));


// 3. Write a program that checks if a given number is a three digit long number.


function digit(n) {
    if (n >= 100 && n <= 999) {
        return true;
    } else {
        return false;
    }
}

console.log(digit(889));


// 4. Write a program that calculates an arithmetic mean of four numbers.


function arithmetic(a,b,c,d) {
    var sum = a + b + c + d;
    var result = sum / 4;

    return result;
}

console.log(arithmetic(1, 2, 3, 4));


// 5. Write a program that draws a square of a given size. For example, if the size of square
// is 5 the program should draw:
// *****
// *   *
// *   *
// *   *
// *****


function square(n) {
    var square = '';
    for (var row = 0; row < n; row++) {
        for (var col = 0; col < n; col++) {
            if (row === 0 || row === n - 1) {
                square += '* ';
            } else if  (col === 0 || col === n - 1) {
                square += '* ';
            } else {
                square += '  ';
        }
    }
     square += '\n';
    }

    return square;
}

console.log(square(5));


// 6. Write a program that draws a horizontal chart representing three given values. For
// example, if values are 5, 3, and 7, the program should draw:
//* * * * *
//* * *
//* * * * * * *


function horizontal() {
    var chart = '';
    var numOfArgs = arguments.length;

    for (var j = 0; j < numOfArgs; j++) {
        for (var i = 0; i < arguments[j]; i++) {
            chart += '*'
        }
        chart += '\n';
    } 
    return chart;
}

console.log(horizontal(5,3,7));


// 7. Write a program that calculates a number of digits of a given number.


// Moj primer

function countDigit(n) {
    if (n < 0) {
        n *= -1;
    }

    for (var count = 1; n >= 10;  n = n / 10) {
        count++;
        }
        return count;
}
 
console.log(countDigit(17982));
    
    
// 2. primer

function countDigit(n) {
    var count = 0;

    if (n < 0) {
        n *= -1;
    }

    while (n >= 1) {
        count++;
        n /= 10;
    }
    return count;
}
        
console.log(countDigit(154));


// 8. Write a program that calculates a number of appearances of a given number in a given array. 
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7


function appearances(array,e) {
    var counter = 0;
    for (var el of array) {
        if (el === e) {
            counter++;
        }
    } 
    return counter;
}

console.log(appearances([2, 4, 7, 8, 7, 7, 1], 7));


// 9. Write a program that calculates the sum of odd elements of a given array.


function sumOfOdd(arr) {
    sum = 0;
    for (var num of arr) {
        if (num % 2 !== 0) {
            sum += num;
        }
    } return sum;
}

console.log(sumOfOdd([3, 5, 6, 8, 9, 11]));


// 10. Write a program that calculates the number of appearances of a letter a in a given string.
// Modify the program so it calculates the number of both letters a and A.


// Moj primer 1

function numOfApp(string, lowLetter, capitalLetter) {
    var counter = 0;
    for (var el of string) {
        if (el === lowLetter || el === capitalLetter) {
            counter++;
        }
    } return counter;
}

console.log(numOfApp('Anaconda','a', 'A'));


// Moj primer 2

function num0fAInString(string) {
    var charCount = 0;

    for (var i = 0; i < string.length; i++) {
        var currentChar = string[i];

        if (currentChar === 'a' || currentChar === 'A') {
            charCount++;
        }
    }
    return charCount;
}

console.log(num0fAInString('Anaconda'));






// 11. Write a program that concatenates a given string given number of times. For example, if
// “abc” and 4 are given values, the program prints out abcabcabcabc.


function repeat(string, repNumber) {
    var str = ''
    for (var i = 0; i < repNumber; i++) {
        str = str + string;
    }
    return str;
}

console.log(repeat('abc', 4));
