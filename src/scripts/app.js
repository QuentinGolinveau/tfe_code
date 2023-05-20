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
    if (mdpInscriptInput.value.length >= 5 && etatMail == 1){
        formBtn.classList.remove('inactive');
    }else{
        formBtn.classList.add('inactive');
    };
});

let mdpConnexInput = document.querySelector('.form__el--mdp');
mdpConnexInput.addEventListener("input", (e) =>{
    console.log(etatMail);
    if (mdpInscriptInput.value.length >= 5 && etatMail == 1){
        formBtn.classList.remove('inactive');
    }else{
        formBtn.classList.add('inactive');
    };
});




//PERSONNALISATION********************************************

let NextBtn = document.getElementById('next_btn');
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

var btnInscriptionValid = document.getElementById('inscription_btn');
var btnConnexionValid = document.getElementById('connexion_btn');

function start(){
    if(!formBtn.classList.contains('inactive')){
        startSection.classList.add("off");
        persoSection.classList.remove('off');
    }
}

btnInscriptionValid.addEventListener('click', (e) => {
    start();
});

btnConnexionValid.addEventListener('click', (e) => {
    startSection.classList.add("off");
    homeSection.classList.remove('off');
    nav.classList.remove('off');
});

inscriptionSection.addEventListener('submit', (e)=>{
    e.preventDefault();
});

connexionSection.addEventListener('submit', (e)=>{
    e.preventDefault();
});

NextBtn.addEventListener('click', (e) =>{
    if(!NextBtn.classList.contains('inactive')){
        startSection.classList.add("off");
        persoSection.classList.add('off');
        nav.classList.remove('off');
        homeSection.classList.remove('off');
    }
});


//MENU*********************************************************

function hiddeStat(){
    var sessionStatsDiv = document.querySelectorAll('.statistique');
    for ( var s = 0; s < sessionStatsDiv.length; s++){
        sessionStatsDiv[s].classList.add('off');
    }
}


let profilBtn = document.getElementById('profilbtn');
let compteurProfil = 0;
profilBtn.addEventListener('click', (e) =>{
    if(compteurProfil == 0){
        openMenu();
        document.body.style.overflow = "hidden";
    }else if(compteurProfil == 1){
        closeMenu();
        document.body.style.overflow = "auto";
    }
});

function openMenu(){
    gsap.to('.menu', {display:"block"});
    gsap.fromTo('.menu' , {x: 480}, {x:0});
    compteurProfil = 1;
}

function closeMenu(){
    gsap.to('.menu', {display:"none"});
    gsap.fromTo('.menu' , {x:0}, {x:480});
    compteurProfil = 0;
}

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

var historiqueBtn = document.getElementById('his');
let historiqueSection = document.querySelector('.historique');

historiqueBtn.addEventListener('click', (e)=>{
    historiqueSection.classList.remove('off');
    homeSection.classList.add('off');
    closeMenu();
    hiddeStat();
    document.body.style.overflow = "auto";
});

//HOME**************************************************************

let homeBtn = document.getElementById('homebtn');

