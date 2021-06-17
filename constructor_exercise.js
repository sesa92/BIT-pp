// 1.

var hero = {
    name: 'Superhero',
    sayName: function () {
        console.log('Hi, I am ' + this.name);
    }
};

hero.sayName();

function Hero (name, occupation, kind) {
    this.kind = kind;
    this.name = name;
    this.occupation = occupation;
    this.sayName = function() {
        return 'Hi, I am ' + this.name;
    }
}

var hero1 = new Hero ('Leonardo', 'Ninja', 'Turtle');
var hero2 = new Hero ('Donatelo', 'Ninja', 'Turtle');
var hero3 = new Hero ('Rafaelo', 'Ninja', 'Turtle');
var hero4 = new Hero ('Splinter', 'Ninja', 'Rat');

console.log(hero1, hero4);

// 2.

function createCat (name, color, weight) {
    var obj = {};

    obj.name = name;
    obj.color = color;
    obj.weight = weight;

    obj.sleep = function() {
        console.log('Zzzzzz...');
    }
    obj.sayMeow = function (times) {
        times = times || 1;

        for (var i = 0; i < times; i++) {
            console.log('Meow!')
        }
    }
    obj.getWeight = function () {
        return this.weight + 'kg';
    }
    return obj;
}

var cat1 = createCat('Leo', 'white', 5);
console.log(cat1);

cat1.sleep();

console.log(cat1.getWeight());
















// Inside your immediately-invoking function, add a function that returns a created Player.
// Inside your immediately-invoking function, add a function that creates a BettingPlace.
// Create an instance of the BettingHouse that receives the name of competition.
// Create four players with random data. Create two betting places. Add created players as you wish to Betting places. Add betting places to the betting house.
// Display all betting house data in the following manner:

// Football World Cup Winner, 2 betting places, 4 bets
// Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
// SR, 1050.00 eur, Pera Peric, 29 years
// SR, 1050.00 eur, Pera Peric, 29 years
// Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
// GR, 1050.00 eur, Pera Peric, 29 years
// SR, 1050.00 eur, Pera Peric, 29 years

// There are 3 bets on Serbia

"use strict"

(function () {
    var CONTINENT = {
        ASIA: 'AS',
        EUROPE: 'EU',
        NORTH_AMERICA: 'NA',
        SOUTH_AMERICA: 'SA',
        AUSTRALIA: 'AU',
        AFRICA: 'AF',
    }

    function Country (name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
        this.getFormatedName = function () {
            var formatted = this.name(0)

            for (var i = 1; i < this.name.length; i++) {
                var current = this.name(i);

                switch (current) {
                    case 'a':
                    case 'e':
                    case 'i':
                    case 'o':
                    case 'u':
                    case 'A':
                    case 'E':
                    case 'I':
                    case 'O':
                    case 'U':
                        continue;
                }
                formatted += current;
                break;
            }
            return formatted;
        };
    }
    function Person (name, surname, dateOfBirth) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = dateOfBirth;
        this.getInfo = function () {
            return this.name + ' ' + this.surname + ', ' + (2021 - this.dateOfBirth.year) + ' years';
        };
    }
    function Player(person, betAmount, country) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
        this.getBetInfo = function () {
            return (
                this.country.getFormatedName() + ', ' + this.betAmount * this.country.odds + ' eur, ' + this.person.getInfo()
            );
        };
    }
    var serbia = new Country('Serbia', 5, CONTINENT.EUROPE);

    var ivan = new Person ('Ivan', 'Balic', {day: 8, month: 2, year: 1991 });

    var player = new Player (ivan, 100, serbia);

    console.log(player.getBetInfo());
})();





