function add(arrZ) {
    var pesoTotale = 0;
    for (var i = 0; i < arrZ.length; i++) {
        var zucchina = arrZ[i];
        var pesoZucchina = zucchina['peso'];
        pesoTotale += pesoZucchina;
    }
    return(pesoTotale);
}


function zucchine() {
    // Crea 10 oggetti che rappresentano una zucchina.
    //     Dividi in due array separati le zucchine che misurano
    //     meno o più di 15cm.
    //     Infine stampa separatamente quanto pesano i due gruppi
    //     di zucchine.
    var arr = [
        {"varietà": "gialla", "lunghezza":"35", "peso": 100},
        {"varietà": "verde", "lunghezza":"30", "peso": 200},
        {"varietà": "gialla", "lunghezza":"38", "peso": 150},
        {"varietà": "verde", "lunghezza":"10", "peso": 300},
        {"varietà": "gialla", "lunghezza":"13", "peso": 800},
        {"varietà": "bianca", "lunghezza":"11", "peso": 120},
        {"varietà": "verde", "lunghezza":"30", "peso": 170},
        {"varietà": "gialla", "lunghezza":"33", "peso": 300},
        {"varietà": "bianca", "lunghezza":"14", "peso": 222},
        {"varietà": "Rocco", "lunghezza":"33", "peso": 1000}
    ];

    var zucchineCorte = [];
    var zucchineLunghe = [];

    for (var i = 0; i < arr.length; i++) {
        var zucchina = arr[i];
        var lungZucchina = zucchina['lunghezza'];
        if (lungZucchina < 15) {
            zucchineCorte.push(zucchina);
        }else {
            zucchineLunghe.push(zucchina);
        }
    }
    console.log("esercizio 1");
    console.log(zucchineCorte, zucchineLunghe);
    console.log(add(zucchineCorte));
    console.log(add(zucchineLunghe));
}

function stringReverse() {
    // Scrivi una funzione che accetti una stringa come
    // argomento e la ritorni girata (es. Ciao -> oaiC)
    var str = "Supercalifragilisticexpialidocious";
    var reverseStr1 = "";
    for (var i=str.length -1;i>=0;i--) {
        var letter = str[i];
        reverseStr1 += letter;
    }
    var reverseStr2 = "";
    for (var i=0;i<str.length;i++) {
        var letter = str[i];
        reverseStr2 = letter + reverseStr2;
    }
    console.log('');
    console.log('esercizio 2');
    console.log(str);
    console.log("Versione 1: " + reverseStr1);
    console.log("Versione 2: " + reverseStr2);
}


function fusion() {
    // Scrivi una funzione che fonda due array (aventi lo stesso
        // numero di elementi) prendendo alternativamente gli
        // elementi da uno e dall'altro.
    var arrNumeri = [1, 2, 3, 4, 5];
    var arrLettere = ['a', 'b', 'c', 'd', 'e'];
    var arrFusion = [];

    for (var i = 0; i < arrNumeri.length; i++) {
        var numero = arrNumeri[i];
        var lettera = arrLettere[i];
        arrFusion.push(lettera, numero)
    }
    console.log('');
    console.log('esercizio 3');
    console.log('Primo Array: ' + arrNumeri);
    console.log('Secondo Array: ' + arrLettere);
    console.log('Array Fusion: ' + arrFusion);
}


function splitter(min, max, array) {
    var selectedArr = [];
    for (var i = min; i <= max; i++) {
        selectedArr.push(array[i]);
    }
    return(selectedArr);
}

function selArrPart() {
//     Scrivi una funzione che accetti tre argomenti:
// un array e due numeri ("a" più piccolo di "b" e "b" grande al
// massimo quanto il numero di elementi dell'array).
// La funzione ritornerà un nuovo array con i valori che
// hanno la posizione compresa tra "a" e "b.
var minimo = 3;
var massimo = 6;
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log('');
console.log('esercizio 4:');
console.log(splitter(minimo, massimo, arr));

}

function init() {
    zucchine();
    stringReverse();
    fusion();
    selArrPart();
}

$(document).ready(init);
