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
        document.write(<p>pokemonList[i].name + "(" + pokemonList[i].height + ")" + "is an average fighter"</p>);
    }else if (pokemonList[i].height <9){
        document.write(<p>pokemonList[i].name + "(" + pokemonList[i].height + ")" + "is an small fighter"</p>);
    }else if (pokemonList[i].height >20){
        document.write(<p>pokemonList[i].name + "(" + pokemonList[i].height + ")" + "is a tall fighter"</p>);
    }
}

for (let i=0; i < pokemonList.length; i++){
    if (pokemonList[i].height >20 && pokemonList[i].height ){
        document.write(pokemonList[i].name + "wow thats big!");
    }
}
