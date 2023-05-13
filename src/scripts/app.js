"use scrict";
import { gsap } from "gsap";

//INSCRIPTION/CONNEXION **********************************

let inscriptionBtn = document.querySelector('.start__el--inscription');
let inscriptionSection = document.querySelector('.form--inscription');

let connexionBtn = document.querySelector('.start__el--connexion');
let connexionSection = document.querySelector('.form--connexion');

let startElement = document.querySelector('.start__el');

inscriptionBtn.addEventListener("click", (e) => {
    inscriptionSection.classList.remove('off');
    startElement.classList.add("off");
});

connexionBtn.addEventListener("click", (e) => {
    connexionSection.classList.remove('off');
    startElement.classList.add("off");
});

var etatMail = 0;
var etatMdp = 0;
var formBtn = document.querySelector('.form__el--btn');

var mailInscriptInput = document.querySelector('.form__el--mail');

function emailValid(){
    let emailValidation=document.form.user_mail.value;
    let emailWithAro = emailValidation.indexOf("@");
    if (emailWithAro < 1){      
        etatMail = 0;
        formBtn.classList.add('inactive');
    }else{
        etatMail = 1;
    } 
}

function mdpValid(){

}

mailInscriptInput.addEventListener("change", (e) =>{
    emailValid();
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

let mdpConnexInput = document.querySelector('.form__el--mdp');
mdpConnexInput.addEventListener("input", (e) =>{
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

let perso = document.getElementById('nom_perso');
let prenom = localStorage.getItem("firstname");
let nom = localStorage.getItem("name");

perso.innerHTML = prenom + " " + nom;


//ENVOIE FORMULAIRE*********************************************

let persoSection = document.querySelector('.perso');
let startSection = document.querySelector('.start');
let homeSection = document.querySelector('.home');
let nav = document.querySelector('.nav');

formBtn.addEventListener("click", (e) =>{
    startSection.classList.add("off");
    persoSection.classList.remove('off');
});

inscriptionSection.addEventListener('submit', (e)=>{
    e.preventDefault();
});

connexionSection.addEventListener('submit', (e)=>{
    e.preventDefault();
});

NextBtn.addEventListener('click', (e) =>{
    startSection.classList.add("off");
    persoSection.classList.add('off');
    nav.classList.remove('off');
    homeSection.classList.remove('off');
});


//MENU*********************************************************

let iconArrow = document.querySelector('.icon--arrow');

let compteurAidBtn = 0;
iconArrow.addEventListener('click', (e) =>{
    console.log(compteurAidBtn + "click");
    if(compteurAidBtn == 0){
        gsap.to('.icon--arrow', {rotation:180});
        gsap.to('.sousmenu', {display:"block"});
        gsap.fromTo('.sousmenu' , {x: -200}, {x:0});
        compteurAidBtn = 1;

    }else if(compteurAidBtn == 1){
        gsap.to('.icon--arrow', {rotation:0});
        gsap.to('.sousmenu', {display:"none"});
        gsap.fromTo('.sousmenu' , {x:0}, {x: -400});
        compteurAidBtn = 0;
    }
});

//HOME**************************************************************

let homeBtn = document.getElementById('homebtn');

homeBtn.addEventListener('click', (e) =>{
    homeSection.classList.remove('off');
    choixSection.classList.add('off');
});


//PROFIL*************************************************************

let profilBtn = document.getElementById('profilbtn');
let compteurProfil = 0;
profilBtn.addEventListener('click', (e) =>{
    if(compteurProfil == 0){
        gsap.to('.menu', {display:"block"});
        gsap.fromTo('.menu' , {x: 480}, {x:0});
        compteurProfil = 1;

    }else if(compteurProfil == 1){
        gsap.to('.menu', {display:"none"});
        gsap.fromTo('.menu' , {x:0}, {x:480});
        compteurProfil = 0;
    }
});

//CHOIX*******************************************************************
let exoProgBtn = document.querySelector('.home__el--prog');
let choixSection = document.querySelector('.choix');

exoProgBtn.addEventListener('click', (e) =>{
    homeSection.classList.add('off');
    choixSection.classList.remove('off');
});

//VALEURS*****************************************************************
var checkboxBtn = document.querySelectorAll('.checkbox__el');
let servicesSection = document.querySelector('.valeurs--services');
let minutesSection = document.querySelector('.valeurs--minutes');
let choixBtn = document.querySelector('.choix__el--btn');

for(let i = 0 ; i < checkboxBtn.length ; i++){
    checkboxBtn[i].addEventListener(('change'), (e) =>{
        if(e.currentTarget.checked === true){
            for (let i = 0 ; i < checkboxBtn.length ; i++){
                checkboxBtn[i].checked = false;
            }
            e.currentTarget.checked = true;
        }else if(!e.currentTarget.checked === true){
            e.currentTarget.checked = false;
        }
        if(checkboxBtn[0].checked === true){
            servicesSection.classList.remove('visible');
            minutesSection.classList.add('visible');
        }else if(checkboxBtn[1].checked === true){
            servicesSection.classList.add('visible');
            minutesSection.classList.remove('visible');
        }else if(checkboxBtn[0].checked === false && checkboxBtn[1].checked === false){
            servicesSection.classList.remove('visible');
            minutesSection.classList.remove('visible');
            choixBtn.classList.add('inactive');
        }
        if(checkboxBtn[0].checked === true || checkboxBtn[1].checked === true){
            choixBtn.classList.remove('inactive');
        }
    });
}


let tempsValue = document.getElementById('nbr_temps');
let tempsValueAff = document.querySelector('.valeurs__el--minutes');
tempsValueAff.innerHTML = document.getElementById('nbr_temps').value;

tempsValue.addEventListener('input', (e) =>{
    let tempsValueEnter = document.getElementById('nbr_temps').value;
    tempsValueAff.innerHTML = tempsValueEnter;
})

let servicesValue = document.getElementById('nbr_service');
let servicesValueAff = document.querySelector('.valeurs__el--services');
servicesValueAff.innerHTML = document.getElementById('nbr_service').value;

servicesValue.addEventListener('input', (e) =>{
    let servicesValueEnter = document.getElementById('nbr_service').value;
    servicesValueAff.innerHTML = servicesValueEnter;
})


//SESSION*****************************************************************************

let zoneActive = document.querySelectorAll('.zone--active');
let zoneInactive = document.querySelectorAll('.zone--inactive');
let paraSection = document.querySelector('.choix__el--para');
let terrainSection =document.querySelector('.choix__el--terrain');

for (let z = 0; z < zoneInactive.length; z++){
    zoneInactive[z].addEventListener('click', (e) =>{
        for (let i = 0 ; i < zoneActive.length ; i++){
            zoneActive[i].classList.add('off');
        }
        if(!zoneInactive[z].classList.contains('off')){
            zoneActive[z].classList.remove('off');
            paraSection.classList.remove('off');
            terrainSection.classList.add('jump');
        }
    });
    zoneActive[z].addEventListener('click', (e)=>{
        if(!zoneActive[z].classList.contains('off')){
            zoneActive[z].classList.add('off');
            paraSection.classList.add('off');
            terrainSection.classList.remove('jump');
        }
    })
}

//ROTATION ECRAN**************************************************************

let body = document.querySelector('body');
let rotationSection = document.querySelector('.rotation');
let compteurChoixBtn = 0;
let iconRotationVLandscape = document.querySelector('.rotation--vlandscape');
let iconRotationVPortrait = document.querySelector('.rotation--vportrait');

window.addEventListener("orientationchange", (e)=>{
    if ('orientation' in window) {
        var orientation = window.orientation;
        if (orientation === 0 && compteurChoixBtn === 0) {
            iconRotationVPortrait.classList.add('off');
            rotationSection.classList.add('off');
          console.log("Orientation portrait");
          console.log(compteurChoixBtn);
        }else if (orientation === 90 && compteurChoixBtn === 0) {
            console.log("Orientation paysage + btn non check");
            iconRotationVPortrait.classList.remove('off');
            rotationSection.classList.remove('off');
            console.log(compteurChoixBtn);
        }else if (orientation === 90 && compteurChoixBtn === 1) {
          console.log("Orientation paysage");
          rotationSection.classList.add('off');
          console.log(compteurChoixBtn);
        }else if (orientation === 0 && compteurChoixBtn === 1) {
            console.log("Orientation portrait avec btn check");
            iconRotationVPortrait.classList.add('off');
            rotationSection.classList.remove('off');
            console.log(compteurChoixBtn);
        }
      }
});

choixBtn.addEventListener('click', (e)=>{
  choixSection.classList.add('off');
  nav.classList.add('off');
  rotationSection.classList.remove('off');
  iconRotationVLandscape.classList.remove('off');
  body.classList.add('landscape');
  compteurChoixBtn++;
});
