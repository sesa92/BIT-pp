// 1. Why pay a fortune teller when you can just program your fortune yourself? Write a function named tellFortune that:
//    ● takes 4 arguments: number of children, partner's name, geographic location, job title.
//    ● outputs your fortune to the screen like so: 'You will be a X in Y, and married to Z with N kids.'
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(N, Z, Y, X){
    return "You will be a " + X + ' in ' + Y + ', and married to ' + Z + ' with ' + N + ' kids.'
}

var result = tellFortune(3, 'Dejana', 'Novi Sad', 'Programer');
var res = tellFortune(2, 'Marija', 'Beograd', 'Prodavac');
var r = tellFortune(4, 'Irena', 'Kragujevac', 'Doktor');
console.log(result);
console.log(res);
console.log(r);


// 2. You know how old your dog is in human years, but what about dog years? Calculate it!
// Write a function named calculateDogAge that:
//  ● takes 1 argument: your puppy's age.
//  ● calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
//  ● outputs the result to the screen like so: 'Your doggie is NN years old in dog years'.
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

function calculateDogAge(num) {
    var NN = num * 7;
    return "Your doggie is " + NN + " old in dog years."
}

var years = calculateDogAge(4);
var year = calculateDogAge(5);
var y = calculateDogAge(6);
console.log(years);
console.log(year);
console.log(y);


// 3. Ever wonder how much a 'lifetime' supply' of your favorite snack is? Wonder no more!
// Write a function named calculateSupply that:
//  ● takes 2 arguments: age, amount per day.
//  ● calculates the amount consumed for rest of the life (based on a constant max age).
//  ● outputs the result to the screen like so: 'You will need NN to last you until the ripe old age of X.'
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply (age, amountPerYear) {
    var result = amountPerYear * age
    return 'You will need ' + result + ' to last you until the ripe old age of ' + age;
}

var amount = calculateSupply(70,48);

console.log(amount);
