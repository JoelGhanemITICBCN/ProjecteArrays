//VARIABLES GLOBALS
let contador = 0;
let arrayLabels; // Aquest array ha de contenir els diferents tipus (labels) com a valors únics
let arrayDadesGraf; // Aquest array ha de contenir la quantitat de pokemons (o altres dades) per a cada tipus
let backgroundColor; // Aquest array ha de contenir els colors per al fons
let borderColor; // Aquest array ha de contenir els colors per al borde
var isAscending = true;
var sortProperty = "name";
var isAscending = true;
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
  let dataKey = ""; // La clau que s'utilitzarà per a les dades específiques

  //POKEMON
  if (categoria == "pokemon") {
    dades = dadesPokemon;
    headers = ["ID", "Nombre", "Imagen", "Peso"];
    properties = ["id", "name", "img", "weight"];
    sortProperty = "id";
    dataKey = "type";
  }

  //MUNICIPIOS
  else if (categoria == "municipios") {
    dades = dadesMunicipis;
    headers = ["INE", "Nombre", "Imagen", "Bandera"];
    properties = ["ine", "municipi_nom", "municipi_vista", "municipi_bandera"];
    sortProperty = "ine";
    dataKey = "comarca";
  }

  //METEORITOS
  else if (categoria == "meteoritos") {
    dades = dadesMeteorits;
    headers = ["ID", "Nombre", "Clase", "Masa"];
    properties = ["id", "name", "recclass", "mass"];
    sortProperty = "id";
    dataKey = "recclass";
  }

  //PELICULAS
  else if (categoria == "peliculas") {
    dades = dadesMovies;
    headers = ["Título", "Año", "Imagen", "Rating"];
    properties = ["title", "year", "url", "rating"];
    sortProperty = "title";
    dataKey = "genres";
  }
  let dadesAGraf = dades.map((dada) => dada[dataKey]);
  let counts = {};

  // Recorre totes les dades
  dadesAGraf.forEach((dada) => {
    counts[dada] = (counts[dada] || 0) + 1;
  });

  // Crea els arrays per a la gràfica
  arrayLabels = Object.keys(counts);
  arrayDadesGraf = Object.values(counts);
  console.log("array dades graf");
  console.log(arrayDadesGraf);
  console.log("array labels ");
  console.log(arrayLabels);
  generaGrafica();
  printList();
}
function printList() {
  var resultat = document.getElementById("resultat");
  resultat.innerHTML = "";

  var table = document.createElement("table");
  table.style.border = "1px solid black";

  var thead = document.createElement("thead");
  var headerRow = document.createElement("tr");
  headers.forEach((header, index) => {
    var th = document.createElement("th");
    th.textContent = header;
    th.addEventListener("click", function () {
      sortProperty = properties[index];
      if (isAscending) {
        ordenaAsc();
        isAscending = false;
      } else {
        ordenaDesc();
        isAscending = true;
      }
    });
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  var tbody = document.createElement("tbody");
  dades.forEach((item) => {
    var row = document.createElement("tr");
    properties.forEach((prop) => {
      var td = document.createElement("td");
      td.style.border = "1px solid black";
      if (
        prop === "img" ||
        prop === "url" ||
        prop === "municipi_vista" ||
        prop === "municipi_bandera"
      ) {
        var img = document.createElement("img");
        img.src = item[prop];
        img.style.width = "100px";
        td.appendChild(img);
      } else {
        td.textContent = item[prop] || "";
      }
      row.appendChild(td);
    });
    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  resultat.appendChild(table);
}

//FUNCIONS
function refresca() {
  location.reload();
}

function ordenaAsc() {
  dades.sort((a, b) => {
    var valA = /^\d+$/.test(a[sortProperty])
      ? parseFloat(a[sortProperty])
      : a[sortProperty];
    var valB = /^\d+$/.test(b[sortProperty])
      ? parseFloat(b[sortProperty])
      : b[sortProperty];
    return valA > valB ? 1 : -1;
  });
  printList();
}

function ordenaDesc() {
  dades.sort((a, b) => {
    var valA = /^\d+$/.test(a[sortProperty])
      ? parseFloat(a[sortProperty])
      : a[sortProperty];
    var valB = /^\d+$/.test(b[sortProperty])
      ? parseFloat(b[sortProperty])
      : b[sortProperty];
    return valA < valB ? 1 : -1;
  });
  printList();
}

function buscaTextoEnTiempoReal(texto) {
  var textoBuscado = texto.toLowerCase();
  var datosFiltrados = dades.filter(function (item) {
    return properties.some(function (prop) {
      return (
        item[prop] && item[prop].toString().toLowerCase().includes(textoBuscado)
      );
    });
  });
  dades = datosFiltrados;
  printList();
}

function generaGrafica() {
 ;
  console.log("Llega a generaGrafica");
  console.log("Muestra arrayDadesGraf");
  console.log(arrayDadesGraf);
  console.log("Llega a generaGrafica");
  borderColor = arrayLabels.map(() => getRandomColor());
  backgroundColor = borderColor.map((color) =>
    color.replace(")", ", 0.2)").replace("rgb", "rgba")
  );

  const config = {
    type: "polarArea",
    data: {
      labels: arrayLabels,
      datasets: [
        {
          label: "Cantidad de Pokémon por Tipo",
          data: arrayDadesGraf,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
  const myChart = new Chart(document.getElementById("myChart"), config);
 if (contador != 0) {
    if (myChart != null) {
      myChart.destroy();
    }
  }
  contador++
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
