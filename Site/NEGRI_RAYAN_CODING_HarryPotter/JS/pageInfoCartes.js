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
          <div class="title_container container">
              <h4 class="title">${character.name}</h4>
              <p class="title-sub">${character.house}</p>
              <h1 class="title-sub">${character.id}</h1>
          </div>  
  `;

  document.getElementById("character").appendChild(characterElement);
}

displayCharacters();  //affiche la fonction



