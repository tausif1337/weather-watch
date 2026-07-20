// WeatherCard: displays weather data. Pure presentation (no state, no fetch).
// Props:
//   data -> { city, temperature, condition, humidity, windSpeed }
export function WeatherCard({ data }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      {/* City name */}
      <h2 className="text-2xl font-bold text-gray-800">{data.city}</h2>
      <p className="text-gray-500">{data.condition}</p>

      {/* Big temperature */}
      <p className="my-4 text-5xl font-bold text-blue-500">
        {data.temperature}&deg;C
      </p>

      {/* Extra details: humidity + wind */}
      <div className="flex justify-between text-gray-600">
        <span>Humidity: {data.humidity}%</span>
        <span>Wind: {data.windSpeed} km/h</span>
      </div>
    </div>
  )
}
