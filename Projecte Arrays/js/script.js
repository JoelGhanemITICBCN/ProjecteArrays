// POKEMONS
let dades;
let dadesPokemon = [];
let dadesMunicipis = [];
let dadesMeteorits = [];
let dadesMovies = [];
let dadesTotals = [];
console.log("DADES pokimon");
fetch("js/data/pokemon.json")
  .then((response) => response.json())
  .then((data) => {
    dadesPokemon = data.pokemon;
    dadesTotals += dadesPokemon;
    console.log(dadesPokemon);
    console.log("Fi dades pokemon");
  });

// MUNICIPIS
console.log("DADES Municipis");
fetch("js/data/municipis.json")
  .then((response) => response.json())
  .then((data) => {
    dadesMunicipis = data.elements;
    dadesTotals += dadesMunicipis;
    console.log(dadesMunicipis);
    console.log("Fi Dades Pokemon");
  });

// METEORITS
console.log("DADES METEORITS");
fetch("js/data/earthMeteorites.json")
  .then((response) => response.json())
  .then((data) => {
    dadesMeteorits = data;
    dadesTotals += dadesMeteorits;
    console.log(dadesMeteorits);
    console.log("Fi dadesMeteorits");
  });

// MOVIES
console.log("DADES movies");
fetch("js/data/movies.json")
  .then((response) => response.json())
  .then((data) => {
    dadesMovies = data.movies;
    dadesTotals += dadesMovies;
    console.log(dadesMovies);
    console.log("Fi dadesMovies");
  });
function refresca() {
  location.reload();
}
function orderAsc() {
  dadesMeteorits.sort();
  console.log(dadesMeteorits);
  console.log("Meteorits asc");
  dadesPokemon.sort();
  console.log(dadesPokemon);
  console.log("Pokemon asc");
  dadesMunicipis.sort();
  console.log(dadesMunicipis);
  console.log("Municipis asc");
  dadesMovies.sort();
  console.log(dadesMovies);
  console.log("Movies asc");
}
function ordenaDesc() {
  dadesMeteorits.reverse();
  console.log(dadesMeteorits);
  console.log("Meteorits desc");
  dadesPokemon.reverse();
  console.log(dadesPokemon);
  console.log("Pokemon desc");
  dadesMunicipis.reverse();
  console.log(dadesMunicipis);
  console.log("Municipis desc");
  dadesMovies.reverse();
  console.log(dadesMovies);
  console.log("Movies desc");
}
function busca() {
let NomABuscar = prompt("Que vols buscar?");
  
}

function mitjana() {}
