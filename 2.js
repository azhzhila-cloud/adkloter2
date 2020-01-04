function ValidateMail(mail) {
    valid = /^[0-9]\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.match(valid)) {
        console.log("Email Valid");
        return true;
    } else {
        console.log("Email Invalid");
        return false;
    }
}
ValidateMail("123azhzhila@gmail.com");

function ValidatePassword(password) {
    if (password.length == 9) {
        // true
        let pwRegex = /[[0-9]{2}*[a-z]{5}*[|~`!@#$%^&*()_+?.,<=>-]{2}]/gi;
        if (!password.match(pwRegex)) {
            // pesan error
            let bkMsg = "username harus kombinasi huruf besar dan huruf kecil";
            alert(bkMsg);
            console.log(bkMsg);
        } else {
            console.log("Password Valid");
            return true;
        }
    }
}
ValidatePassword("00asdfg][]");