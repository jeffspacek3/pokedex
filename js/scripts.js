let pokemonRepository = (function () {
    pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            console.log(details)

//---details of the item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) { console.error(e); });
    } function add(pokemon) {
        if (typeof pokemon === "object") {
            pokemonList.push(pokemon);
        } else {
            console.log("pokemon is not correct");
        }
    } function getAll() {
        return pokemonList;
    } function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        button.addEventListener('click', function () { loadDetails(pokemon) })
        listpokemon.appendChild(button); pokemonList.appendChild(listpokemon);
    }
    
    function loadList() {
        return fetch(apiUrl).then(function (response) { return response.json(); }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = { name: item.name, detailsUrl: item.url };
                add(pokemon);
            });

        }).catch(function (e) { console.error(e); })
    }

    //---return what the iife is calling on
    return {
        add: add,
        getAll: getAll,
        loadList: loadList,
        loadDetails: loadDetails,
        addListItem: addListItem
    };
})();

pokemonRepository.loadList().then(function () {
    
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});

//---modal
function showModal() {
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.classList.add('is-visible');
}

document.querySelector('#show-modal').addEventListener('click', () => {
  showModal();
});
