//VARIABLES GLOBALS
var headers, properties;
let categoria = "";
let dades = [];
let dadesPokemon = [];
let dadesMunicipis = [];
let dadesMeteorits = [];
let dadesMovies = [];
let dadesTotals = [];
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
fetch("js/data/municipis.json")
  .then((response) => response.json())
  .then((data) => {
    dadesMunicipis = data.elements;
    dadesTotals.push(...dadesMunicipis);
  });

// METEORITS
console.log("DADES METEORITS");
fetch("js/data/earthMeteorites.json")
  .then((response) => response.json())
  .then((data) => {
    dadesMeteorits = data;
    dadesTotals.push(...dadesMeteorits);
  });

// MOVIES
console.log("DADES movies");
fetch("js/data/movies.json")
  .then((response) => response.json())
  .then((data) => {
    dadesMovies = data.movies;
    dadesTotals.push(...dadesMovies);
    dadesTotals.map((element) => {});
  });

function cambiaCategoria(novaCategoria) {
  console.log("cambiaCategoria");
  categoria = novaCategoria;
  seleccionaDB(categoria);
}

function seleccionaDB(categoria) {
  console.log("seleciona db");
  //POKEMON
  if (categoria == "pokemon") {
    dades = dadesPokemon;
    headers = ["ID", "Nombre", "Imagen", "Peso"];
    properties = ["id", "name", "img", "weight"];
    console.log("estoy en pokemon");
  }

  //MUNICIPIOS
  else if (categoria == "municipios") {
    dades = dadesMunicipis;
    headers = ["INE", "Nombre", "Imagen", "Bandera"];
    properties = ["ine", "municipi_nom", "municipi_vista", "municipi_bandera"];
  }

  //METEORITOS
  else if (categoria == "meteoritos") {
    dades = dadesMeteorits;
    headers = ["ID", "Nombre", "Clase", "Masa"];
    properties = ["id", "name", "recclass", "mass"];
  }

  //PELICULAS
  else if (categoria == "peliculas") {
    dades = dadesMovies;
    headers = ["Título", "Año", "Imagen", "Reating"];
    properties = ["title", "year", "url", "rating"];
  }
  printList();
}

function printList() {
  var resultat = document.getElementById('resultat');
  resultat.innerHTML = ''; 

  var table = document.createElement('table');

  var thead = document.createElement('thead');
  var headerRow = document.createElement('tr');
  headers.forEach((header) => {
    var th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  var tbody = document.createElement('tbody');
  dades.forEach((item) => {
    var row = document.createElement('tr');
    properties.forEach((prop) => {
      var td = document.createElement('td');
      td.textContent = item[prop] || '';
      row.appendChild(td);
    });
    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  resultat.appendChild(table);
}

function ordenaAsc() {
  dades.sort((a, b) => (a.name > b.name) ? 1 : -1);
  printList();
}

function ordenaDesc() {
  dades.sort((a, b) => (a.name < b.name) ? 1 : -1);
  printList();
}
function printList() {
  var resultat = document.getElementById('resultat');
  resultat.innerHTML = ''; 

  var table = document.createElement('table');
  table.style.border = "1px solid black"; // Añadir bordes a la tabla

  var thead = document.createElement('thead');
  var headerRow = document.createElement('tr');
  headers.forEach((header) => {
    var th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  var tbody = document.createElement('tbody');
  dades.forEach((item) => {
    var row = document.createElement('tr');
    properties.forEach((prop) => {
      var td = document.createElement('td');
      if (prop === 'img' || prop === 'url' || prop === 'municipi_vista' || prop === 'municipi_bandera') { // Si la propiedad es una imagen
        var img = document.createElement('img');
        img.src = item[prop];
        img.style.width = '100px'; // Ajustar el tamaño de la imagen
        td.appendChild(img);
      } else {
        td.textContent = item[prop] || '';
      }
      row.appendChild(td);
    });
    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  resultat.appendChild(table);
}
