// Obtener el año actual y mostrarlo en el elemento con el id "year"
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

// Obtener la última fecha de modificación del documento
const lastModified = document.lastModified;

// Verificar y mostrar el valor en la consola
console.log("Last Modified Date:", lastModified);

// Mostrar la fecha de última modificación en el elemento con el id "lastModified"
document.getElementById("lastModified").textContent =
  lastModified || "No disponible";
