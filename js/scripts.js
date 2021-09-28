let pokemonRepository = (function () {
  //create pokemon list
  let pokemonList = [
    {name: "kakuna", height: 0.6, type: ["bug", "poison"]},
    {name: "gloom", height: 0.8, type: ["grass", "poison"]},
    {name: "golem", height: 1.4, type: ["rock","ground"]}
  ];

  //Add item function to the pokemonList array
  function add(pokemon) {
    pokemonList.push(pokemon);
  }
 //return item function
  function getAll() {
    return pokemonList;
  }
//return values
  return {
    add: add,
    getAll: getAll
  };
})();

// create forEach function to printout he list
function myPokemonList(list) {
  document.write(list.name + ' Height: ' + list.height);
  if (list.height > 1) {
    document.write('-Wow,that\'s BIG!'); //create highlight when the pokemon size is bigger than 1
  }
  document.write('<br>');
}
pokemonRepository.getAll().forEach(myPokemonList);
