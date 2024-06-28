// pokemons.forEach(item => {
//    const pokemonContainer = document.createElement('div');
//    pokemonContainer.className = 'pokemon-container';
 
//    const pokemonId = document.createElement('p');
//    pokemonId.textContent = item.id;
//    pokemonId.className = 'id';
 
//    const pokemonImg = document.createElement('img');
//    pokemonImg.src = item.img;
//    pokemonImg.className = 'img';
 
//    const pokemonName = document.createElement('p');
//    pokemonName.textContent = item.name;
//    pokemonName.className = 'name';
 
//    const pokemonType = document.createElement('p');
//    pokemonType.textContent = item.type;
//    pokemonType.className = 'type';
 
//    const pokemonSpawn = document.createElement('p');
//    pokemonSpawn.textContent = item.spawn_time;
//    pokemonSpawn.className = 'spawn';
 
//    const pokemonWeight = document.createElement('p');
//    pokemonWeight.textContent = item.weight;
//    pokemonWeight.className = 'weight';
 
//    const pokemonWeaknesses = document.createElement('p');
//    pokemonWeaknesses.textContent = item.weaknesses;
//    pokemonWeaknesses.className = 'weaknesses';
 
//    pokemonContainer.append(pokemonId, pokemonName, pokemonImg, pokemonType, pokemonSpawn, pokemonWeight, pokemonWeaknesses);
//    document.body.append(pokemonContainer);
   
//  });

//  let userInput = document.querySelector('.input')
//  const pokeList = document.querySelector(".list");


//  function renderPokemon(poke,node){
//   node.innerHTML = ""
//      poke.forEach(item => {
//          let newItem = document.createElement("li");
//          let pokeName = document.createElement("h2");
//          let pokeImg = document.createElement("img");
//          pokeImg.src = item.img;
//          pokeName.textContent = item.name;
 
//          newItem.append(pokeName,pokeImg)
//          node.append(newItem)
         
//      })
//  }
//  renderPokemon(pokemons,pokeList)

//  userInput.addEventListener("submit", function(said){
//    said.preventDefault();
//    let searchInput = userInput.value.toLowerCase();
//    let filteredPokemons = userInput.filter(pokemon => pokemon.name.toLowerCase().includes(searchInput));
//    renderPokemon(filteredPokemons, pokeList);
//  }
// )

// Sample pokemons array

function renderPokemon(pokemons) {
  const container = document.querySelector('ul');
  container.innerHTML = ''; // Clear previous list

  pokemons.forEach(item => {
    const pokemonContainer = document.createElement('div');
    pokemonContainer.className = 'pokemon-container';

    const pokemonId = document.createElement('p');
    pokemonId.textContent = item.id;
    pokemonId.className = 'id';

    const pokemonImg = document.createElement('img');
    pokemonImg.src = item.img;
    pokemonImg.className = 'img';

    const pokemonName = document.createElement('p');
    pokemonName.textContent = item.name;
    pokemonName.className = 'name';

    const pokemonType = document.createElement('p');
    pokemonType.textContent = item.type;
    pokemonType.className = 'type';

    const pokemonSpawn = document.createElement('p');
    pokemonSpawn.textContent = item.spawn_time;
    pokemonSpawn.className = 'spawn';

    const pokemonWeight = document.createElement('p');
    pokemonWeight.textContent = item.weight;
    pokemonWeight.className = 'weight';

    const pokemonWeaknesses = document.createElement('p');
    pokemonWeaknesses.textContent = item.weaknesses;
    pokemonWeaknesses.className = 'weaknesses';

    pokemonContainer.append(pokemonId, pokemonName, pokemonImg, pokemonType, pokemonSpawn, pokemonWeight, pokemonWeaknesses);
    container.append(pokemonContainer);
  });
}

// Initial display
renderPokemon(pokemons);

let userInput = document.querySelector('.input');
userInput.addEventListener('input', function() {
  const searchInput = userInput.value.toLowerCase();
  const filteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchInput));
  renderPokemon(filteredPokemons);
});
