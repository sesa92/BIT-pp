// 1. Napisati funkciju koja oduzima dva broja. Ulazni parametri su brojevi a i b, i funkcija vraća njihovu razliku. Pozvati funkciju sa proizvoljnim vrednostima i ispisati njen rezultat

function subtract(a, b) {
    return a - b;
}

console.log(subtract(7, 3));


// 2. Napisati funkciju koja množi prva dva argumenta i od tog rezultata oduzima vrednost trećeg argumenta, zatim vraća rezultat. Ulazni parametri su brojevi a, b i c. Pozvati funkciju sa proizvoljnim vrednostima i ispisati rezultat koji vraća

function multiplyAndSubtract(a, b, c) {
    return a * b - c;
}

console.log(multiplyAndSubtract(2, 3, 5));


// 3. Napisati funkciju koja prima tri numerička parametra: a, b i c. U slučaju da je parametar a veći od 0, funkcija vraća zbir b i c, u suprotnom vraća razliku b i c. Pozvati funkciju sa proizvoljnim vrednostima i ispisati rezultat koji vraća

function addOrSubtract(a, b, c) {
    if (a > 0) {
        return b + c;
    }
        return b - c;
}

console.log(addOrSubtract(2, 3, 5));
console.log(addOrSubtract(-1, 3, 5));

// 4. Napisati funkciju koja vraća najmanji element u nizu brojeva. Niz je ulazni parametar funkcije. Pozvati funkciju sa proizvoljnim vrednostima i ispisati rezultat koji vraća

function findMin(arr) {
    var min = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

console.log(findMin([4, 6, 8, 0, 5, 2, -1, 4, 21]));


// 5. Napisati funkciju koja prima kao parametar niz brojeva i vraća sumu svih elemenata. Koristiti for-of petlju. Pozvati funkciju sa proizvoljnim vrednostima i ispisati sumu elemenata niza koju vraća funkcija

function sumArray(array) {
    var sum = 0;

    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

console.log(sumArray([4, 6, 8, 0, 5, 2, 4, 21]));


// 6. Napisati funkciju koja računa proizvod svih elemenata proizvoljnog niza, koji je ulazni parametar funkcije. Koristiti for-of petlju. Pozvati funkciju sa proizvoljnim vrednostima i ispisati proizvod elemenata niza koji vraća funkcija

function multiplyArray(array) {
    var product = 1;

    for (var i = 0; i < array.length; i++) {
        product *= array[i];
    }

    return product;
}

console.log(multiplyArray([4, 6, 8, 5, 2, 4, 21]));


// 7. Napisati funkciju koja vraća niz svih neparnih brojeva u intervalu od broja a do broja b, koji su ulazni parametri funkcije.

function oddNumbersInRange(a, b) {
    var array = [];

    for (var i = a; i <= b; i++) {
        if (i % 2 !== 0) {
            array[array.length] = i;
        }
    }

    return array;
}

console.log(oddNumbersInRange (2,67));

// 8. Napisati funkciju koja računa srednju vrednost elemenata proizvoljnog niza koji je ulazni parametar funkcije. Koristiti for-of petlju. Pozvati funkciju sa proizvoljnim vrednostima i ispisati vrednost koju vraća funkcija.

function arrayAverage(array) {
    var sum = 0;

    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum / array.length;
}

console.log(arrayAverage([3, 43, 56, 32, 12]));

// 9.Napisati funkciju koja proverava da li su svi elementi datog niza brojeva u datom opsegu. Ulazni parametri funkcije su niz, donja granica i gornja granica. Funkcija treba da vrati boolean vrednost. Pozvati funkciju sa nizom elemenata poređanim po veličini, od najmanjeg do najvećeg.

// ako je sortiran niz

function isSortedArrayInRange(sortedArray, lowerBound, upperBound) {
    var firstElement = sortedArray[0];
    var lastElement = sortedArray[sortedArray.length - 1];
    return firstElement >= lowerBound && lastElement <= upperBound;
}

console.log(isSortedArrayInRange([1, 2, 3, 4, 5], 1, 10));


// 10.Napisati funkciju koja proverava da li su svi elementi datog niza brojeva u datom opsegu. Elementi niza nisu poređani po veličini. Ulazni parametri funkcije su niz, donja granica i gornja granica.


// primer 1

function isArrayInRange(array, lowerBound, upperBound) {

    for (var i = 0; i < array.length; i++) {
        if (array[i] < lowerBound || array[i] > upperBound) {
            return false;
        }
    }
    return true;
}

console.log(isArrayInRange([2, 3, 5, 1, 4], 1, 7));


// primer 2

function inRange(niz, start, end) {
    var temp = 0;
  
    for (var i = 0; i < niz.length; i++) {
        for (var j = 0; j <niz.length; j++) {
            if (niz[i] < niz[j]) {
                temp = niz[j];
                niz[j] = niz[i];
                niz[i] = temp;
            } 
        }
    } for (var i = 0; i < niz.length; i++) {
        var num1 = niz[0];
        var num2 = niz[niz.length - 1];
        if (num1 >= start && num2 <= end) {
          return true;
        } 
          return false;
      }
  }
    
  console.log(inRange([2, 5, 4, 3, 1], 1, 4));


// 11. Napisati funkciju koja vraća niz sa prvih 10 parnih brojeva većih ili jednakih broju n, koji je ulazni parametar funkcije.


// primer 1

function first10EvenNumbersFromN(n) {
    var array = [];
    var count = 0;

    var i = n;
    while (count < 10) {
        if (i % 2 === 0) {
            array[array.length] = i;
            count++;
        }
        i++;
    }
    return array;
}

console.log(first10EvenNumbersFromN(10));

// primer 2

function nekiNiz(n){
    var i = 0;
    var niz = [];

    for (var counter = 0; counter < 10; i++) {
      if (i % 2 === 0 && i >= n) {
        niz[niz.length] = i;
        counter++
      }
  }
  return niz;
  }
  console.log(nekiNiz(10));

// 12.Napisati funkciju koja za dati niz array i dati broj a, koji predstavljaju ulazne parametre funkcije, vraća vrednost koliko puta se broj a nalazi u datom nizu array. Ispisati vrednost koju vraća funkcija.

function countOfNumberInArray(array, number) {
    var count = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] === number) {
            count++;
        }
    }
    return count;
}

