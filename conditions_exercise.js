// 1. Write a conditional statemane to find the sign of product of three numbers. 
// Display the numbers in the console with the specified sign. Sample numbers: 3, -7, 2.

var x = 3;
var y = -7;
var z = 2;


if (x * y * z > 0) {
    console.log("The sign is +")
} else if (x * y * z < 0) {
    console.log("The sign is -")
} else {
    console.log("The result is 0")
}

// 2. Write a conditional statement to find the largest of five numbers. Display the result in the console.
// Sample numbers: -5, -2, -6, 0 , -1.

var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;

if (a > b && a > c && a > d && a > e) {
    console.log(a);
} else if (b > c && b > d && b > e) {
    console.log(b);
} else if (c > d && c > e) {
    console.log(c);
} else if (d > e) {
    console.log(d);
} else {
    console.log(e);
}

// 3. Write a conditional statement to print three numbers as sorted number list. Sample numbers: 0, -1, 4.


var a = 0;
var b = -1;
var c = 4;

if (a > b && a > c) {
    if (b > c) {
        console.log(a + ", " + b + ", " + c);
}
    else {
        console.log(a + ", " + c + ", " + b);
    }
} else if (b > a && b > c) {
    if (a > c) {
        console.log(b + ", " + a + ", " + c);
}       else {
            console.log(b + ", " + c + ", " + a);
    }
} else if (c > a && c > b) {
    if (a > b) {
        console.log(c + ", " + a + ", " + b);
    } else {
        console.log(c + ", " + b + ", " + a);
    }
}   


// 4. Write a program to check if the cariable is a number and if its a number, check if its divisible by 2.
//  If it is, print the result, of not show "X". Sample input: 10, 7.

var num1 = 10;
var num2 = 7;

if (typeof num1  === "number") {
    if (num1 % 2 === 0) {
        console.log(num1);
    } else {
        console.log("X");
    }
}

if (typeof num2  === "number") {
    if (num2 % 2 === 0) {
        console.log(num2);
    } else {
        console.log("X");
    }
}


// 5. Write a program that compares 2 numbers and displays the larger. Display the result in the console.

var x = 70;
var y = 50;

if (x > y) {
    console.log(x);
} else if (y > x) {
    console.log(y)
} else {
    console.log("The numbers are equal");
}

// 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit. 
// Formula: F=(9*C/5)+32 [where c=temperature in Celsius and f=temperature in Fahrenheit]. Sample input: 60°C.

var F;
var c = 60;
var result;

if (typeof F === "undefined") {
    console.log(result = (9*c/5) + 32);
} else {
    console.log(result = (5/9) * (F - 32));
}

// 7. Write a JavaScript program to get the diffrence between a given number and 13, if the number is greater
// than 13 return double difference between that number and 13. Sample number: 11, 32.

var a = 11;
var b = 32;

if (a <= 13) {
        console.log(13 - a);
} else {
        console.log((a - 13) * 2);
}

if (b <= 13) {
    console.log(13 - b);
} else {
    console.log((b - 13) * 2);
}

// 8. Write a JavaScript program to compute the sum of the two given integers.
//  If the two values are same, then return triple therir sum. Sample input: (12,5),(8,8).

var a = 12;
var b = 5;

if (a == b) {
    console.log(3 * (a + b));
} else {
    console.log(a + b);
}


var a = 8;
var b = 8;

if (a == b) {
    console.log(3 * (a + b));
} else {
    console.log(a + b);
}


// 9. Write a JavaScript program to check two given numbers and print true if one of the number is 50 or if
// their sum is 50. Sample input: (5,54),(6,50),(40,10).

var a = 5;
var b = 54;

if ((a == 50 || b == 50) || (a + b == 50)) {
    console.log("True")
} else {
    console.log("False")
};


var a = 6;
var b = 50;

if ((a == 50 || b == 50) || (a + b == 50)) {
    console.log("True")
} else {
    console.log("False")
};


var a = 40;
var b = 10;

if ((a == 50 || b == 50) || (a + b == 50)) {
    console.log("True")
} else {
    console.log("False")
};

// 10. Write a JavaScript program to check a given integer is within 20 of 100 or 100 of 400, and print
// range in which number belong. Sample number belongs: 13, 34, 256.

var a = 13;

if (a > 20 && a < 100) {
    console.log("20-100");
} else if (a >= 100 && a < 400) {
    console.log("100-400")
} else {
    console.log("-");
}


var a = 34;

if (a > 20 && a < 100) {
    console.log("20-100");
} else if (a >= 100 && a < 400) {
    console.log("100-400")
} else {
    console.log("-");
}

var a = 256;

if (a > 20 && a < 100) {
    console.log("20-100");
} else if (a >= 100 && a < 400) {
    console.log("100-400")
} else {
    console.log("-");
}