// 3. Bookmaker’s
// In your IDE of choice, create a new JavaScript file named booking-house.js and make it so that all code written in the file follows JS strict mode.
// Create an anonymous immediately-invoking function that will hold main execution of all program calls. Make sure that functions that you write in this function are pure functions.
// Create constructor functions with properties representing the following:
//      ● Country - name, odds, continent (EU, AS, AF, SA, NA, AU)
//      ● Person - name, surname, date of birth
//      ● Player - person, bet amount, country (instance of Country)
//      ● Address - country, city, postal code, street and number
//      ● BettingPlace - address and list of players (initially empty)
//      ● BettingHouse - competition, list of betting places (initially empty) and number of players
// Add a method to Person that returns a formatted string containing the name, surname and date of birth of the person (date of birth in dd.mm.yy format).
// Add a method to Address that returns a formatted string like the following one: Nemanjina 4, 11000 Beograd, SR
// Add a method to Player that returns a formatted string containing a country, expected win amount (odds * bet amount) and person data. SR, 1050.00 eur, Pera Peric, 29 years
// Add a method to BettingPlace that returns a formatted string containing a street (without a number), postal code and city, and sum of all bet amounts of that place: Nemanjina, 11000 Belgrade, sum of all bets: 50000eur
// Add a method to BettingPlace that adds a player to the players list of a betting place.
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

"use strict";

(function () {

    var CONTINENTS = {
        EUROPE: 'EU',
        ASIA: 'AS',
        NORTH_AMERICA: 'NA',
        SOUTH_AMERICA: 'SA',
        AUSTRALIA: 'AU',
        AFRICA: 'AF'
    };

    

    function Country (name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
        this.getFormattedName = function () {
            var formatted = this.name[0];

            for (var i = 1; i < this.name.length; i++) {
                var current = this.name[i];

                switch (current) {
                    case "a":
                    case "e":
                    case "i":
                    case "o":
                    case "u":
                    case "A":
                    case "E":
                    case "I":
                    case "O":
                    case "U":
                        continue;
                }
                formatted += current;
                break;
            }
            return formatted;
        }
    }

    function Date (day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
        this.getFormattedDate = function () {
            return this.day + '.' + this.month + '.' + this.year + '.';
        };
    }

    function Person (name, surname, dateOfBirth) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = dateOfBirth;
        this.getInfo = function () {
            return (
                this.name + 
                ' ' + 
                this.surname + 
                ', ' + 
                this.dateOfBirth.getFormattedDate()
            );
        };
        this.getAge = function () {
            return 2021 - this.dateOfBirth.year + ' years';
        };
    }

    function Player (person, betAmount, country) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
        this.getBetInfo = function () {
            return (
                this.country.getFormattedName() + 
                ', ' + 
                this.betAmount * this.country.odds + 
                ' eur, ' + 
                this.person.surname + 
                ', ' +
                this.person.getAge()
            );
        };
    }

    function Address (country, city, postalCode, street, number) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;
        this.getFormattedAddress = function () {
            return (
                this.street + 
                ' ' +  
                this.number + 
                ', ' + 
                this.postalCode + 
                ' ' + 
                this.city + 
                ', ' + 
                this.getFormattedName()
            );
        };
    }

    //  Nemanjina, 11000 Belgrade, sum of all bets: 50000eur

    function BettingPlace (address) {
        this.players = [];
        this.address = address;
        this.addPlayer = function (player) {
            this.players[this.players.length] = player;
        };
        this.getSumOfBets = function () {
            var sum = 0;

            for (var i = 0; i < this.players.length; i++) {
                var player = this.players[i];
                sum += player.betAmount;
            }
            return sum;
        };
        this.getListOfPlayers = function () {
            var playersList = '';

            for (var i = 0; i < this.players.length; i++) {
                var player = this.players[i];
                playersList += '\n\t' + player.getBetInfo();
            }

            return playersList;
        };
        this.printFormattedInfo = function () {
            return (
                this.address.street + 
                ', ' + 
                this.address.postalCode + 
                ' ' + 
                this.address.city + 
                ', sum of all bets: ' +
                this.getSumOfBets() + 
                this.getListOfPlayers()
            );
        };
    }

    function BettingHouse (competition) {
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.getTotalNumberOfPlayers = function () {
            var total = 0;
            this.listOfBettingPlaces.forEach(function(place) {
                total += place.players.length;
            });
            return total;
        };
        this.addBettingPlace = function (bettingPlace) {
            this.listOfBettingPlaces[this.listOfBettingPlaces.length] = bettingPlace;
        };
        this.getNumberOfBetsByCountry = function (countryNameToCheck) {
            var total = 0;
            for (var i = 0; i < this.listOfBettingPlaces.length; i++) {
                var place = this.listOfBettingPlaces[i];

                for (var j = 0; j < place.players.length; j++) {
                    var player = place.players[j];
                    var currentCountryName = player.country.name;
                    if (currentCountryName === countryNameToCheck) {
                        total++;
                    }
                }
            }
            return total;
        };
        this.getInfo = function () {
            var numOfBettingPlaces = this.listOfBettingPlaces.length;
            var bettingPlacesList = '';
            var totalNumberOfBets = 0;
            
            for (var i = 0; i < this.listOfBettingPlaces.length; i++) {
                var place = this.listOfBettingPlaces[i];
                totalNumberOfBets += place.players.length;
                bettingPlacesList += ' ' + place.printFormattedInfo() + '\n';
            }

            return (
                this.competition + 
                ', ' + 
                numOfBettingPlaces + 
                ' betting places, ' + 
                totalNumberOfBets + 
                ' bets\n' + 
                bettingPlacesList + 
                'There are ' +
                this.getNumberOfBetsByCountry('Serbia') + 
                ' bets on Serbia.'
            );
        };
    }

    function createPlayer (name, surname, day, month, year, betAmount, country) {
        var date = new Date(day, month, year);
        var person = new Person (name, surname, date);

        return new Player (person, betAmount, country);
    }

    function createBettingPlace (country, city, postalCode, street, number) {
        var address = new Address (country, city, postalCode, street, number);

        return new BettingPlace(address);
    }

    var serbia = new Country('Serbia', 2, CONTINENTS.EUROPE);
    var brasil = new Country('Brasil', 5, CONTINENTS.SOUTH_AMERICA);

    var player1 = createPlayer('Ivan', 'Balic', 8, 2, 1991, 100, serbia);
    var player2 = createPlayer('Diego', 'Jose', 3, 5, 1970, 300, brasil);
    var player3 = createPlayer('Milos', 'Jovic', 5, 12, 1985, 55, serbia);
    var player4 = createPlayer('Jovan', 'Rakic', 7, 8, 1974, 500, serbia);

    var bettingPlace1 = createBettingPlace('Serbia', 'Belgrade', 11000, 'Nemanjina', 4);

    var bettingPlace2 = createBettingPlace('Serbia', 'Belgrade', 11000, 'Kneza Milosa', 25);

    var bettingHouse = new BettingHouse('Football World Cup Winner');

    bettingPlace1.addPlayer(player1);
    bettingPlace2.addPlayer(player2);
    bettingPlace1.addPlayer(player3);
    bettingPlace2.addPlayer(player4);

    bettingHouse.addBettingPlace(bettingPlace1);
    bettingHouse.addBettingPlace(bettingPlace2);
    
    console.log(bettingHouse.getInfo());
})();

