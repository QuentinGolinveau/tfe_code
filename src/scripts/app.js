"use-scrict";

//INSCRIPTION/CONNEXION **********************************

let inscriptionBtn = document.querySelector('.start__el--inscription');
let inscriptionSection = document.querySelector('.form--inscription');

let connexionBtn = document.querySelector('.start__el--connexion');
let connexionSection = document.querySelector('.form--connexion');

let startElement = document.querySelector('.start__el');

inscriptionBtn.addEventListener("click", (e) => {
    inscriptionSection.classList.remove('hidden');
    startElement.classList.add("hidden");
});

connexionBtn.addEventListener("click", (e) => {
    connexionSection.classList.remove('hidden');
    startElement.classList.add("hidden");
});

let etatMail = 0;
let etatMdp = 0;
let formBtn = document.querySelector('.form__el--btn');

let mailInscriptInput = document.querySelector('.form__el--mail');
mailInscriptInput.addEventListener("change", (e) =>{
    let emailValidation=document.form.user_mail.value;
    let emailWithAro = emailValidation.indexOf("@");
    if (emailWithAro < 1){      
        etatMail = 0;
        formBtn.classList.add('inactive');
        console.log(etatMail + "c nul");
    }else{
        etatMail = 1;
    }  
});

let mdpInscriptInput = document.querySelector('.form__el--mdp');


mdpInscriptInput.addEventListener("input", (e) =>{
    console.log(etatMail);
    if (mdpInscriptInput.value.length >= 6 && etatMail == 1){
        formBtn.classList.remove('inactive');
    }else{
        formBtn.classList.add('inactive');
    };
});

//PERSONNALISATION********************************************

let NextBtn = document.querySelector('.perso .form__el--btn');
let nameInput = document.querySelector('.form__el--name');
let firstInput = document.querySelector('.form__el--firstname');

firstInput.addEventListener("input", (e) =>{
    if (firstInput.value.length >= 1 && nameInput.value.length >= 1){
        NextBtn.classList.remove('inactive');
    }else{
        NextBtn.classList.add('inactive');
    };
});


//TEST LOCALSTORAGE*******************************************
//CONNEXION*******

let userMailValue = document.getElementById('mailinscript');

if(localStorage.getItem('userMailValue')){
    autoConnexion();
}else{
    setConnexion();
}

function setConnexion(){
    localStorage.setItem('mailinscript', userMailValue.value);
}

function autoConnexion(){
    let userMailValueConnexion = localStorage.getItem('mailinscript');
    console.log(userMailValueConnexion)
}

userMailValue.addEventListener('change', setConnexion);

//PERSONNALISATION*******

let userNameValue = document.getElementById('name');

function setName(){
    localStorage.setItem('name', userNameValue.value);
}

userNameValue.addEventListener('change', setName);

let userFirstnameValue = document.getElementById('firstname');

function setFirstname(){
    localStorage.setItem('firstname', userFirstnameValue.value);
}

userFirstnameValue.addEventListener('change', setFirstname);


//ENVOIE FORMULAIRE*********************************************

let persoSection = document.querySelector('.perso');
let startSection = document.querySelector('.start');
let homeSection = document.querySelector('.home');

formBtn.addEventListener("click", (e) =>{
    startSection.classList.add("hidden");
    persoSection.classList.remove('hidden');
});


NextBtn.addEventListener('click', (e) =>{
    startSection.classList.add("hidden");
    persoSection.classList.add('hidden');
    homeSection.classList.remove('hidden');
})