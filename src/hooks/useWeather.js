import { useQuery } from '@tanstack/react-query'
import { getWeather } from '../api/weatherApi'

// Custom hook: fetch weather for a city using React Query.
// Components call this and get { data, isLoading, isError, error }.
export function useWeather(city) {
  return useQuery({
    // Cache key. React Query caches results per city, so re-searching
    // a city you already looked up is instant (no new API call).
    queryKey: ['weather', city],

    // The function that actually fetches. Runs when the query is enabled.
    queryFn: () => getWeather(city),

    // Only run the query once we actually have a city.
    // !!city turns '' into false so we don't fetch on an empty search.
    enabled: !!city,

    // Don't retry a "city not found" error forever.
    retry: false,
  })
}
