import { useState } from 'react'

// SearchBar: a controlled input + button.
// Props:
//   onSearch(city) -> called with the typed city when the user submits.
export function SearchBar({ onSearch }) {
  // Local state holds whatever the user is typing.
  const [text, setText] = useState('')

  // Runs on form submit (button click OR Enter key).
  function handleSubmit(event) {
    event.preventDefault() // stop the page from reloading

    const city = text.trim()
    if (!city) return // ignore empty searches

    onSearch(city) // hand the city up to the parent
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search city..."
        className="flex-1 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="rounded-lg bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  )
}
