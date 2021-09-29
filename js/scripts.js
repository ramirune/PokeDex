let pokemonRepository = (function () {
  //create pokemon list
  let pokemonList = [
    {name: "Kakuna", height: 0.6, type: ["bug", "poison"]},
    {name: "Gloom", height: 0.8, type: ["grass", "poison"]},
    {name: "Golem", height: 1.4, type: ["rock","ground"]}
  ];

  //Add item function to the pokemonList array
  function add(pokemon) {
    if(
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "type" in pokemon
    ){
      pokemonList.push(pokemon);
    }else{
      console.log("pokemon is not correct");
    }
  }
  //return item function
  function getAll() {
    return pokemonList;
  }


  function addListItem(pokemon){
    let pokeList = document.querySelector(".pokemon-list"); //select pokemon-list class from html
    let listItem = document.createElement("li"); // create list items

    let button = document.createElement("button"); // create button
    button.innerText = pokemon.name; //add pokemon name from the pokemonList to each button
    button.classList.add("button1"); //add button styles
    button.addEventListener('click', function(){ //add event to button
      showDetails(pokemon);
    });

    listItem.appendChild(button);
    pokeList.appendChild(listItem);
  }

  //create function to show clicked pokemon's details
  function showDetails(pokemon) {
    console.log(pokemon);
  }

  //return values
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();

//add a pokemon on the list
console.log(pokemonRepository.getAll());
pokemonRepository.add({name:"Seal", height:1.1, type:["water"]});
console.log(pokemonRepository.getAll());

// create forEach function to printout the list
pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
});
