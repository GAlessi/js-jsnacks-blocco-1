var student = {
    'nome': 'Gabriele',
    'cognome': 'Alessi',
    'età': 18
}


function es1() {
    for ( var key in student)
    console.log(student[key]);
}


function init() {
    es1();
}


$(document).ready(init);
