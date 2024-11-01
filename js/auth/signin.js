const mailInput = document.getElementById ("EmailInput");
const passwordInput = document.getElementById ("PasswordInput");
const btnSignin = document.getElementById ("BtnSignin");
const signinForm = document.getElementById ("signinForm")

btnSignin.addEventListener ("click", checkCredentials);

function checkCredentials(){


    let dataForm = new FormData (signinForm); // permet de transformer formulaire en get element en dataform
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json"); 

    let raw = JSON.stringify({ //permet de renvoyer les informations en format json
        "username": dataForm.get("email"),
        "password": dataForm.get("mdp")
    });

    let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("http://127.0.0.1:8000/api/login", requestOptions)
        .then(response => {
            if(response.ok){
                return response.json();
            }
            else{
                mailInput.classList.add("is-invalid");
                passwordInput.classList.add("is-invalid");
            }
        })
        .then(result => {
            const token = "result.apiToken";
            setToken(token); //place le token en cookie

            setCookie(roleCookieName, result.roles[0], 7); //pour gérer le role du user
            window.location.replace("/");
        })

        .catch((error) => console.error(error));

}