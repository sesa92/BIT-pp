// 1. Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U.

(function(string) {
    var counter = 0;

    for (var i = 0; i < string.length; i++) {
        if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'A' || string[i] === 'E' || string[i] === 'I' || string[i] === 'O') {
            counter++;
        }
    }
    console.log(counter);
})('This is a string.')


// 2. Write a function that combines two arrays by alternatingly taking elements.
// Input: [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

(function(arr1, arr2) {
  
    var newArray = [];
    
    for (var i = 0; i < arr1.length; i++) {
        newArray[newArray.length] = arr1[i];
        newArray[newArray.length] = arr2[i];
    }
    
    console.log(newArray);
  
  })(['a', 'b', 'c'], [1, 2, 3]);


// 3. Write a function that rotates a list by k elements.
// Input: [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

(function(array, num){
    var newArray = [];

    for (var i = num , j = 0; i < array.length + num; i++) { 
     if (i >= array.length) { 
            newArray[newArray.length] = array[j];
            j++;
        } else {
            newArray[newArray.length] = array[i]; 
        }
    }
    console.log(newArray);

})( [1, 2, 3, 4, 5, 6], 2);


// 4. Write a function that takes a number and returns array of its digits.


(function(number){
var number = number + '';
var array = [];

for (var i = 0; i < number.length; i++) {
    var current = number[i];
    array[array.length] = parseInt(current);
    }
    console.log(array);
})(1487)

// 5. Write a program that prints a multiplication table for numbers up to 12.

(function(){
    for (var i = 1; i <= 12; i++) {
        for (var j = 1; j <= 12; j++)
        console.log(i * j);
    }
})()


// 6. Write a function to input temperature in Centigrade and convert to Fahrenheit.

(function(number){
    console.log((number*1.8) + 32);
})(0)

// 7. Write a function to find the maximum element in array of numbers. Filter out all non-number elements.

(function(array) {
    var newArray = [];
    

    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            newArray[newArray.length] = array[i];
        }
    } 

    var max = newArray[0];
    for (var i = 0; i < newArray.length; i++) {
        if (max < newArray[i]) {
            max = newArray[i];
        }
    }
    
    console.log(newArray);
    console.log(max);

}) ([1, 2, null, 4, true, 3, 6, 'c', 7, undefined, 4, 3, 'a', 2, 2]);


// 8. Write a function to find the maximum and minimum elements. Function returns an array.

(function(array){
    var newArray = [];

    var min = array[0];
    var max = array[0];


    for (var i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];   
        }
         if (array[i] > max) {
            max = array[i];
        }
    }
    newArray[newArray.length] = min;
    newArray[newArray.length] = max;

    console.log(newArray);
})([2, 4, 3, 35, 42, -15, 6, 7, 4, 3, -10, 17, 2, 2])


// 9. Write a function to find the median element of array.

function median (array) {
    var temp = 0;

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[i] < array[j]) {
            temp = array[i];
            array[i] = array[j];
            array[j] =  temp;
            }
        }
    }
    for (var i = 0; i < array.length; i++) {
        if (array.length % 2 === 0) {
             return (array[(array.length / 2) - 1] + array[array.length / 2]) / 2;
        } else {
            return array[(array.length - 1) / 2];
        }
    }

}

var med1 = median([5, 10, 12, 9, 10, 10, 7, 1, 9, 2, 9, 11, 10, 10]);
var med2 = median([5, 10, 12, 9, 10, 10, 7, 1, 9, 2, 9, 11, 10]);
console.log(med1);
console.log(med2);


// 10. Write a function to find the element that occurs most frequently.

(function(array){
    var el = 0;
    var counter1 = 0;
    var counter2 = 0;

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
                counter1++;
            } 
        }
            if (counter1 > counter2) {
                counter2 = counter1; 
                el = array[i];
        }
        counter1 = 0;
    }

    console.log(el);

})([5, 12, 9, 7, 10, 10, 1, 9, 2, 9, 11, 10, 10]);


// 11. Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.

function returnArray (array){
    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        if (array.length % 2 !== 0) {
            return array[0] + ',' + array[(array.length - 1) / 2] + ',' + array[array.length - 1];
        } else if (array.length % 2 === 0) {
            return array[0] + ',' + array[array.length - 1];
        } else {
            return newArray;
        }
    }
} 

var arr1 = returnArray([5, 12, 9, 7, 10, 10, 1, 9, 2, 9, 11, 10, 10, 2]);
var arr2 = returnArray([5, 12, 9, 7, 10, 10, 1, 9, 2, 9, 11, 10, 10]);
console.log(arr1);
console.log(arr2);


// 12. Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.

(function() {
    var a = 0;

    for (var i = 0; i < arguments.length; i++) {
        a += arguments[i];
    }
    console.log(a);
})(5, 10)


// 13. Write a function to find all the numbers greater than the average.

(function(array){
    var sum = 0;
    var average = 0;
    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    average = sum / array.length;

    for (var i = 0; i < array.length; i++) {
        if (array[i] > average) {
            newArray[newArray.length] = array[i];
        }
    }
    console.log(newArray);
})([5, 12, 9, 7, 6, 5, 1, 9, 2, 4, 8, 7, 10, 2]);


// 14. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
//  ● Starvation: less than 15
//  ● Anorexic: less than 17.5
//  ● Underweight: less than 18.5
//  ● Ideal: greater than or equal to 18.5 but less than 25
//  ● Overweight: greater than or equal to 25 but less than 30
//  ● Obese: greater than or equal to 30 but less than 40
//  ● Morbidly obese: greater than or equal to 40

function calcBmi(weight, height){
    var BMI = weight / ((height / 100) * (height / 100));
    var category = '';
    
    if (BMI < 15) {
        return category = 'Starvation';
    } else if (BMI < 17) {
        return category = 'Anorexic';
    } else if (BMI < 18.5) {
        return category = 'Underweight';
    } else if (BMI > 18.5 && BMI < 25) {
        return category = 'Ideal';
    } else if (BMI > 25 && BMI < 30) {
        return category = 'Overweight'
    } else if (BMI >= 30 && BMI < 40) {
        return category = 'Obese'
    } else if (BMI >= 40) {
        return category = 'Morbidly Obese'
    }
}

var res = calcBmi(80, 180);
console.log(res);

// 15. Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.


function frame(array) {
    var stop = 0;
    var frame = "";
    var inFrame = "";
    var string = "";
  
    for (var i = 0; i < array.length; i++) {
      if (array[i].length > stop) {
        stop = array[i].length;
      }
      inFrame += "* " + array[i] + " *" + "\n";
    }
    for (var j = 0; j < stop + 4; j++) {
      frame += "*";
    }
    string = frame + "\n" + inFrame + frame;
    return string;
  }
  
  var res = frame(["Hello", "World", "in", "a", "frame"]);
  console.log(res);
  




