// check if the registration password is longer than 8 characters
function check() {
    let password = document.getElementById("password").value;
    
    if(password.length < 8) {
        document.querySelector(".info").innerHTML = "Sua senha deve ter no mínimo 8 caracteres";
        return false;
    } else {
        return true;
    }
}

// check if the login password is longer than 8 characters
function checkLogin() {
    let password = document.getElementById("password").value;

    if(password.length < 8 ) {
        document.querySelector(".info").innerHTML = "Sua senha deve ter no mínimo 8 caracteres";
        return false;
    } else {
        return true;
    }
}