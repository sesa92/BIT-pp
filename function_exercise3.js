// 1. Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

function insertString (string1, string2, position = 1) {
    var newPos = position - 1;
    var string = '';
    for (var i = 0; i < string1.length; i++) {
        if (i == newPos) {
           string += string2;
        } 
        string += string1[i];
    }
    return string;
}


console.log(insertString('This is string', 'Bla', 6));

// 2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
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

// 4. Write a function that reverses a number. The result must be a number.
// 12345 -> 54321 // Output must be a number 

function reverse(n) {
    var str = '' + n;

    var newStr = '';

    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return parseFloat(newStr);
}

console.log(reverse(4567.345));

// 5. Write a function to get the last element of an array. Passing a parameter &#39;n&#39; will return the last n elements of the array.
// [7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 -> [0, -2]

function getLast(array, n = 1) {
    var newArray = [];
    for (var i = array.length - n; i < array.length; i++) {
        newArray += array[i];
    }
    return newArray;
}    

console.log(getLast([1, 2, 3, 4], 3));

// 6. Write a function to create a specified number of elements with pre-filled numeric value array.

// 6, 0 -> [0, 0, 0, 0, 0, 0]
// 2, 'none' -> ['none', 'none']
// 2 -> [null, null]

function speciArr (num, x = null) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr[arr.length] = x;
    }
    return arr;
}

console.log(speciArr(5, 'CocaCola'));


// 8. Write a function to find a word within a string.

function findWord (string, word) {
    var counter = 0;
    var currentWord = '';
    string = string + ' ';
    
    for (var i = 0; i < string.length; i++) {
        var currentChar = string[i];

        if (currentChar === ' ') {
            if (currentWord === word) {
                counter++;
            } 
            currentWord = '';
        } else {
        currentWord += currentChar;
    }
}
    return counter;
}

console.log(findWord('The quick brown fox', 'fox'));

// 9. Write a function to hide email address.
// Input: 'myemailaddress@bgit.rs' -> 'mye...@bgit.rs'

function hideMail(mail) {
    var firstThree = '';
    var restOfMail = '';
    var indexOfAt;

    for (var i = 0; i < mail.length; i++) {
        if (i < 3) {
            firstThree += mail[i];
        }
        if (mail[i] === '@') {
            indexOfAt = i;
        }
        if (indexOfAt) {
            restOfMail += mail[i];
        }
    }
    return firstThree + '...' + restOfMail;
}

console.log(hideMail('myemailaddress@bgit.rs'));


// 10. Write a program to find the most frequent item of an array.
// Input: [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

function mostFreq (arr) {
    var maxCount = 0;
    var el;
    for (var i = 0; i < arr.length; i++) {
        var next = arr[i];
        var nextCount = 1;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] === next) {
                nextCount++;
            }
        }
        if (nextCount > maxCount) {
            maxCount = nextCount;
            el = next;
        }
    }
    return el;
}

console.log(mostFreq[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);
