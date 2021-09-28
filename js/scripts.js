//create pokemon list
let pokemonList = [
  {name: "kakuna", height: 0.6, type: ["bug", "poison"]},
  {name: "gloom", height: 0.8, type: ["grass", "poison"]},
  {name: "golem", height: 1.4, type: ["rock","ground"]}
];

// printArrayDetails by using for loop
// function printArrayDetails(){
//   for (let i=0; i<pokemonList.length; i++){
//     document.write(pokemonList[i].name+ "(Height:"+pokemonList[i].height+")");
//     if (pokemonList[i].height>1){
//       document.write("-Wow,that\'s BIG!"); //add code to highlight big pokemon in the list
//     }
//     document.write("<br>"); //new line
//   }
// }

//forEach function to printout he list
function myPokemonList(list) {
  document.write(list.name + ' Height: ' + list.height);
  if (list.height > 1) {
    document.write('-Wow,that\'s BIG!'); //create highlight when the pokemon size is bigger than 1
  }
  document.write('<br>');
}

pokemonList.forEach(myPokemonList);