console.log(countOfNumberInArray([3, 15, 73, 84, 106, 54, 27, 15, 34, 15, 15], 15));


// 13. Napisati funkciju koja za dati niz array i dati broj a koji predstavljaju ulazne parametre funkcije, vraća vrednost koliko je elemenata niza array deljivo sa brojem a. Ispisati vrednost koju vraća funkcija.

function countOfDivisibleElementsInArray(array, number) {
    var count = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] % number === 0) {
            count++;
        }
    }
    return count;
}

console.log(countOfDivisibleElementsInArray([3, 15, 73, 84, 106, 54, 27, 15, 34, 15, 15], 3));

// 14.Napisati funkciju koja prima niz brojeva kao parametar i vraća indeks najmanjeg elementa u nizu. Npr. ako se prosledi [1, 2, 6, -1, 5] funkcija treba da vrati broj 3 (-1 je najmanji element, nalazi se na 4. mestu, a to je indeks 3).

function indexOfMinimum(array) {
    var min = array[0];
    var minIndex = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            minIndex = i;
        }
    }

    return minIndex;
}

console.log(indexOfMinimum([15, 4, 75, 82, -7, 15, 105, -10, 44, 72, -8]));


// 15. Napisati funkciju koja prima dvodimenzionalni niz po želji (niz čiji su elementi nizovi brojeva) i ispisuje sve pod-elemente, odnosno brojeve.

function printMatrix(matrix) {
    for (var array of matrix) {
        for (var element of array) {
            console.log(element);
        }
    }
}

printMatrix([[1, 2, 3, 4, 5],[6, 7, 8, 9, 10]]);

