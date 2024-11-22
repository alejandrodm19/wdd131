function calculateWindChill(temperature, windSpeed) {
  if (temperature <= 10 && windSpeed > 4.8) {

    return (
      13.12 +
      0.6215 * temperature -
      11.37 * Math.pow(windSpeed, 0.16) +
      0.3965 * temperature * Math.pow(windSpeed, 0.16)
    ).toFixed(1);
  } else {
    return "N/A"; 
  }
}


const temperature = 35; 
const windSpeed = 10;

const windChillElement = document.querySelector("#windchill");

if (windChillElement) {
  windChillElement.textContent =
    calculateWindChill(temperature, windSpeed) + " °C";
}


document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById(
  "lastModified"
).textContent = `Last Modification: ${document.lastModified}`;
