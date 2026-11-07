import { useState } from 'react'

// Your API key from the .env file
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

export default function App() {
  const [city, setCity] = useState('') // text in the search box
  const [weather, setWeather] = useState(null) // weather data from the API
  const [loading, setLoading] = useState(false) // true while waiting for the API
  const [error, setError] = useState('') // error message to show

  async function handleSearch(event) {
    event.preventDefault() // stop the page from reloading

    if (city.trim() === '') return // do nothing if the box is empty

    setLoading(true)
    setError('')
    setWeather(null)

    try {
      // API docs: https://openweathermap.org/current
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      const response = await fetch(url)
      const data = await response.json()

      if (response.ok) {
        setWeather(data)
        console.log(data) // for debugging
      } else {
        setError(data.message) // e.g. "city not found"
      }
    } catch (err) {
      setError('Something went wrong. Check your internet connection.')
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-blue-50 flex justify-center p-4">
      <div className="w-full max-w-md mt-16 space-y-4">
        <h1 className="text-center text-3xl font-bold text-blue-600">Weather Watch</h1>

        {/* Search box */}
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            value={city}
            onChange={(event) => setCity(event.target.value)}
            placeholder="Search city..."
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
          />
          <button className="rounded-lg bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600">
            Search
          </button>
        </form>

        {/* Loading message */}
        {loading && <p className="text-center text-gray-500">Loading...</p>}

        {/* Error message */}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Weather card */}
        {weather && (
          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h2 className="text-2xl font-bold text-gray-800">{weather.name}</h2>
            <p className="text-gray-500">{weather.weather[0].main}</p>
            <p className="my-4 text-5xl font-bold text-blue-500">
              {Math.round(weather.main.temp)}&deg;C
            </p>
            <div className="flex justify-between text-gray-600">
              <span>Humidity: {weather.main.humidity}%</span>
              <span>Wind: {Math.round(weather.wind.speed * 3.6)} km/h</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
