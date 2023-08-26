let pokemonList = [];
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
        height: 09
    }
]

for (let i=0; i < pokemonList.length; i++){
    if (pokemonList[i].height <19 && pokemonList[i].age >10){
        console.log(pokemonList[i].height + " is an average fighter");
    }else if (pokemonList[i].height <9){
        console.log(pokemonList[i].height + "is an small fighter");
    }else {
        console.log(pokemonList[i].height + "is a tall fighter");
    }
}




    
