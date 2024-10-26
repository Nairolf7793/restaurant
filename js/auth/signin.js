const mailInput = document.getElementById ("EmailInput");
const passwordInput = document.getElementById ("PasswordInput");
const btnSignin = document.getElementById ("BtnSignin");

btnSignin.addEventListener ("click", checkCredentials);

function checkCredentials(){
    if(mailInput.value == "test@mail.fr" && passwordInput.value == "azerty"){
        const token = "flsdhlfhdslfhvbfnxbjndxk!vbf";
        setToken(token); //place le token en cookie

        setCookie(roleCookieName, "admin", 7); //pour gérer le role du user

        window.location.replace("/");
    }
    else {
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}