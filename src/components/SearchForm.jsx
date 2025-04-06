import React, { useState } from 'react'

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState('')
  const [count, setCount] = useState(5)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!query.trim()) return
    onSearch(query, count)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mb-10"
    >
      <input
        type="text"
        placeholder="Buscar personaje (ej: Rick, Morty, Summer)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-3 w-[280px] sm:w-[300px] rounded-md bg-white dark:bg-black/20 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
      />

      <input
        type="number"
        min={1}
        max={20}
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
        placeholder="Cantidad"
        className="p-3 w-[120px] rounded-md bg-white dark:bg-black/20 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
      />

      <button
        type="submit"
        className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md shadow transition"
      >
        🔍 Buscar
      </button>
    </form>
  )
}
