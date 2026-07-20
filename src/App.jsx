import { useState } from 'react'
import { SearchBar } from './components/SearchBar'
import { WeatherCard } from './components/WeatherCard'
import { useWeather } from './hooks/useWeather'

// App: the "brain". Holds the searched city and decides what to render.
export default function App() {
  // The city we are currently showing weather for.
  const [city, setCity] = useState('')

  // Ask React Query for this city's weather.
  const { data, isLoading, isError, error } = useWeather(city)

  return (
    // Full-height page, light blue background, content centered near the top.
    <div className="min-h-screen bg-blue-50 flex justify-center p-4">
      <div className="w-full max-w-md mt-16 space-y-4">
        <h1 className="text-center text-3xl font-bold text-blue-600">
          Weather Watch
        </h1>

        {/* Search box. On submit, save the city -> triggers the query. */}
        <SearchBar onSearch={setCity} />

        {/* Loading state */}
        {isLoading && (
          <p className="text-center text-gray-500">Loading...</p>
        )}

        {/* Error state */}
        {isError && (
          <p className="text-center text-red-500">{error.message}</p>
        )}

        {/* Success state: show the card */}
        {data && <WeatherCard data={data} />}
      </div>
    </div>
  )
}
