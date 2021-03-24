var student = {
    'nome': 'Gabriele',
    'cognome': 'Alessi',
    'età': 18
};


function es1() {
    for ( var key in student)
        console.log("Esercizio 1: ", student[key]);
}

var arrEs2 = [
    {'nome': 'Gabriele', 'cognome': 'Alessi', 'età': 20},
    {'nome': 'Alessando', 'cognome': 'Venti', 'età': 20},
    {'nome': 'Lorenzo', 'cognome': 'Antonelli', 'età': 20}
];

// function es2() {
//     for (var i = 0; i < arrEs2.length; i++) {
//         var studente = arr[i];
//         for (var key in studente) {
//             var value = studente[key];
//             console.log(key, value);
//         }
//     }
// }
function es2() {
    for (var key in arrEs2) {
        console.log("Esercizio 2: ", arrEs2[key]['nome'] + ' ' + arrEs2[key]['cognome']);
    }
}

var arrEs3 = [
    {'nome': 'Gabriele', 'cognome': 'Alessi', 'età': '31'},
    {'nome': 'Alessando', 'cognome': 'Venti', 'età': '28'},
    {'nome': 'Lorenzo', 'cognome': 'Antonelli', 'età': '30'}
];

function es3() {
    var newStudent = {
        "nome": prompt("nome"),
        "cognome": prompt("cognome"),
        "età": prompt("età")
    }
    arrEs3.push(newStudent);
    console.log("Esercizio 3: ", arrEs3);
}

function init() {
    es1();
    es2();
    es3();
}


$(document).ready(init);
