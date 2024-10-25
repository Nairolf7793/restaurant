const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputEmail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ValidatePasswordInput");
const btnValidation = document.getElementById("BtnValidationInscription");


inputNom.addEventListener("keyup", validateForm); //keyup fonctionne dès qu'on relache la touche du clavier, but est de passer le form en validé
inputPrenom.addEventListener("keyup", validateForm); 
inputEmail.addEventListener("keyup", validateForm); 
inputPassword.addEventListener("keyup", validateForm); 
inputValidationPassword.addEventListener("keyup", validateForm); 

function validateForm(){ //fonction pour valider les champs du formulaire, = verifier qu'il soit bien rempli
    const nomOk = validateRequired(inputNom);
    const prenomOk = validateRequired(inputPrenom);
    const mailOk = validateMail(inputEmail);

    //activer le bouton inscription si les champs sont tous ok
    if(nomOk && prenomOk && mailOk){
        btnValidation.disabled = false;
    }
    else{
        btnValidation.disabled = true;
    }
}

//creation fonction pour vérifier si mon input mail respecte le format du mail
function validateMail(input){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //regex = caractère du mail
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