function matrixPrint(matrix) {

    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            console.log(matrix[i][j]);
        }
    }
}

matrixPrint([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]);


// 16.Napisati funkciju koja prima dvodimenzionalni niz po želji (niz čiji su elementi nizovi brojeva) i vraća sumu svih pod-elemenata.

function sumMatrix(matrix) {
    var sum = 0;

    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
        }
    }
    return sum;
}
console.log(sumMatrix([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]));

// 17. Napisati funkciju koja kao parametar prima dvodimenzionalni niz brojeva, i jednodimenzionalni niz stringova koji opisuju kretanje kroz dvodimenzionalni niz, čiji elementi mogu da imaju vrednosti 'up', 'down', 'left' i 'right'. Kreće se od pozicije u dvodimenzionalnom nizu [0][0], koji predstavlja element gore levo. Proći kroz niz sa stringovima i kretati se kroz dvodimenzionalni niz u skladu sa trenutnim stringom (ako naiđemo na 'down' krećemo se nadole itd). Nakon što prođe kroz niz stringova, funkcija treba da vrati element niza na kom se nalazi. Primer:Ako se prosledi dvodimenzionalni niz:
    /*    [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
        ]
    
i niz stringova 

['down', 'down', 'right', 'down']

funkcija treba da vrati 14 (kreće se od 1, ide korak nadole na 5, još jedan korak nadole na 9, zatim desno na 10, i ponovo dole na 14.

Nije neophodno voditi računa o “izlaženju” van granica niza, pretpostaviti da će niz stringova sa koracima uvek biti formiran tako da se ostane unutar granica.
*/

function moveInMatrix(matrix, moveArray) {
    var row = 0;
    var column = 0;

    for (var i = 0; i < moveArray.length; i++) {
        if (moveArray[i] === 'up') {
            row -= 1;
        } else if (moveArray[i] === 'down') {
            row += 1;
        } else if (moveArray[i] === 'left') {
            column -= 1;
        } else if (moveArray[i] === 'right') {
            column += 1;
        }
    }

    return matrix[row][column];
}

console.log(moveInMatrix( [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16] ] , ['down', 'down', 'right', 'down'] ));

// 18.Napisati drugu verziju funkcije iz prethodnog zadatka, koja radi i sa kretanjem van granica dvodimenzionalnog niza (npr. ako smo trenutno na levoj ivici i sledeći korak je 'left', prebaciti poziciju na suprotnu stranu, tako da smo sada na desnoj ivici).

function moveInMatrix(matrix, moveArray) {
    var row = 0;
    var column = 0;

    for (var i = 0; i < moveArray.length; i++) {
        if (moveArray[i] === 'up') {
            row -= 1;
            if (row < 0) {
                row = matrix.length - 1;
            }
        } else if (moveArray[i] === 'down') {
            row += 1;
            if (row >= matrix.length) {
                row = 0;
            }
        } else if (moveArray[i] === 'left') {
            column -= 1;
            if (column < 0) {
                column = matrix[row].length - 1;
            }
        } else if (moveArray[i] === 'right') {
            column += 1;
            if (column >= matrix[row].length) {
                column = 0;
            }
        }
    }

    return matrix[row][column];
}

console.log(moveInMatrix([ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16] ] , ['down', 'down', 'right', 'down'] ));

// 19. Napisati funkciju prima niz i vraća novi niz u kom su elementi parametra poređani po veličini, na sledeći način:
//      o	Funkcija počinje sa praznim nizom
//      o	Pronalazi indeks najmanjeg elementa (14. zadatak)
//      o	Ubacuje taj element na kraj niza koji će vratiti kao rezultat
//      o	Izbacuje taj element iz originalnog niza pomoću splice
//      o	Ponoviti sve dok ima elemenata u originalnom nizu

function indexOfMinimum(array) {
    var min = array[0];
    var minIndex = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            minIndex = i;
        }
    }

    return minIndex;
}

