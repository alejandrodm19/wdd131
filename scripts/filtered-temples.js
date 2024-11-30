const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Alabang Philippines",
    location: "Muntilupa, Metro Manila",
    dedicated: "2020, June, 4",
    area: 57,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/alabang-philippines-temple/alabang-philippines-temple-8191.jpg",
  },
  {
    templeName: "Caracas Venezuela",
    location: "Caurimare, Caracas Venezuela",
    dedicated: "2000, August, 20",
    area: 15332,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/_temp/096-Caracas-Venezuela-Temple.jpg",
  },
  {
    templeName: "Buenos Aires Argentina",
    location: "Ciudad Evita, Buenos Aires",
    dedicated: "1986, January, 19",
    area: 30659,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4088.jpg",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const templeContainer = document.getElementById("temple-container");

  function displayTemples(filteredTemples) {
    templeContainer.innerHTML = ""; 
    filteredTemples.forEach((temple) => {
      const templeCard = `
                <div class="temple-card">
                    <h3>${temple.templeName}</h3>
                    <p><strong>Location:</strong> ${temple.location}</p>
                    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                    <p><strong>Area:</strong> ${temple.area} sq ft</p>
                    <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
                </div>
            `;
      templeContainer.insertAdjacentHTML("beforeend", templeCard);
    });
  }

  // Mostrar todos los templos al cargar la página
  displayTemples(temples);

  // Funciones para filtrar templos
  document
    .getElementById("home")
    .addEventListener("click", () => displayTemples(temples));
  document.getElementById("old").addEventListener("click", () => {
    const oldTemples = temples.filter(
      (t) => new Date(t.dedicated).getFullYear() < 1900
    );
    displayTemples(oldTemples);
  });
  document.getElementById("new").addEventListener("click", () => {
    const newTemples = temples.filter(
      (t) => new Date(t.dedicated).getFullYear() > 2000
    );
    displayTemples(newTemples);
  });
  document.getElementById("large").addEventListener("click", () => {
    const largeTemples = temples.filter((t) => t.area > 90000);
    displayTemples(largeTemples);
  });
  document.getElementById("small").addEventListener("click", () => {
    const smallTemples = temples.filter((t) => t.area < 10000);
    displayTemples(smallTemples);
  });

  // Actualizar el footer
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
});
