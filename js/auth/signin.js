const mailInput = document.getElementById ("EmailInput");
const passwordInput = document.getElementById ("PasswordInput");
const btnSignin = document.getElementById ("BtnSignin");

btnSignin.addEventListener ("click", checkCredentials);

function checkCredentials(){
    if(mailInput.value == "test@mail.fr" && passwordInput.value == "azerty"){
        window.location.replace("/");
    }
    else {
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}