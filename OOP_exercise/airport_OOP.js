// ● Flight - relation, date and list of passengers (initially empty)
// ● Airport - name (should be a hard-coded value 'Nikola Tesla'), list of flights
// If category is not provided for Seat, assume it’s economy (“e”).
// If seat number is not provided, assign a random number between 10 and 100.
// Add getData method to Person. It should return a formatted string containing the name and surname of the person.
// 'John', 'Snow'-> "John Snow”
// Add getData method to Seat. It should return a formatted string containing a seat number and category.
// 12, 'B' -> "12, B”
// Add getData method to Passenger. It should return a formatted string containing a seat number, category letter (always in uppercase), a name and surname. To display seat data, use getData method of the Seat object. The same goes for the person data.
// personObj, seatObj -> 12, B, John Snow
// Add addPassenger method to Flight. It should receive Passenger and add the passenger to the passenger list of a given flight.
// Add addFlight method to Airport. It should add the flight to the list of flights of the airport.
// Add getData method to Flight. It should return a formatted string containing a date, relation, all data related to the flight and list of passengers with their data.
// 25.10.2017, Belgrade - Paris
// 1, B, John Snow
// 2, E, Cersei Lannister

//Inside your immediately-invoking function, add createFlight function that receives a relation (ex. Belgrade - New York) and date as parameters and returns a created Flight.
// Inside your immediately-invoking function, add createPassenger function that receives a first name, last name, seat number and category and returns a created Passenger. In you main program function, create an instance of the Airport object.
// Create two instances of the Flight object using the createFlight function and the following data:
// relation: 'Belgrade - New York' date: 'Oct 25 2017';
// relation: 'Barcelona - Belgrade' date: 'Nov 11 2017';
// Create four instances of the Passenger object using the createPassenger function with the following data:
// Name: 'John' surname: 'Snow' seat number: 1 category: 'b';
// Name: 'Cersei' surname: 'Lannister' seat number: 2 category: 'b';
// Name: 'Daenerys' surname: 'Targaryen' seat number: 14;
// Name: 'Tyrion' surname: 'Lannister';
// Add the first two passengers to the first flight and the second two to the second flight using the Flight’s addPassenger method.
// Add the created flight instances to the airport using Airport’s addFlight method.
// Call Airport’s getData method to display the airport data output in the following manner:
// Airport: Nikola Tesla, total passengers: 4
// 25.10.2017, Belgrade - Paris
// 1, B, John Snow
// 2, E, Cersei Lannister
// 11.11.2017, Barcelona - Belgrade
// 3, E, Daenerys Targaryen
// 4, E, Tyrion Lannister

// Hints
// ● List is a synonym for array, so when we say a list of flights, it’s actually an array of flight objects
// ● Use JS built-in Date()object to parse input date
// ● Use \t and \n special strings to format output
// ● Use built-in String methods to transform text from lowercase to uppercase
// ● Use Array’s built-in methods to add and remove elements from an array

'use strict';

(function airport() {
    console.log('Hi!');

    function formatDate(date) {
        return date.getDate() + '.' +
            (date.getMonth() + 1) + '.' + 
            date.getFullYear();
    }


    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.getData = function() {
            return this.name + ' ' + this.surname;
        }
    }

    function Seat(number, category) {
        this.number = number;
        this.category = category;
        if (category == 'b' || category == 'B') {
            this.category = 'b';
        } else {
            this.category = 'e';
        }
        if (!number) {
            this.number = Math.floor(Math.random() * 99 + 1);
        }
        this.getData = function() {
            return this.number + ', ' + this.category.toUpperCase();
        }
    }

    // personObj, seatObj -> 12, B, John Snow

    function Passanger(person, seat) {
        this.person = person;
        this.seat = seat;
        this.getData = function() {
            return this.seat.getData() + ', ' + this.person.getData();
        }
    }

    function Flight(relation, date) {
        this.relation = relation;
        this.date = date;
        this.listOfPassangers = [];
        this.addPassenger = function(passanger) {
            this.listOfPassangers.push(passanger);
        }

        this.getListOfPassangers = function () {
            var passangerList = '';

            for (var i = 0; i < this.listOfPassangers.length; i++) {
                var passanger = this.listOfPassangers[i];
                passangerList += '\n\t\t' + passanger.getData();
            }

            return passangerList;
        };

        
        this.getData = function() {
            
            return (
                formatDate(this.date) + 
                ', ' + 
                this.relation + 
                this.getListOfPassangers() +
                '\n'
            )
        }
    }

    function totalPassangers (listOfFlights) {
        var totalPassangers = 0;
        for (var i = 0; i < listOfFlights.length; i++) {
            var currentFlight = listOfFlights[i];
            for (var j = 0; j < currentFlight.listOfPassangers.length; j++) {
                totalPassangers++;
            }
        }
        return totalPassangers;
    }

    function flights(listOfFlights) {
        var str = '';
        listOfFlights.forEach(flight => {
            str += '\t' + flight.getData();
        });
        return str;
    }



    function Airport () {
        this.name = 'Nikola Tesla';
        this.listOfFlights = [];
        this.addFlight = function(flight) {
            this.listOfFlights.push(flight)
        }
        this.getData = function() {
            return (
                'Airport: ' + this.name + ', total passangers: ' +  totalPassangers(this.listOfFlights) + '\n' + flights(this.listOfFlights)
            )
        }
    }

var date1 = new Date('2017, 9, 25');
var date2 = new Date('2017, 10, 11');

var person1 = new Person('John', 'Snow');
var person2 = new Person('Cersei', 'Lanister');
var person3 = new Person('Daenerys', 'Targaryen');
var person4 = new Person('Tyrion', 'Lanister');

var seat1 = new Seat(1, 'b');
var seat2 = new Seat(2, 'b');
var seat3 = new Seat(14);
var seat4 = new Seat();

var pass1 = new Passanger(person1, seat1);
var pass2 = new Passanger(person2, seat2);
var pass3 = new Passanger(person3, seat3);
var pass4 = new Passanger(person4, seat4);

var flight1 = new Flight("Belgrade - New York", date1);
var flight2 = new Flight('Barcelona - Belgrade', date2);

flight1.addPassenger(pass1);
flight1.addPassenger(pass2);
flight2.addPassenger(pass3);
flight2.addPassenger(pass4);


var airport = new Airport();

airport.addFlight(flight1);
airport.addFlight(flight2);



// console.log(person1.getData());
// console.log(seat1.getData());
// console.log(pass1.getData());
// console.log(flight1.getData());
// console.log(flight2.getData());
console.log(airport.getData());

})()