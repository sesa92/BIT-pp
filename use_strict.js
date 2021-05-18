// 1. Write a function to check whether the `input` is a string or not.
// 'My random string' -> true;
// 12 -> false;

'use script';

function check(a) {
    if (typeof a === 'string'){
    return true;
}
    return false;
}

console.log(check(12));
console.log(check('My random string'));

// 2. Write a function to check whether a string is blank or not.
// 'My random string' -> false
// ' ' -> true
// 12 -> false
// false -> false

'use strict';

function isBlank(a) {
    if (a === ' ') {
        return true;
    }
    return false;
}

console.log(isBlank(' '));
console.log(isBlank(12));
console.log(isBlank(false));
console.log(isBlank('My random string'));

// 3. Write a function that concatenates a given string n times (default is 1).
// 'Ha' -> 'Ha'
// 'Ha', 3 -> 'HaHaHa'

'use strict';

function concat(string, n) {
    var str = string;
    for (var i = 1; i < n; i++) {
        str += string;
    }
    return str;
}

console.log(concat('Ha', 3));
console.log(concat('Ha'));

// 4. Write a function to count the number of letter occurrences in a string.
// 'My random string', 'n' -> 2

'use strict';

function occurrences(string, n) {
    var counter = 0;
    for (var i = 0; i < string.length; i++) {
        if(n === string[i]) {
            counter++;
        }
    }
    return counter;
}

console.log(occurrences('abracadabra', 'a'));

// 5. Write a function to find the position of the first occurrence of a character in a string. The
// result should be the position of character. If there are no occurrences of the character, the
// function should return -1.

'use strict';

function firstOccurence (string, n) {
    var index = -1;
    for(var i = 0; i < string.length; i++) {
        if (n === string[i]) {
            index = i + 1;
            break;
        }
    }
    return index;
}

console.log(firstOccurence('abracadabra', 'r'));
console.log(firstOccurence('abracadabra', 't'));

// 6. Write a function to find the position of the last occurrence of a character in a string. The
// result should be in human numeration form. If there are no occurrences of the character,
// function should return -1.

'use strict';

function lastOccurence (string, n) {
    var index = -1;
    for (var i = string.length - 1; i >= 0; i--) {
        if (n === string[i]) {
            index = i + 1;
            break;
        }
    }
    return index;
}

console.log(lastOccurence('abracadabra', 'b'));
console.log(lastOccurence('abracadabra', 't'));


// 7. Write a function to convert string into an array. Space in a string should be represented as
// “null” in new array.
// "My random string" -> ['M', 'y', null, 'r', 'a'];
// 'Random' -> ['R', 'a', 'n', 'd', 'o', 'm'];

'use strict';

 function conversion(string) {
     var array = [];
     for (var i = 0; i < string.length; i++) {
         if (string[i] === ' ') {
             array[array.length] = null;
         } else {
             array[array.length] = string[i];
         }
    }
     return array;
}

console.log(conversion('My random string.'));
console.log(conversion('Random'));



// 8. Write a function that accepts a number as a parameter and checks if the number is prime or not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.

'use strict';

function prime(number) {
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return number > 1;
}

console.log(prime(17));
console.log(prime(15));

// 9.  Write a function that replaces spaces in a string with provided separator. If separator is not
// provided, use “-” (dash) as the default separator.
// 'My random string', '_' -> 'My_random_string'
// 'My random string', '+' -> 'My+random+string'
// 'My random string' > 'My-random-string'

'use strict';

function replaceSpaces(string, character) {
    var str = '';
    
    if (character === undefined) {
        character = '-';
    }
    

    for (var i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            str += character;
        } else {
            str += string[i];
        }
    }
    return str;
}


console.log(replaceSpaces('My random string', '_'));
console.log(replaceSpaces('My random string'));

// 10. Write a function to get the first n characters and add “...” at the end of newly created string.

'use strict';

function firstNCharacters (string, num) {
    var str = '';
    for (var i = 0; i < string.length; i++) {
        if (i < num) {
            str = str + string[i];
        }
    }
    return str + '...';
}

console.log(firstNCharacters('abracadabra', 5));
console.log(firstNCharacters('abracadabra', 2));

// 11. Write a function that converts ana array of strings into an array of numbers.
// Filter out all non-numeric values.

'use strict';

function conversion (array) {
    var arr1 = [];

    for (var i = 0; i < array.length; i++) {
        var cur = array[i];
        var curToNum;

        if (cur === null) {
            continue;
        }

        curToNum = cur * 1;

        if (curToNum === 0 || (curToNum && curToNum !== Infinity && curToNum !== Infinity)) {
            arr1[arr1.length] = curToNum;
        }
    }
    return arr1;
}

console.log(conversion(['1', '21', undefined, '42', null, '1e+3', Infinity]));

// 12. Write a function to calculate how many years there are left until retirement based on the
// year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
// already retired, a proper message should be displayed.

'use strict';

function retirement(gender, num) {
    var currentYear = new Date().getFullYear();
    var years = currentYear - num;
    var yearsOfMen = 65;
    var yearsOfWomen = 60;
    if (gender === 'men' && years < 65) {
        yearsToRetire = yearsOfMen - years;
        return yearsToRetire;
    } else if (gender = 'women' && years < 60) {
        var yearsToRetire = yearsOfWomen - years;
        return yearsToRetire;
    } else {
        yearsToRetire = 'Already retired';
    }
    return yearsToRetire;
} 

console.log(retirement('women', 1962));


// 13. Write a function to humanize a number (formats a number to a human-readable string) with
// the correct suffix such as 1st, 2nd, 3rd or 4th.
// 1 -> 1st
//11 -> 11th

'use strict';

function correctSuffix (number) {
    var str = '';

    if (number % 100 >= 11 && number % 100 <= 13) {
        str = number + 'th';
    } else {
        switch (number % 10) {
            case 1:
                str = number + 'st';
                break;
            case 2:
                str = number + 'nd';
                break;
            case 3:
                str = number + 'rd';
                break;
            
            default:
                str = number + 'th';
                break;
        }
    }
    return str;
}

console.log(correctSuffix(10));
console.log(correctSuffix(3));