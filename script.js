const boton = document.getElementById("move");
const square = document.querySelector(".square");
let running = false;
const button = document.getElementById("loadWeather");
const temp = document.getElementById("temp");
const desc = document.getElementById("desc");

const lat = 4.3556;
const lon = 74.0451;


function getWeatherIcon(code) {
  if (code === 0) return "☀️";              // despejado
  if (code <= 3) return "⛅";              // parcialmente nublado
  if (code <= 48) return "🌫️";            // niebla
  if (code <= 67) return "🌧️";            // lluvia
  if (code <= 77) return "❄️";            // nieve
  if (code <= 99) return "⛈️";            // tormenta
  return "❓";
}
function getWeatherDesc(code) {
  if (code === 0) return "Despejado";
  if (code <= 3) return "Parcialmente nublado";
  if (code <= 48) return "Niebla";
  if (code <= 67) return "Lluvia";
  if (code <= 77) return "Nieve";
  if (code <= 99) return "Tormenta";
  return "Desconocido";
}

button.addEventListener("click", async () => {
  try {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=4.7110&longitude=-74.0721&current=temperature_2m,weather_code";

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    const tempValue = temp.textContent = `${Math.round(data.current.temperature_2m)}°C`;

    // Traducción básica del código de clima
    const code = data.current.weather_code;
    temp.textContent = `${tempValue}`;
    desc.textContent = getWeatherDesc(code);
    icon.textContent = getWeatherIcon(code);

    
  } catch (error) {
    desc.textContent = "Error cargando clima";
    console.error(error);
  }
});



boton.addEventListener("click", () => {
    running = !running;
    square.style.animationPlayState = running?"running":"paused";
   
})