// 1. Write IIFE that replaces the first and the last element of the given array and prints out its
// elements.


var input = [4, 5, 11, 9];

(function(array){
    var temp;

    temp = array[0];
    array[0]= array[array.length - 1];
    array[array.length - 1] = temp;

    console.log(array)
})(input);


// 2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.

 
(function(a,b){
    var area = a * b;
    console.log(area)
})(4, 5);


// 3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
// number of replacements.
// Input: prograMming


(function(str){
    var string = '';
    var counter = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'm' || str[i]  === 'M') {
            string = string + '*';
            counter++;
        } else {
            string = string + str[i];
        }
    } 

    console.log(string + ',' + counter);

})('prograMming');


// 4. Write a function with parameters name and surname that returns a function that
// suggests an email in the form name.surname@gmail.com.
// Input: pera peric

// primer 1

(function(name, surname){
    console.log(name + '.' + surname + '@gmail.com');
})('pera', 'peric');



// primer 2

(function(string) {
    var str = '';

    for (var i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            str = str + '.'; 
        } else {
            str = str + string[i];
        }
    } 
    console.log(str + '@gmail.com');
})('pera peric');

// 5. Write a function that returns a function that calculates a decimal value of the given octal number.
// Input: 034


var n = 034;

(function(){
    console.log(parseInt(n, 10));
}())

