// 1. Napisati program koji ispisuje sledeći string: 
// "The memory of that scene for me is like a frame of film forever frozen at that moment: the red carpet, the green lawn, the white house, the leaden sky. The new president and his first lady. - Richard M. Nixon"
// Reči 'red', 'green' i 'white' u datom stringu iskoristiti iz sledećeg niza:
// var colors = ['white', 'green', 'red', 'blue', 'black'];

var colors = ['white', 'green', 'red', 'blue', 'black'];

console.log("The memory of that scene for me is like a frame of film forever frozen at that moment: the " + colors[2] + " carpet, the " + colors[1] + " lawn, the " + colors[0] + " house, the leaden sky. The new president and his first lady. - Richard M. Nixon");


// 2. Napisati program koji kreira niz: colors = ['white', 'green', 'red', 'blue', 'black'];
// i ispisuje njegove elemente. Koristiti for-of petlju

var colors = ['white', 'green', 'red', 'blue', 'black'];

for (var color of colors) {
    console.log(color);
}


// 3. Kreirati niz imena meseca u godini i pomoću for-of petlje ispisati sve elemente niza

var months = ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'];

for (var month of months) {
    console.log(month);
}


// 4. Napraviti dva niza, a i b, sa proizvoljnim brojem elemenata. Ako je broj elementa u nizu a veći od broja elemeneta u nizu b, ispisati sve elemenete niza a. U suprotnom, ispisati elemente niza b.


var a = [1, 2, 5, 7];
var b = [5, 1, 9];

for (i = 0; i < a.length; i++) {
    if (a.length > b.length) {
        console.log(a[i]);
    } else if (a.length = b.length) {
        console.log(a[i],b[i]);
    } else {
    console.log(b[i]);
    }
}

// 5. Ispisati elemente proizvoljnog niza brojeva pomoću for petlje

var arr = [0, 3, 5, 7, 10];

for (var num of arr) {
    console.log(num);
}


// 6. Ispisati elemente proizvoljnog niza brojeva, uvećane za 1 (nije potrebno menjati sadržaj samog niza)

var arr = [0, 2, 6, 9, 15];

for (var num of arr) {
    console.log(num + 1);
}


// 7. Ispisati elemente proizvoljnog niza brojeva, duplirane (nije potrebno menjati sadržaj samog niza)

var arr = [3, 15, 11, 74, 12];

for (var num of arr) {
    console.log(num * 2);
}


// 8. Ispisati elemente proizvoljnog niza brojeva, unazad

var arr = [75, 18, 24, 55, 41];

for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

// 9. Ispisati svaki drugi element proizvoljnog niza

var arr = [17, 23, 45, 87, 105];

for (var i = 1; i < arr.length; i += 2) {
    console.log(arr[i]);
}


// 10. Sabrati sve elemente proizvoljnog niza brojeva i ispisati zbir na kraju

var arr = [24, 18, 52, 27, 114];
var sum = 0;

for (var num of arr) {
    sum += num;
}

console.log(sum);

// 11. Napisati program koji računa srednju vrednost elemenata proizvoljnog niza brojeva

var arr = [45, 74, 58, 72, 21];
var sum = 0;

for (var num of arr) {
    sum += num;
}

console.log(sum / arr.length);


// 12. Napisati program koji za dati niz objekata: 

// var capitals = [
// { country: 'Italy', city: 'Rome' },
// { country: 'Netherlands', city: 'Amsterdam' },
// { country: 'Belgium', city: 'Brussels' },
// { country: 'Denmark', city: 'Copenhagen' },
// { country: 'Finland', city: 'Helsinki' },
// ];
//
// ispisuje sledeće: 
//     The capital of Italy is Rome  
//     The capital of Luxembourg is Luxembourg  
//     The capital of Belgium is Brussels
//     The capital of Denmark is Copenhagen
//     The capital of Finland is Helsinki
// Koristiti for-of petlju.

var capitals = [
    {country: 'Italy', city: 'Rome'},
    {country: 'Netherlands', city: 'Amsterdam'},
    {country: 'Belgium', city: 'Brussels'},
    {country: 'Denmark', city: 'Copenhagen'},
    {country: 'Finland', city: 'Helsinki'},
];

for (var capital of capitals) {
    console.log('The capital of ' + capital.country + ' is ' + capital.city + '.');
}


// 13. Napraviti prazan niz u promenljivoj prirodniBrojevi. U ovaj niz ubaciti prvih 100 prirodnih brojeva pomoću for petlje. Ispisati u konzoli sadržaj niza na kraju

var prirodniBrojevi = [];

for (var i = 1; i <= 100; i++) {
    prirodniBrojevi.push(i);
}
console.log(prirodniBrojevi);


