var input = 'programming';
var output = input[0].toUpperCase().concat(input.substr(1));
console.log(output);

// 2.

var input = 'programming in js';
var output;
output = input.substr(-2).toUpperCase();

// 3.

var input = 'programming in js';
output = input[0]
    .toUpperCase()
    .concat(input.slice(1, -2))
    .concat(input.substr(-2).toUpperCase());
console.log(output);

// 4.

var greeting = 'Hello everyone!';
console.log(greeting.indexOf('o', 5));

// 5. 

var greeting = "Hello everyone!";
console.log(greeting.lastIndexOf('o', 5));

// 6.

var message = 'Sunny Saturday';
message.length = 2;
console.log(message);

// 7.

var message = 'Sunny Saturday';
message[0] = 'S';
console.log(message);

// 8.

var username = "Pera Peric";
var separator = username.indexOf(' ');
console.log(username.slice(0, separator));

// 9.

var importantMessage = 'hmhmhmhm';
importantMessage.toUpperCase();
console.log(importantMessage);

// 10.

var numbers = '1234567890';
var i = Math.round(Math.random() * numbers.length);
console.log(numbers[i]);

// 11.

var message = 'hi';
message[0] = 'H'; // ne menja se zato sto su stringovi nepromenljivi objekti
console.log(message);

// 12.

var name = 'pera';
var ime = 'pera';
console.log(name == ime);

// 13.

var name = String('pera');
var ime = String('pera');
console.log(name == ime);