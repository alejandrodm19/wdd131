const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

const lastModified = document.lastModified;
console.log("Last Modified Date:", lastModified);
document.getElementById("lastModified").textContent = lastModified;