// 14. Napraviti dva prazna niza, parni i neparni. Koristeći jednu for petlju, postaviti sve parne brojeve od 1 do 100 u niz parni, i sve neparne brojeve od 1 do 100 u niz neparni. Ispisati sadržaj nizova

var parni = [];
var neparni = [];

for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        parni.push(i);
    } else {
        neparni.push(i);
    }
}

console.log(parni);
console.log(neparni);

// Napraviti na drugi nacin prethodni zadatak tako da se brojevi ispisu jedan ispod drugog

for (var i = 1; i < 100; i+=2) { 
    console.log(i);
}
for (var i = 2; i <= 100; i+=2) { 
      console.log(i);
}

// 15. Napisati program koji pravi i ispisuje niz svih brojeva u intervalu od broja a do broja b

var interval = [];
var start = 34;
var end = 99;

for (var i = start; i <= end; i++) {
    interval.push(i);
}

console.log(interval);


// 16. Napisati program koji za dati niz arr i broj num proverava da li se taj broj nalazi u nizu. Ispisati 'Broj se nalazi u nizu' ako je pronađen, ili 'Broj se ne nalazi u nizu' ako nije

var arr = [19, 49, 10, 4, 93, 57];
var num = 10;
var numFound = false;

for (var element of arr) {
    if (element === num) {
        numFound = true;
        break; 
    }
}

if (numFound) {
    console.log('Broj se nalazi u nizu.');
} else {
    console.log('Broj se ne nalazi u nizu.');
}

// ako zelimo da izborojimo koliko puta se neki broj nalazi u nizu

var arr = [19, 49, 10, 4, 93, 57, 10];
var num = 10
counter = 0;

for (var element of arr) {
    if (element === num) {
        counter++;
    }
}

console.log(counter);

// 17. Napisati program koji nalazi i ispisuje najveći element proizvoljnog niza brojeva

var arr = [19, 49, 10, 4, 93, 57];
var maximum = arr[0];

for (var element of arr) {
    if (element > maximum) {
        maximum = element;
    }
}

console.log(maximum);


// 18. Napraviti dva niza, a i b, sa jednakim brojem elemenata tipa number. Proći kroz oba niza paralelno for petljom i ispisivati zbir elemenata nizova a i b. Dakle, ispisati zbir prvog elementa niza a sa prvim elementom niza b, zbir drugog a sa drugim iz b itd.

var a = [4, 6, 9, 0, 1, 3, 8];
var b = [21, 53, 12, 74, 88, 2, 5];

for (var i = 0; i < a.length; i++) {
    console.log(a[i] + b[i]);
}

// ispisati zbir unazad

for (var i = a.length -1;  i >=0 ; i--) {
    console.log(a[i] + b[i]);
}

// 19. Napraviti dva niza, a i b, koji sadrže po 10 stringova. Pomoću for petlje napraviti objekat c koji koristi elemente niza a kao ključeve, i elemente niza b kao vrednosti. Ispisati objekat c u konzoli

var a = ['Rome', 'Amsterdam', 'Brussels', 'Copenhagen', 'Helsinki', 'Athens', 'London', 'Moscow', 'Washington DC', 'Madrid'];
var b = ['Italy', 'Netherlands', 'Belgium', 'Denmark', 'Finland', 'Greece', 'UK', 'Russia', 'US', 'Spain'];
var c = {};

for (var i = 0; i < a.length; i++) {
    c[a[i]] = b[i];
}

console.log(c);


// 20. Napraviti promenljivu meseci i dodeliti joj vrednost niza objekata koji kao property-e sadrži ime meseca i broj dana u tom mesecu ([ { mesec: 'Januar', brojDana: 31 }, { mesec: 'Februar', brojDana: 28 }, ... ]). Prolazeći kroz ovaj niz, ispisati sve moguće datume u godini (dakle '1. Januar', '2. Januar'… '31. Januar', '1. Februar', '2. Februar'…)

var meseci = [
    {ime: 'Januar', brojDana: 31},
    {ime: 'Februar', brojDana: 28},
    {ime: 'Mart', brojDana: 31},
    {ime: 'April', brojDana: 30},
    {ime: 'Maj', brojDana: 31},
    {ime: 'Jun', brojDana: 30},
    {ime: 'Jul', brojDana: 31},
    {ime: 'Avgust', brojDana: 31},
    {ime: 'Septembar', brojDana: 30},
    {ime: 'Oktobar', brojDana: 31},
    {ime: 'Novembar', brojDana: 30},
    {ime: 'Decembar', brojDana: 31}
];

for (var el of meseci) {
    for (var i = 1; i <= el.brojDana; i++) {
        console.log(i + '. ' + el.ime);
    }
}
