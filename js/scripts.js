//create pokemon list
let pokemonList = [
  {name: "kakuna", height: 0.6, type: ["bug", "poison"]},
  {name: "gloom", height: 0.8, type: ["grass", "poison"]},
  {name: "golem", height: 1.4, type: ["rock","ground"]}
];

for (let i=0; i<pokemonList.length; i++){
  document.write(pokemonList[i].name+ "(Height:"+pokemonList[i].height+")");
  if (pokemonList[i].height>1){
    document.write("-Wow,that\'s BIG!"); //add code to highlight big pokemon in the list
  }
  document.write("<br>"); //new line
}