function sortArray(unsortedArray) {
    var sortedArray = [];

    while (unsortedArray.length > 0) {
        var minimumIndex = indexOfMinimum(unsortedArray);
        sortedArray.push(unsortedArray[minimumIndex]);
        unsortedArray.splice(minimumIndex, 1);
    }
    return sortedArray;
}

console.log(sortArray([7, 6, 1, 2, 5, 4, 8, 10, 3, 9]));


// 20.Napisati funkciju koja prihvata niz brojeva, i vraća niz od dva elementa koji su međusobno najbliži po vrednosti. Ako postoji više od jednog mogućeg rešenja prihvata se bilo koje. Nije potrebno pokrivati slučajeve koji uključuju nizove od jednog ili nijednog elementa.

// Primeri: za zadati niz [6, 10, 13, 18, 16, 3, 1] moguća rešenja su [18, 16] i [3, 1].
// Za zadati niz [5, 6, 1, 9, 5] jedino moguće rešenje je [5, 5].


function apsolutnaVrednost(n) {
    if (n < 0) {
        return -n;
    } else {
        return n;
    }
}

function closestElements(array) {
    var prviEl = array[0];
    var drugiEl = array[1];
    var minimalnaRazlika = apsolutnaVrednost(array[0] - array[1]);

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (i !== j && apsolutnaVrednost(array[i] - array[j]) < minimalnaRazlika) {
                minimalnaRazlika = apsolutnaVrednost(array[i] - array[j]);
                prviEl = array[i];
                drugiEl = array[j];
            }
        }
    } 

    return [prviEl, drugiEl];
}

console.log(closestElements ([6, 10, 13, 18, 16, 3, 25]));


// 21. Napisati funkciju koja prihvata dva niza brojeva, a1 i a2, i vraća treći niz, a3, iste dužine kao a2, čiji elementi predstavljaju broj puta koliko se svaki odgovarajući element a2 javlja u nizu a1. Drugim rečima, ako se prvi element niza a2 javlja četiri puta u nizu a1, prvi element a3 će biti 4. Nizovi a1 i a2 ne moraju biti iste dužine.
/*
    Primer: ako se proslede nizovi 

[4, 1, 5, 1, 6, 2, 7, 1]
    [4, 3, 2, 1]
    
    funkcija treba da vrati niz

    [1, 0, 1, 3]    (4 se u prvom nizu javlja jednom, 3 nijednom, 2 jednom i jedinica 3 puta) 

*/

function countsOfOccurences (array1, array2) {
    var countsArray = [];
    
    for (var i = 0; i < array2.length; i++) {
        var count = 0;
        for (var j = 0; j < array1.length; j++) {
            if (array1[j] === array2[i]) {
                count++;
            }
        }
        countsArray[countsArray.length] = count;
    }
    return countsArray;
}

console.log(countsOfOccurences([1, 2, 3, 4], [4, 5, 8, 4]));


// 22. Odrediti broj parnih elemenata sa neparnim indeksima

function brParNepInd (niz) {
    var broj = 0;

    for (var i = 0; i < niz.length; i++) {
        if (niz[i] % 2 === 0 && i % 2 != 0) {
            broj++;
        }
    }
    return broj;
}
console.log(brParNepInd([15, 4, 75, 82, -7, 15, 105, -10, 44, 72, -8]));

// 23. zbir parnih elemenata sa neparnim indeksima

function brParNepInd (niz) {
    var suma = 0;

    for (var i = 0; i < niz.length; i++) {
        if (niz[i] % 2 === 0 && i % 2 !== 0) {
            suma += niz[i];
        }
    }
    return suma;
}
console.log(brParNepInd([1, 12, 7, 9, 42, 2, 8, 4]));

// 24. zbir svih el sa neparnim indexom

function brParNepInd (niz) {
    var suma = 0;

    for (var i = 0; i < niz.length; i++) {
        if (i % 2 != 0) {
            suma += niz[i];
        }
    }
    return suma;
}
console.log(brParNepInd([1, 12, 7, 9, 42, 2, 8, 4]));