let pokemonRepository = (function () {
  //create pokemon list
  // let pokemonList = [
  //   {name: "Kakuna", height: 0.6, type: ["bug", "poison"]},
  //   {name: "Gloom", height: 0.8, type: ["grass", "poison"]},
  //   {name: "Golem", height: 1.4, type: ["rock","ground"]}
  // ];

  let pokemonList = []; //create an empty array for pokemonList
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150"; //url to fetch the data from API

  //Add item function to the pokemonList array
  function add(pokemon) {
    if(
      typeof pokemon === "object" &&
      "name" in pokemon
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
    let pokemonList = document.querySelector(".pokemon-list"); //select pokemon-list  from html
    let listItem = document.createElement("li"); // create list items
    listItem.classList.add("group-list-item", "col-xl-2", "col-lg-4", "col-md-6");

    let button = document.createElement("button"); // create button
    button.innerText = pokemon.name; //add pokemon name from the pokemonList to each button
    button.classList.add("btn", "btn-info", "btn-block"); //add button styles
    button.setAttribute("data-target", "#pokemonModal");
    button.setAttribute("data-toggle", "modal");

    button.addEventListener('click', function(){ //add event to button
      showDetails(pokemon);
    });

    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
  }

  //create function to show clicked pokemon's details
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  //show modal function
  let modalContainer = document.querySelector('#pokemonModal');

  function showModal(pokemon) {
    let modalTitle = $('.modal-title');
    let modalBody = $('.modal-body');

    modalTitle.empty();
    modalBody.empty();

    modalTitle.text(pokemon.name);

    let titleElement = $('.modal-title');
    titleElement.innerText = pokemon.name;

    let heightElement = document.createElement('p');
    heightElement.innerText = 'Height: ' + pokemon.height;

    let typesElement = document.createElement('p');
    typesElement.innerText = 'Types: ' + ' ' + pokemon.types.map((t)=> t.type.name).join(',')

    let imageElement = document.createElement('img');
    imageElement.classList.add('pokeImage');
    imageElement.src = pokemon.imageUrl;

    $('#pokemonModal').modal('toggle');

    modalTitle.append(titleElement);
    modalBody.append(heightElement);
    modalBody.append(typesElement);
    modalBody.append(imageElement);


    // modalContainer.classList.add('is-visible');
  }

//function for hiding the madal
  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

//hide the modal when press Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  //hide the modal when click outside the modal container
  modalContainer.addEventListener('click', (e) => {
    // Since this is also triggered when clicking INSIDE the modal
    // We only want to close if the user clicks directly on the overlay
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

  // create load function to fetch data fron API
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  //create load detals function
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  //return values
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal
  };
})();

//try adding a pokemon on the list
// console.log(pokemonRepository.getAll());
// pokemonRepository.add({name:"Seal", height:1.1, type:["water"]});
// console.log(pokemonRepository.getAll());

// create forEach function to printout the list
pokemonRepository.loadList().then(function(){
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