homeBtn.addEventListener('click', (e) =>{
    homeSection.classList.remove('off');
    choixSection.classList.add('off');
    closeMenu();
    hiddeStat();
    document.body.style.overflow = "hidden"; 
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
        //   console.log("Orientation portrait");
        //   console.log(compteurChoixBtn);
        }else if (orientation === 90 && compteurChoixBtn === 0) {
            console.log("Orientation paysage + btn non check");
            iconRotationVPortrait.classList.remove('off');
            rotationSection.classList.remove('off');
            // console.log(compteurChoixBtn);
        }else if (orientation === 90 && compteurChoixBtn === 1) {
        //   console.log("Orientation paysage");
          rotationSection.classList.add('off');
        //   console.log(compteurChoixBtn);
        }else if (orientation === 0 && compteurChoixBtn === 1) {
            console.log("Orientation portrait avec btn check");
            iconRotationVPortrait.classList.add('off');
            rotationSection.classList.remove('off');
            // console.log(compteurChoixBtn);
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

    //TIMER***************************************************************************
    let timerValue = document.getElementById('nbr_temps');
    const departMinutes = timerValue.value;
    let temps = departMinutes * 60;
    const timerElement = document.querySelector(".session__el--time");
    let intervalId;
    
    function startTimer() {
      intervalId = setInterval(function() {
        let minutes = parseInt(temps / 60, 10);
        let secondes = parseInt(temps % 60, 10);
    
        function ajoutZero(temporalite){
          if (temporalite < 10 ){
            temporalite = "0" + temporalite
          }else{
            temporalite = temporalite
          }
          return temporalite
        }
    
        minutes = ajoutZero(minutes);
        secondes = ajoutZero(secondes);
    
        timerElement.innerText = `${minutes}:${secondes}`;
        if (temps <= 0 ){
          temps = 0;
        }else{
          temps = temps - 1
        }
      }, 1000);
    }
    
    function pauseTimer() {
      clearInterval(intervalId);
    }
    
    var pauseSection = document.querySelector('.session__el--pause');
    var pauseBtn = document.getElementById("pause");
    pauseBtn.addEventListener("click", (e) => {
        pauseTimer();
        pauseSection.classList.remove('off');
    });
    var playBtn = document.getElementById("play");
    playBtn.addEventListener("click", (e) => {
        startTimer();
        pauseSection.classList.add('off');
    });

    startTimer();
    //NBR SERVICE**********************************************************************

    var nbrServiceValue = document.getElementById('nbr_service');
    var serviceElement = document.querySelector(".session__el--services");

    serviceElement.innerText = "0" + "/" + nbrServiceValue.value;
});

//STOP SESSION*************************************************************************
var stopBtn = document.getElementById('stop');
var ouiBtn = document.getElementById('oui');
var nonBtn = document.getElementById('non');
var stopSection = document.querySelector(".session__el--stop");

stopBtn.addEventListener('click', (e)=>{
    stopSection.classList.remove('off');
    pauseTimer();
})

nonBtn.addEventListener('click', (e)=>{
    stopSection.classList.add('off');
    startTimer();
});

ouiBtn.addEventListener('click', (e)=>{
    stopSection.classList.add('off');
});



//JSON**************************************************************************

