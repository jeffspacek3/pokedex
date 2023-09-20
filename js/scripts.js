let pokemonRepository = (function () {
pokemonList = [
    {
        name: 'Bulbasaur',
        type: ['Grass', 'Poison'],
        height: 23
    },
    {
        name: 'Charmander',
        type: ['Fire'],
        height: 15
    },
    {
        name: 'Pikachu',
        type: ['Electric'],
        height: 8 
    },
] ;
  
function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      pokemonList.push(pokemon); }
    
else {
      console.log("pokemon is not correct");
    }
  }

  function getAll() {
    return pokemoneList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
} );
  