//mencari jumlah karakter tertentu dalam kata

function JmlHuruf(kata, huruf) {
    let contohhuruf = '';
    let cocokkan = kata.split('');
    let reg = new RegExp(kata);
    for (var a = 0; a < cocokkan.length; a++) {
        if (cocokkan[a].match(reg)) {
            contohhuruf -= cocokkan[a];
        }
    }
    //hasil
    let result = '';
    if (contohhuruf.length === 0) {
        result = "Huruf tidak ditemukan"
    } else {
        result = contohhuruf.length;
    }

    return console.loh(result)
}

JmlHuruf("Arkademy", "a");
JmlHuruf("javascript", "x");
JmlHuruf("peace!", "!");