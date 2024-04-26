"use strict";// interprété en mode strict le code
//mdp associer à l'id password dans le html
let passwordInput = document.getElementById("password");
function validatePassword(){

    let passwordError = document.getElementById("mdpError");
    // expression régulière pour vérifier la présence d'au moins une majuscule. Une minuscule et un caractère spécial.


    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{12,}$/; //gére de quoi doit être composé le mdp

    if(passwordRegex.test(passwordInput.value) && passwordInput.value.length >= 12) { // condition if qui vérifie si la taille du mdp est supérieur ou égale à 12minimum
        passwordError.textContent = ""; //si oui ok
    } else {  //si non message d'erreur qui explique l'erreur
        passwordError.textContent = "Le mot de passe doit contenir au moins une majuscule, une minuscule et un caractére spécial, et faire au moins 12 caractères de long.";
    }
}

passwordInput.addEventListener("input",validatePassword);    //événement qui s'active au input du mot de passe avec la fonction validatepassword

//

//variable associer à des id pour les appeller dans le html
let prenomInput = document.getElementById("pseudo");   //variable prenom   
let mailInput = document.getElementById("mail");  //variable mail
let selecteInput = document.getElementById("sel"); //variable selecte


//
//variable associer à un id pour les appeller dans le html
let submit = document.querySelector("#soumettre");


function alerte(){     //fonction qui vérifie qque tout les élèments du formulaire soit remplis

    if(passwordInput.value.length >= 12 && prenomInput.value.length && mailInput.value.length >= 1)  {
        alert("Formulaire Complet"); //message qui s'active quand les conditions sont respecter
    } else {
        alert("Incomplet"); //message qui s'active quand les conditions ne sont pas respecter
    }



    
}

submit.addEventListener("click",alerte);  //la fonction alerte s'active à l'évenement click quand la personne fini le formulaire en cliquant sur le bouton soumettre





