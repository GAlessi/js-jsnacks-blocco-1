var student = {
    'nome': 'Gabriele',
    'cognome': 'Alessi',
    'età': 18
};


function es1() {
    for ( var key in student)
        console.log(student[key]);

}


var arrEs2 = [
    {'nome': 'Gabriele', 'cognome': 'Alessi'},
    {'nome': 'Alessando', 'cognome': 'Venti'},
    {'nome': 'Lorenzo', 'cognome': 'Antonelli'}
];

function es2() {
    for (var i = 0; i < arrEs2.length; i++) {
        var studente = arr[i];
        for (var key in studente) {
            var value = studente[key];
            console.log(key, value);
        }
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
    console.log(arrEs3);
}

function init() {
    // es1();
    // es2();
    es3();
}


$(document).ready(init);
