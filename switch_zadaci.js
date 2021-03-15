// 1.

var day = 1;

switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;   
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    default:
        console.log('Sunday');
        break;
}


// 2.

var day = 10;

switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;   
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Input must be a number between 1 and 7');
        break;
}


// 3.

var day = 6;

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Its a weekday');
        break;
    case 6:
    case 7:
        console.log('Its a weekend');
        break;
    default:
        console.log('Input must be a number between 1 and 7');
        break;
}


// 4.


var month = 10;

switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;   
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;
    case 5:
        console.log('May');
        break;
    case 6:
        console.log('June');
        break;
    case 7:
        console.log('July');
        break;
    case 8:
        console.log('August');
        break;    
    case 9:
        console.log('September');
        break;
    case 10:
        console.log('October');
        break;   
    case 11:
        console.log('November');
        break;
    case 12:
        console.log('December');
        break;
    default:
        console.log('Input must be a number between 1 and 12');
        break;
}

// 5.

var month = 6;

switch (month) {
    case 1:
    case 2:
    case 12:
        console.log('Winter');
        break;   
    case 3:
    case 4:
    case 5:
        console.log('Spring');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Summer');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Autumn');
        break;
    default:
        console.log('Input must be a number between 1 and 12');
        break;
}


// 6.

var grade = "A"

switch (grade) {
    case 'A':
        console.log('Good Joob');
        break;
    case 'B':
        console.log('Pretty Good');
        break;   
    case 'C':
        console.log('Passed');
        break;
    case 'D':
        console.log('Not so good');
        break;
    case 'F':
        console.log('Failed');
        break;
    default:
        console.log('Unknown grade');
        break;
}

// 7.

var city = 'Madrid';


switch (city) {
    case 'Novi Sad':
        console.log('Serbia');
        break;
    case 'Paris':
    case 'Marseille':
        console.log('France');
        break;   
    case 'London':
    case 'Manchester':
    case 'Liverpool':
        console.log('England');
        break;
    case 'Madrid':
    case 'Barcelona':
    case 'Seville':
    case 'Valencia':
        console.log('Spain');
        break;
    case 'Berlin':
    case 'Frankfurt':
    case 'Hamburg':
    case 'Cologne':
    case 'Munich':
        console.log('Germany');
        break;
    default:
        console.log('Unknown grade');
        break;
}

// 8.


var a = 10;
var b = 2;
var operation = 'divide';

switch (operation) {
    case 'plus':
        console.log(a + b);
        break;
    case 'minus':
        console.log(a - b);
        break;   
    case 'multiply':
        console.log(a * b);
        break;
    case 'divide':
        b === 0 ? console.log('Division by 0') : console.log(a / b);
    break;
    default:
        console.log('Failed');
        break;
}