// Použij výpis do konzole prohlížeče pomocí console.log('text')
// Konzoli otevřeš v Chrome stiskem F12 (na Windows) nebo Command-Option-I (na Macu)


// První příklad - vypiš vzestupně čísla od 0 do 10

console.log('První příklad - vypsat čísla od 0 do 10');
//TADY NAPIS CYKLUS

let i = 0;
while (i <= 10) {
    console.log('while ' + i)
    i++;
}

// Druhý příklad - zkopíruj předchozí příklad
// a vyzkoušej, jaký je rozdíl mezi <= a <
// v podmínce uvnitř cyklu

console.log('Druhý příklad - rozdíl mezi <= a <');

//TADY NAPIS CYKLUS

let j = 0;
while (j < 10) {
    console.log('while ' + j)
    j++;
}


// Třetí příklad - vypiš sestupně čísla od 10 do 0
console.log('Třetí příklad - sestupná řada 10 - 0');

//TADY NAPIS CYKLUS

let k = 10;
while (k >= 0) {
    console.log('while ' + k)
    k--;
}

