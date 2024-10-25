alert("toto");

const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputEmail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ValidatePasswordInput");

inputNom.addEventListener("keyup", validateForm); //keyup fonctionne dès qu'on relache la touche du clavier, but est de passer le form en validé
inputPrenom.addEventListener("keyup", validateForm); 

function validateForm(){ //fonction pour valider les champs du formulaire, = verifier qu'il soit bien rempli
    validateRequired(inputNom);
    validateRequired(inputPrenom);
    validateRequired(inputEmail);
    validateRequired(inputPassword);
    validateRequired(inputValidationPassword);
}

function validateRequired(input){
    if(input.value !=""){ //champs formulaire ok
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
    }
    else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
    }
}