"use strict"; //intérprete le code en stricte

fetch('https://hp-api.lainocs.fr/', {     // sa permet de récupérer des données depuis l'api vers mon site web
   headers: {
       'Origin': 'https://hp-api.lainocs.fr/'
   }
   })
   .then(response => response.json())

function fetchAllCharacters() {   //fonction pour récupérer les personnages (informations) présente sur lelien
  return fetch('https://hp-api.lainocs.fr/characters/')
      .then((response) => response.json());
}

async function displayCharacters() {   //fait pareil que au dessus mais sépare pour chaque personnages
  try {
      const characters = await fetchAllCharacters();

      characters.forEach(character => {
          displayCharacter(character);
      });
  } catch (error) {
      console.error('Erreur lors de la récupération des personnages :', error);
  }
}

async function displayCharacter(character) {    //permet d'afficher le html pour chaque personnages
  const characterElement = document.createElement('div');
  characterElement.classList.add('col-md-4');
  characterElement.innerHTML = `
      <div class="card">
          <div class="wrapper">
              <img src="${character.image}" alt="${character.slug}" class="cover-image" />
          </div>
          <div class="title_container container">
              <h4 class="title">${character.name}</h4>
              <p class="title-sub">${character.house}</p>
              <h1 class="title-sub">${character.id}</h1>
          </div>
          <img src="${character.image}" alt="${character.slug}" class="character" />
      </div>
  `;

  document.getElementById("character").appendChild(characterElement);
}

displayCharacters();  //affiche la fonction


//

let body = document.querySelector("body");  // variable définit avec le body   
let h2 = document.querySelector("h2"); // variable définit avec le h2  
let bt = document.getElementById("bouton"); // variable définit avec le id boutons 

let b = 0;  //initialise une variable à 0
function changeCouleurBlanc(){  //fonction qui s'occupe de mettre en noir le body si il est en blanc et inversement si il est en noir
    if(b==0){
        body.style.background="white";
        b=1;
        h2.style.color="black";
    }else{
        body.style.background="black";
        b=0;
        h2.style.color="white";
    }
}
bt.addEventListener("click",changeCouleurBlanc); //évènement qui s'active quand on clique sur le bouton
console.log(bt);
