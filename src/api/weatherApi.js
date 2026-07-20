// API base URL for OpenWeatherMap current-weather endpoint.
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

// Read the key from .env (Vite exposes VITE_* vars on import.meta.env).
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

// Fetch current weather for a city name.
// Returns a small, clean object the UI can display directly.
export async function getWeather(city) {
  // Build the request URL. encodeURIComponent handles spaces like "New York".
  // units=metric -> temperature in Celsius, wind in m/s.
  const url = `${BASE_URL}?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`

  const response = await fetch(url)

  // fetch does NOT throw on 404/401 — we must check ok ourselves.
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('City not found. Check the spelling.')
    }
    throw new Error('Could not fetch weather. Try again.')
  }

  const data = await response.json()

  // Return only the fields we need, in a friendly shape.
  return {
    city: data.name,
    temperature: Math.round(data.main.temp),
    condition: data.weather[0].main,
    humidity: data.main.humidity,
    // API gives wind in m/s for metric units; convert to km/h.
    windSpeed: Math.round(data.wind.speed * 3.6),
  }
}