fetch("../assets/json/data_ace.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    for (var i = 0; i < data.length; i++) {
        var listeSession= document.createElement('div');
        listeSession.classList.add('sessionliste__el');
        listeSession.setAttribute('data-date', data[i].Date)
        listeSession.setAttribute('data-cote', data[i].Cote)
        listeSession.setAttribute('data-zone', data[i].Zone)
        var attributs = ["Date", "Temps", "Nombre de services", /*"Pourcentage"*/];
        for (var a = 0; a < attributs.length; a++) {
            var listeSessionElement = document.createElement('p');
            listeSessionElement.classList.add("sessionliste__el--texte");
            listeSessionElement.classList.add("sessionliste__el--border");
            listeSessionElement.innerText = data[i][attributs[a]];
            listeSession.appendChild(listeSessionElement);
        }
        let imageUrl = data[i].Cible;
        let imgElement = document.createElement("img");
        imgElement.classList.add("sessionliste__el--image");
        imgElement.src = imageUrl;
        listeSession.appendChild(imgElement);
        console.log(data[i].ID);
        console.log(listeSession)
        let historiqueSessionSection = document.querySelector('.historique__el--session');
        listeSession.addEventListener('click', (e) =>{
            var dateSession = (e.currentTarget.getAttribute('data-date'));
            var coteSession = (e.currentTarget.getAttribute('data-cote'));
            var zoneSession = (e.currentTarget.getAttribute('data-zone'));
            var sessionStatsDiv = document.querySelectorAll('.statistique');
            for (var c = 0; c < sessionStatsDiv.length; c++){
                var coteStats = sessionStatsDiv[c].getAttribute('data-cote');
                var zoneStats = sessionStatsDiv[c].getAttribute('data-zone');
                if(coteSession == coteStats && zoneSession == zoneStats){
                    for (var i = 0; i < data.length; i++) {
                        if(dateSession == data[i].Date){
                            historiqueSection.classList.add('off');;
                            document.body.style.overflowY = "visible";
                            sessionStatsDiv[c].classList.remove('off');
                            var statSession = sessionStatsDiv[c].querySelectorAll('.chiffre__el--texte');
                            var dateStats = sessionStatsDiv[c].querySelector('.date_stat');
                            dateStats.textContent = data[i].Date;
                            var titreStats = sessionStatsDiv[c].querySelector('.titre_stat');
                            titreStats.textContent = data[i].Titre;
                            for (var s = 0; s < statSession.length; s++){
                                var attributStats = ["Temps","Nombre de services", "Vmoy" , "Pourcentage", "Vmax"];
                                statSession[s].innerText = data[i][attributStats[s]];
                            }
                        }
                    }
                }
            }
        });
        historiqueSessionSection.appendChild(listeSession);
    }
    var compteurFiltre = 0;
    function filtreHistorique(filtre, compteurFiltre){
        var dataTab = [...data];
        console.log(dataTab);
        console.log(filtre +" est dans la fonction")
        if(filtre){
            if(filtre == "chrono"){
                dataTab.sort((chronoA, chronoB) => {
                    //console.log(chronoA, chronoB)
                    if(chronoA.Temps < chronoB.Temps){
                        return -1;
                    }
                    if (chronoA.Temps > chronoB.Temps){
                        return 1;
                    }
                    return 0;
                });
            };
            if(filtre == "pourcent"){
                dataTab.sort((pourcentA, pourcentB) => {
                    if(pourcentA.Pourcentage < pourcentB.Pourcentage){
                        return -1;
                    }
                    if (pourcentA.Pourcentage > pourcentB.Pourcentage){
                        return 1;
                    }
                    return 0;
                });
            };
            if(filtre == "cible"){
                dataTab.sort((cibleA, cibleB) => {
                    if(cibleA.Cible < cibleB.Cible){
                        return -1;
                    }
                    if (cibleA.Cible > cibleB.Cible){
                        return 1;
                    }
                    return 0;
                });
            };
            if(!compteurFiltre == 0){
                dataTab.reverse();
                console.log(compteurFiltre);
            }
            for (let i = 0; i < dataTab.length; i++){
                var listeSession= document.createElement('div');
                listeSession.classList.add('sessionliste__el');

                var attributs = ["Date", "Temps", "Nombre de services", /*"Pourcentage"*/];
                for (var a = 0; a < attributs.length; a++) {
                    var listeSessionElement = document.createElement('p');
                    listeSessionElement.classList.add("sessionliste__el--texte");
                    listeSessionElement.classList.add("sessionliste__el--border");
                    listeSessionElement.innerText = dataTab[i][attributs[a]];
                    listeSession.appendChild(listeSessionElement);
                }
                let imageUrl = data[i].Cible;
                let imgElement = document.createElement("img");
                imgElement.classList.add("sessionliste__el--image");
                imgElement.src = imageUrl;
                listeSession.appendChild(imgElement);
                let historiqueSessionSection = document.querySelector('.historique__el--session');
                historiqueSessionSection.appendChild(listeSession);
            }
        };
        return dataTab;
    }

    var filtreArrow = document.querySelectorAll('.historique__el--arrow');
    var filtreBtn = document.querySelectorAll('.historique__el--icon');
    var lastFiltreBtn;
    var compteurArrow = 0;
    for (let b = 0; b < filtreBtn.length; b++){
        filtreBtn[b].addEventListener('click', (e)=>{
            console.log(lastFiltreBtn);
            var filtre = e.currentTarget.getAttribute('data-filtre');
            console.log(filtre);
            let historiqueSessionSection = document.querySelector('.historique__el--session');
            historiqueSessionSection.innerHTML = '';
            filtreArrow[b-1].classList.remove('off');
            filtreHistorique(filtre, compteurFiltre);
            if (lastFiltreBtn === filtreBtn[b] && compteurArrow == 0){
                gsap.to('.historique__el--arrow', {rotation:180});
                compteurFiltre = 0;
                compteurArrow = 1;
                console.log("c le mm");
            }else if(lastFiltreBtn === filtreBtn[b] && compteurArrow == 1){
                filtreArrow[b-1].classList.add('off');
                compteurArrow = 0;
                compteurFiltre = 0;
            }
            else if(lastFiltreBtn !== filtreBtn[b]){
                for (let b = 0; b < filtreArrow.length; b++){
                    filtreArrow[b].classList.add('off');
                }
                filtreArrow[b-1].classList.remove('off');
                gsap.to('.historique__el--arrow', {rotation:0});
                compteurFiltre = 1;
                console.log("RATER");
            }
            lastFiltreBtn = filtreBtn[b];
            console.log(lastFiltreBtn);
        });
    }
  })
        









