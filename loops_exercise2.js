// 1. Ispisati brojeve od 0 do 5 koristeći for petlju

for (var i = 0; i <= 5; i++) {
    console.log(i);
}


// 2. Ispisati brojeve od 20 do 30 koristeći while petlju

var i = 20;

while (i <= 30) {
    console.log(i);
    i++;
}


// 3. Ispisati parne brojeve od 0 do 10 koristeći for petlju

for (var i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// 4. Ispisati prvih 10 neparnih prirodnih brojeva koristeći while petlju

var i = 1;
var counter = 0;

while (counter < 10) {
    if (i % 2 === 1) {
        counter++;
        console.log(i);
    }
    i++;
}


// 5. Ispisati prvih 10 neparnih prirodnih brojeva koristeći for petlju

var i = 1;

for (counter = 0; counter < 10; i++) {
    if (i % 2 === 1) {
        counter++;
        console.log(i);
    }
}



// 6. Ispisati sve brojeve od 10 do 0 (po opadajućem redosledu)

for (var i = 10; i >= 0; i--) {
    console.log(i);
}


// 7. Ispisati sve brojeve u datom opsegu 
// (definisati dve promenljive koje sadrze pocetak i kraj,i ispisati sve brojeve izmedju njih)

var start = 21;
var end = 42;

for (var i = start; i <= end; i++) {
    console.log(i);
}


// 8. Napisati program koji sabira prvih 10 prirodnih brojeva kroz petlju. Ispisati rezultat

var sum = 0;

for (var i = 1; i <= 10; i++) {
    sum += i;
}

console.log(sum);


// 9. Napisati program koji sabira prvih 20 neparnih prirodnih brojeva. Ispisati rezultat

var i = 1;
var counter = 0;
var sum = 0;

while (counter < 20) {
    if (i % 2 === 1) {
        sum += i;
        counter++;
    }
    i++;
}

console.log(sum);

// 10. Napisati program koji vrši množenje dva broja bez korišćenja operatora *, 
// tako što sabira broj sa samim sobom više puta (npr. 4 * 5 se računa kao 5 + 5 + 5 + 5)

var product = 0;
var a = 4;
var b = 5;

for (var i = 1; i <= a; i++) {
    product += b;
}

console.log(product);


// 11. Napisati program koji vrši stepenovanje dva broja, tako što množi broj sa samim sobom više puta 
// (npr. 2⁵ se računa kao 2 * 2 * 2 * 2 * 2)

var number = 2;
var stepen = 5;
var result = 1;


for (var i = 1; i <= stepen; i++) {
    result *= number;
}

console.log(result);


// 12. Napisati program koji za dati broj ispisuje proizvode svih brojeva od 1 do 10 sa tim brojem 
// (npr. za zadati broj 7 ispisati 7, 14, 21, 28, 35, 42, 49, 56, 63, 70)

var n = 7;

for (var i = 1; i <= 10; i++) {
    console.log(i * n);
}


// 13. Napisati program koji za dati broj ispisuje proizvode svih brojeva od 1 do 10 sa tim brojem, 
// odvojene razmacima (npr. za zadati broj 7 ispisati string '7 14 21 28 35 42 49 56 63 70'). 
// Spajanje stringova se može izvršiti pomoću operatora + ili +=, npr:  var str = 'Hello'; str += ' world';

var n = 7;
var str = '';

for (var i = 1; i <= 10; i++) {
    str += (i * n) + ' ';
}

console.log(str);


// 14. Napisati program koji računa faktorijel datog broja. 
// Faktorijel nekog broja je proizvod svih brojeva od 1 do tog broja 
// (npr. faktorijel broja 5 je 1 * 2 * 3 * 4 * 5 = 120)

var n = 5;
var factorial = 1;

for (var i = 1; i <= n; i++) {
    factorial *= i;
}

console.log(factorial);


// 15. Napisati program koji kroz petlju broji, i na kraju ispisuje, koliko brojeva od 1 do 100 je deljivo sa 3
// (rezultat treba da bude 33)

var counter = 0;

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        counter++;
    }
}

console.log(counter);

// 16. Napisati program koji kroz petlju broji, i na kraju ispisuje, koliko brojeva u datom opsegu je deljivo sa 3
// (definisati dve promenljive koje sadrze pocetak i kraj)

var counter = 0;
var start = 36;
var end = 88;

for (var i = start; i <= end; i++) {
    if (i % 3 === 0) {
        counter++;
    }
}

console.log(counter);


// 17. Napisati program koji kroz petlju broji, i na kraju ispisuje, 
// koliko brojeva u datom opsegu je deljivo sa 3, a koliko sa 7

var counter3 = 0;
var counter7 = 0;
var start = 36;
var end = 88;

for (var i = start; i <= end; i++) {
    if (i % 3 === 0) {
        counter3++;
    }
    if (i % 7 === 0) {
        counter7++;
    }
}

console.log('Deljivo sa 3:', counter3);
console.log('Deljivo sa 7:', counter7);


// 18. Ispisati prvih 10 stepeni dvojke (2, 4, 8, 16… 1024)

var power = 1;

for (var i = 1; i <= 10; i++) {
    power *= 2;
    console.log(power);
}


// 19. Napisati program koji računa i ispisuje prvih 20 brojeva u Fibonačijevom nizu.
// Fibonačijev niz počinje od 1 i svaki sledeći broj je zbir prethodna dva.
// Npr. prvih deset brojeva su: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

// Moj primer

var previous = 0;
var current = 1;

for (var i = 1; i <= 20; i++) {
    console.log(current);
    var temporaryCurrent = current;
    current = previous + current;
    previous = temporaryCurrent;
}

// 2. primer
   
var counter = 2;
var poslednji = 1;
var trenutni= 1;
console.log(poslednji);
console.log(trenutni);
    
while(counter<20) {
    var sledeci=poslednji+trenutni;
    console.log(sledeci)
    poslednji=trenutni;
    trenutni=sledeci;
    counter++
}


// 20. Ispisati sve proste brojeve od 1 do 100

for (var n = 2; n <= 100; n++) {
    var noDivisorsSoFar = true;
    
    for (var divisor = 2; divisor < n; divisor++) {
        if (n % divisor === 0) {
            noDivisorsSoFar = false;
            break;
        }
    }
    
    if (noDivisorsSoFar) {
        console.log(n);
    }
}



// 21. Odrediti sa koliko brojeva je deljiv uneti broj k

var k = 15;
var i = 1;
var counter = 0;

while(i <= k){
    if(k % i === 0){
        counter++;
    }
    i++; 
}
console.log(counter);

