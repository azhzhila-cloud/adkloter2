function palindrome(str) {
    /* remove number*/
    var removeChar = str.replace(/[0-9]/ig, "");

    /* reverse removeChar for comparison*/
    var checkPalindrome = removeChar.split('').reverse().join('');

    /* Check to see if str is a Palindrome*/
    if (removeChar === checkPalindrome) {
        return true;
        //mengandung huruf kapital
        let kapital = /[[A-Z]{1}][a-z]/;
        if (checkPalindrome.match(kapital)) {
            let Msg = "Palindrom Kapital";
            alert(Msg);
            console.log(Msg);
        }
        let kecil = /[a-z]/;
        if (checkPalindrome.match(kecil)) {
            let Msgkecil = "Palindrom Kecil";
            alert(Msgkecil);
            console.log(Msgkecil);
        }
        let mix = /[[A-Z]{1,9}]*[[a-z]{1,9}]/;
        if (checkPalindrome.match(mix)) {
            let Msgmix = "Palindrom Mix";
            alert(Msgmix);
            console.log(Msgmix);
        } else {
            let Msgelse = "Palindrom Murni";
            alert(Msgelse);
            console.log(Msgelse);
        }
    } else {
        let bukan = "Bukan Kata Palindrom";
        alert(bukan);
        console.log(bukan);
    }


}