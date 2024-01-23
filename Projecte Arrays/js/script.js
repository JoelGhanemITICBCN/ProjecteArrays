// POKEMONS
var num = 0;
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
  dades.sort(function (a, b) {
    return a.localeCompare(b);
  });
  console.log("ordenaAsc");
  console.log(`El primer dato es `);
  console.log(JSON.stringify(dades[1]));
  //printList();
}
function ordenaDesc() {
  dades.reverse(function (a, b) {
    return a.localeCompare(b);
  });
  console.log("ordenaDesc");
  console.log(`El primer dato es`);
  console.log(JSON.stringify(dades[1]));
  //printList();
  console.log("se supone que ya se ha vuelto as mostrar");
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
  console.log("se llama a print");
  var categorias = document.getElementById("categorias");
  var divResultat = document.getElementById("resultat");

  if (!categorias || !divResultat) {
    console.error("No se pudo encontrar uno o más elementos necesarios.");
    return;
  }

  categorias.addEventListener("change", function () {
    var categoria = document.querySelector(
      'input[name="categoria"]:checked'
    ).value;
    //alert(`La categoría es ${categoria}`);

    var headers, properties;
    //POKEMON
    if (categoria == "pokemon") {
      dades = dadesPokemon;
      console.log(`El primer valor es ${dades[1]}`);
      console.log(`El ultim valor es ${dades[-1]}`);
      headers = ["ID", "Nombre", "Imagen", "Peso"];
      properties = ["id", "name", "img", "weight"];
    }

    //MUNICIPIOS
    else if (categoria == "municipios") {
      dades = dadesMunicipis;
      console.log(`El primer valor es ${dades[1]}`);
      console.log(`El ultim valor es ${dades[-1]}`);
      console.log("dades municipis en lo de la tavbla");
      console.log(dadesMunicipis);
      headers = ["INE", "Nombre", "Imagen", "Bandera"];
      properties = [
        "ine",
        "municipi_nom",
        "municipi_vista",
        "municipi_bandera",
      ];
    }

    //METEORITOS
    else if (categoria == "meteoritos") {
      console.log("meteoritos");
      dades = dadesMeteorits;
      console.log(`El primer valor es ${dades[0]}`);
      console.log(`El ultim valor es ${dades[-1]}`);
      headers = ["ID", "Nombre", "Clase", "Masa"];
      properties = ["id", "name", "recclass", "mass"];
    }

    //PELICULAS
    else if (categoria == "peliculas") {
      console.log("pelis");
      dades = dadesMovies;
      console.log(`El primer valor es ${dades[0]}`);
      console.log(JSON.stringify(dades[1]));
      console.log(`El ultim valor es ${dades[-1]}`);
      console.log(JSON.stringify(dades[-1]));
      headers = ["Título", "Año", "Imagen", "Reating"];
      properties = ["title", "year", "url", "rating"];
    }

    var table = generarTabla(dades, headers, properties);
    divResultat.innerHTML = "";
    divResultat.appendChild(table);

    document
      .getElementById("ordenaAsc")
      .addEventListener("click", function (event) {
        event.preventDefault();
        ordenaAsc();
      });
    document
      .getElementById("ordenaDesc")
      .addEventListener("click", function (event) {
        event.preventDefault();
        ordenaDesc();
        console.log(`"numero de veces que se ejecuta ${num}`);
        num++;
      });
  });
}

function generarTabla(dades, headers, properties) {
  var table = document.createElement("table");
  table.style.width = "100%";
  table.style.borderCollapse = "collapse";

  var headerRow = document.createElement("tr");
  headers.forEach((header) => {
    var th = document.createElement("th");
    th.textContent = header;
    th.style.padding = "10px";
    th.style.border = "1px solid black";
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  dades.forEach((item) => {
    var row = document.createElement("tr");

    properties.forEach((property) => {
      var cell = document.createElement("td");
      var value = item[property];
      if (
        typeof value === "string" &&
        (value.startsWith("http://") || value.startsWith("https://"))
      ) {
        var img = document.createElement("img");
        img.src = value;
        img.style.width = "100px";
        cell.appendChild(img);
      } else {
        cell.textContent = value;
      }
      cell.style.padding = "10px";
      cell.style.border = "1px solid black";
      row.appendChild(cell);
    });

    table.appendChild(row);
  });

  return table;
}
