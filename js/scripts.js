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
    }
]

for (let i=0; i < pokemonList.length; i++){
    if (pokemonList[i].height <19 && pokemonList[i].height >10 ){
        document.write(pokemonList[i].name + "(" + pokemonList[i].height + ")" + "is an average fighter");
    }else if (pokemonList[i].height <9){
        document.write(pokemonList[i].name + "(" + pokemonList[i].height + ")" + "is an small fighter");
    }else if (pokemonList[i].height >20){
        document.write(pokemonList[i].name + "(" + pokemonList[i].height + ")" + "is a tall fighter");
    }
}

for (let i=0; i < pokemonList.length; i++){
    if (pokemonList[i].height <20 && pokemonList[i].height ){
        document.write(pokemonList[i].name + "(" + pokemonList[i].height + ")" + "wow he is a giant");
    }
}
