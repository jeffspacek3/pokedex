let pokemonList = [];
pokemonList = [
    {
        name: 'Bulbasaur',
        type: ['Grass', 'Poison'],
        (height: 23)
    },
    {
        name: 'Charmander',
        type: ['Fire'],
        (height: 15)
    },
    {
        name: 'Pikachu',
        type: ['Electric'],
        (height: 9)
    }
]

for (let i=0; i < pokemonList.length; i++){
    if (pokemonList[i].height <19 && pokemonList[i].age >10){
        document.write(pokemonList[i].height + "is an average fighter");
    }else if (pokemonList[i].height <9){
        document.write(pokemonList[i].height + "is an small fighter");
    }else {
        document.write(pokemonList[i].height + "is a tall fighter");
    }
}




    
