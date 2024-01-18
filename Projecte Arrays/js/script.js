// POKEMONS
let dades;
let dadesPokemon = [];
let dadesMunicipis = [];
let dadesMeteorits = [];
let dadesMovies = [];
let dadesTotals = [];
let consulta = [];
console.log("DADES pokimon");
fetch("js/data/pokemon.json")
  .then((response) => response.json())
  .then((data) => {
    dadesPokemon = data.pokemon;
    dadesTotals.push(...dadesPokemon);
    console.log(dadesPokemon);
    console.log("Fi dades pokemon");
    console.log("dades Totals");
    console.log(dadesTotals);
    console.log("FI dades Totals");
  });

// MUNICIPIS
console.log("DADES Municipis");
fetch("js/data/municipis.json")
  .then((response) => response.json())
  .then((data) => {
    dadesMunicipis = data.elements;
    dadesTotals.push(...dadesMunicipis);
    console.log(dadesMunicipis);
    console.log("Fi Dades Pokemon");
    console.log("dades Totals");
    console.log(dadesTotals);
    console.log("FI dades Totals");
    printList();
    printListPokemon();
  });

// METEORITS
console.log("DADES METEORITS");
fetch("js/data/earthMeteorites.json")
  .then((response) => response.json())
  .then((data) => {
    dadesMeteorits = data;
    dadesTotals.push(...dadesMeteorits);
    console.log(dadesMeteorits);
    console.log("Fi dadesMeteorits");
    console.log("dades Totals");
    console.log(typeof dadesTotals);
    console.log("FI dades Totals");
  });

// MOVIES
console.log("DADES movies");
fetch("js/data/movies.json")
  .then((response) => response.json())
  .then((data) => {
    dadesMovies = data.movies;
    dadesTotals.push(...dadesMovies);
    console.log(dadesMovies);
    console.log("Fi dadesMovies");
    console.log("dades Totals");
    dadesTotals.map((element) => {
      console.log(element);
    });
    console.log("FI dades Totals");
  });






 //FUNCIONS 
function refresca() {
  location.reload();
}
function ordenaAsc() {
  dadesMeteorits.sort(function (a, b) {
    return a.localeCompare(b);
  });
  console.log(dadesMeteorits);
  console.log("Meteorits asc");
  dadesPokemon.sort(function (a, b) {
    return a.localeCompare(b);
  });
  console.log(dadesPokemon);
  console.log("Pokemon asc");
  dadesMunicipis.sort(function (a, b) {
    return a.localeCompare(b);
  });
  console.log(dadesMunicipis);
  console.log("Municipis asc");
  dadesMovies.sort(function (a, b) {
    return a.localeCompare(b);
  });
  console.log(dadesMovies);
  console.log("Movies asc");
}
function ordenaDesc() {
  dadesMeteorits.reverse(function (a, b) {
    return a.localeCompare(b);
  });
  console.log(dadesMeteorits);
  console.log("Meteorits desc");
  dadesPokemon.reverse();
  dadesPokemon.reverse(function (a, b) {
    return a.localeCompare(b);
  });
  console.log(dadesPokemon);
  console.log("Pokemon desc");
  dadesMunicipis.reverse(function (a, b) {
    return a.localeCompare(b);
  });
  console.log(dadesMunicipis);
  console.log("Municipis desc");
  dadesMovies.reverse(function (a, b) {
    return a.localeCompare(b);
  });
  console.log(dadesMovies);
  console.log("Movies desc");
}
function busca() {
  let NomABuscar = prompt("Que vols buscar?");
}

function mitjana() {}
function orderList(direccion) {
  if (direccion === "asc") {
    ordenaAsc();
  } else if (direccion === "desc") {
    ordenaDesc();
  } else {
    return;
  }
}

function searchList() {
  console.log("entra a searchlist");
  let peticion = prompt("que vols trobar?");
  peticion = peticion.toLowerCase();
  //dadesTotals = dadesTotals.filter((element) => element.includes(peticion));
  dadesPokemon = dadesPokemon.filter((element) => element.includes(peticion));
  printList();
}

function printList() {
  document.getElementById('categorias').addEventListener('change', function() {
    var categoria = document.querySelector('input[name="categoria"]:checked').value;
    printListPokemon(categoria);
  });
  
    var divResultat = document.getElementById("resultat");
    var table = document.createElement("table");
  
   
    table.style.width = '100%'; 
    table.style.borderCollapse = 'collapse';
  
  
    var headerRow = document.createElement("tr");
    ['ID', 'Nombre', 'Imagen', 'Peso'].forEach((header) => {
      var th = document.createElement("th");
      th.textContent = header;
      th.style.padding = '10px'; 
      th.style.border = '1px solid black'; 
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
  
    dadesPokemon.forEach((pokemon) => {
      var row = document.createElement("tr");
  
     
      ['id', 'name', 'img', 'weight'].forEach((property) => {
        var cell = document.createElement("td");
        var value = pokemon[property];
        if (typeof value === 'string' && (value.startsWith('http://') || value.startsWith('https://'))) {
          var img = document.createElement("img");
          img.src = value;
          img.style.width = '100px'; 
          cell.appendChild(img);
        } else {
          cell.textContent = value;
        }
        cell.style.padding = '10px'; 
        cell.style.border = '1px solid black'; 
        row.appendChild(cell);
      });
  
      table.appendChild(row);
    });
  
    divResultat.innerHTML = "";
    divResultat.appendChild(table);
  }
  