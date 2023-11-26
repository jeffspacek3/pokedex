let pokemonRepository = (function () {
  pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/";

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        console.log(details);

        //---details of the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
        showModal(item);
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function add(pokemon) {
    if (typeof pokemon === "object") {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return pokemonList;
  }
  
  function addListItem(pokemon) {
let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.setAttribute("data-toggle","modal")
    button.setAttribute("data-target", "#exampleModal")
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    button.addEventListener("click", function () {
      loadDetails(pokemon);
    });
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = { name: item.name, detailsUrl: item.url };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  //---return what the iife is calling on
  return {
    add: add,
    getAll: getAll,
    loadList: loadList,
    loadDetails: loadDetails,
    addListItem: addListItem,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

//---modal

function showModal(pokemon) {
  let modalContainer = document.querySelector('.modal-body');

  // Clear all existing modal content
  modalContainer.innerHTML = "";

  let modal = document.createElement("div");
 

  // Add the new modal content
  let closeButtonElement = document.createElement("button");
  closeButtonElement.classList.add("modal-close");
  closeButtonElement.innerText = "Close";
  closeButtonElement.addEventListener("click", hideModal);
  let titleElement = document.createElement("h1");
  titleElement.innerText = pokemon.name;

  let contentElement = document.createElement("p");
  contentElement.innerText = "Height:" + pokemon.height;

  let imageElement = document.createElement("img");
  imageElement.src = pokemon.imageUrl;

  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(contentElement);
  modal.appendChild(imageElement);
  modalContainer.appendChild(modal);
  modalContainer.classList.add("is-visible");
}

document.querySelector("#show-modal").addEventListener("click", () => {
  showModal("", "This is the modal content!");
});

//---closing the modal utilizing the 'close' button---//
function hideModal() {
  let modalContainer = document.querySelector("#modal-container");
  modalContainer.classList.remove("is-visible");
}

//---closing the model via ESC key
window.addEventListener("keydown", (e) => {
  let modalContainer = document.querySelector("#modal-container");
  if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
    hideModal();
  }
});

//---note

//---dialog---//
function showDialog(title, text) {
  showModal(title, text);

  // We have defined modalContainer here
  let modalContainer = document.querySelector("#modal-container");

  // We want to add a confirm and cancel button to the modal
  let modal = modalContainer.querySelector(".modal");

  let confirmButton = document.createElement("button");
  confirmButton.classList.add("modal-confirm");
  confirmButton.innerText = "Confirm";

  let cancelButton = document.createElement("button");
  cancelButton.classList.add("modal-cancel");
  cancelButton.innerText = "Cancel";

  modal.appendChild(confirmButton);
  modal.appendChild(cancelButton);

  // We want to focus the confirmButton so that the user can simply press Enter
  confirmButton.focus();
}

document.querySelector("#show-dialog").addEventListener("click", () => {
  showDialog("Confirm action", "Are you sure you want to do this?");
});


//--notes---//

