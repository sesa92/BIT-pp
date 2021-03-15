// While

var count = 0;

while (count < 10) {
    count = count + 1;
    console.log(count);
}


 while (true) {
     if (count === 10) {
         break;
    } 
    count = count + 1;
    console.log(count);
}


// Do-While

var counter = 7;

do {
    counter = counter + 1;
    console.log(counter);
}
    while (counter < 10);


// For

var punishment = '';

for (var i = 0; i < 100; i++) {
    punishment += 'I will never do this again\n';
}

console.log(punishment);


var sum = 0;

for (var i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log(sum);


var sum = 0;

for (var i = 1; i <= 100; i++) {
    
    if (sum === 0) {
        console.log('Current sum is ' + sum + '.');
    }
    sum = sum + i;
    
    if (sum > 30) {
        break;
    }

    console.log('Adding ' + i + '.Current sum is ' + sum);
}


var array = [1, 2, null, true, 'string', undefined, 12.5, '123456789'];

for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}