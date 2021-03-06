// 1.

var x = 3;
var y = -7;
var z = 2;


if (x * y * z > 0) {
    console.log("The sign is +")
} else {
    console.log("The sign is -")
};

// 2.

var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;

if (a > b && a > c && a > d && a > e) {
    console.log(a);
} else if (b > a && b > c && b > d && b > e) {
    console.log(b);
} else if (c > a && c > b && c > d && c > e) {
    console.log(c);
} else if (d > a && d > b && d > c && d > e) {
    console.log(d);
} else {
    console.log(e);
}

// 3.

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


// 4. 

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


// 5.

var x = 70;
var y = 50;

if (x > y) {
    console.log(x);
} else if (y > x) {
    console.log(y)
} else {
    console.log("The numbers are equal");
}

// 6.

var C = 35;
var F = (9*C/5) + 32;
console.log(C + "\xB0C is " + F + " \xB0F.");

F = 50;
C = (5/9) * (F - 32);
console.log(F + "\xB0F is " + C + " \xB0C.");

var F;
var c = 60;
var result;

if (typeof F === "undefined") {
    result = (9*C/5) + 32;
} else {
    result = (5/9) * (F - 32);
}

console.log(result);







// 7.

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

// 8.

var a = 8.8;
var b = 8.8;

if (a == b) {
    console.log(3 * (a + b));
} else {
    console.log(a + b);
}


var a = 15.5;
var b = 17.3;

if (a == b) {
    console.log(3 * (a + b));
} else {
    console.log(a + b);
}


// 9.

var a = 5;
var b = 50;

if ((a == 50 || b == 50) || (a + b == 50)) {
    console.log("True")
} else {
    console.log("False")
};


var a = 18;
var b = 37;

if ((a == 50 || b == 50) || (a + b == 50)) {
    console.log("True")
} else {
    console.log("False")
};

// 10.

var a = 102;

if (a > 20 && a < 100) {
    console.log("20-100");
} else if (a >= 100 && a < 400) {
    console.log("100-400")
} else {
    console.log("-");
}


var a = 15;

if (a > 20 && a < 100) {
    console.log("20-100");
} else if (a >= 100 && a < 400) {
    console.log("100-400")
} else {
    console.log("-");
}