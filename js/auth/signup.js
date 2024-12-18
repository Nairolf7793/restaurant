const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputEmail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ValidatePasswordInput");
const btnValidation = document.getElementById("BtnValidationInscription");
const formInscription = document.getElementById("formulaireInscription"); // récupérer les données de dmon formulaire


inputNom.addEventListener("keyup", validateForm); //keyup fonctionne dès qu'on relache la touche du clavier, but est de passer le form en validé
inputPrenom.addEventListener("keyup", validateForm); 
inputEmail.addEventListener("keyup", validateForm); 
inputPassword.addEventListener("keyup", validateForm); 
inputValidationPassword.addEventListener("keyup", validateForm); 

btnValidation.addEventListener("click", InscrireUtilisateur);

function validateForm(){ //fonction pour valider les champs du formulaire, = verifier qu'il soit bien rempli
    const nomOk = validateRequired(inputNom);
    const prenomOk = validateRequired(inputPrenom);
    const mailOk = validateMail(inputEmail);
    const passwordOk = validatePassword(inputPassword);
    const passwordConfirmOk = validateConfirmationPassword(inputPassword, inputValidationPassword);

    //activer le bouton inscription si les champs sont tous ok
    if(nomOk && prenomOk && mailOk && passwordOk && passwordConfirmOk){
        btnValidation.disabled = false;
    }
    else{
        btnValidation.disabled = true;
    }
}

//creation fonction pour vérifier si mon input mail respecte le format du mail
function validateMail(input){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //regex = caractères speciaux du mail
    const mailUser = input.value;
    if(mailUser.match(emailRegex)){ //fonction match permet de vérifier que le regex est bien présent
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

// fonction pour confirmer / valider le mot de passe 

function validateConfirmationPassword(inputPwd, inputConfirmPwd){
    if(inputPwd.value == inputConfirmPwd.value){
        inputConfirmPwd.classList.add("is-valid");
        inputConfirmPwd.classList.remove("is-invalid");
        return true;
    }
    else{
        inputConfirmPwd.classList.add("is-invalid");
        inputConfirmPwd.classList.remove("is-valid");
        return false;
    }
}


//creation fonction pour validation password
function validatePassword(input){
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{12,}$/; //regex = caractères speciaux // 12 caractères = reco de la CNIL
    const passwordUser = input.value;
    if(passwordUser.match(passwordRegex)){ //fonction match permet de vérifier que le regex est bien présent
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateRequired(input){
    if(input.value !=""){ //champs formulaire ok
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

//fonction pour récuperer les elements du formulaire inscription

function InscrireUtilisateur(){

    let dataForm = new FormData(formInscription);
    let name = dataForm.get("name");

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json"); 

    let raw = JSON.stringify({ //permet de renvoyer les informations en format json
        "firstName": dataForm.get("nom"), 
        "lastName": dataForm.get("prenom"),
        "email": dataForm.get("email"),
        "password": dataForm.get("mdp")
    });

    let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("http://127.0.0.1:8000/api/registration", requestOptions)
        .then(response => {
            if(response.ok){
                return response.json();
            }
            else{
                alert("erreur d'inscription");
            }
        })
        .then(result => {
            alert("votre compte est bien crée");
            document.location.href="/signin";
        })

        .catch((error) => console.error(error));
    }