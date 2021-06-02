const miAppId = "0da24496";
const miAppKey = "2f7e95a9192a0bb024c57856f972df7e";

const obtenerElemento = (clase) => document.querySelector(`.${clase}`);

fetch(
  `https://api.tmb.cat/v1/ibus/stops/2775?app_id=${miAppId}&app_key=${miAppKey}`
)
  .then((response) => response.json())
  .then((datos) => printarPagina(datos));

const printarPagina = (datos) => {
  const parrafo = obtenerElemento("datos-json");
  console.log(parrafo);
  console.log(datos);
  parrafo.textContent = `Falten ${datos.data.ibus[0]["text-ca"]}`;
};
