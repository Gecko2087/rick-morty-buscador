import React, { useState } from 'react'

export default function SearchForm({ onSearch, filters, setFilters }) {
  const [query, setQuery] = useState('')
  const [count, setCount] = useState(5)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query, count)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-wrap sm:flex-row gap-4 justify-center items-center mb-10"
    >
      <input
        type="text"
        placeholder="Buscar personaje (ej: Rick, Morty)"
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
        className="p-3 w-[120px] rounded-md bg-white dark:bg-black/20 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
      />

      <select
        value={filters.species}
        onChange={e => setFilters(prev => ({ ...prev, species: e.target.value }))}
        className="p-3 rounded-md bg-white dark:bg-black/20 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-green-400 focus:border-green-400"
      >
        <option value="">Todas las especies</option>
        <option value="Human">Humano</option>
        <option value="Alien">Alien</option>
      </select>

      <select
        value={filters.gender}
        onChange={e => setFilters(prev => ({ ...prev, gender: e.target.value }))}
        className="p-3 rounded-md bg-white dark:bg-black/20 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-green-400 focus:border-green-400"
      >
        <option value="">Todos los géneros</option>
        <option value="Male">Masculino</option>
        <option value="Female">Femenino</option>
        <option value="Genderless">Sin género</option>
        <option value="unknown">Desconocido</option>
      </select>

      <select
        value={filters.status}
        onChange={e => setFilters(prev => ({ ...prev, status: e.target.value }))}
        className="p-3 rounded-md bg-white dark:bg-black/20 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-green-400 focus:border-green-400"
      >
        <option value="">Todos los estados</option>
        <option value="Alive">Vivo</option>
        <option value="Dead">Muerto</option>
        <option value="unknown">Desconocido</option>
      </select>

      <button
        type="submit"
        className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md shadow transition"
      >
        🔍 Buscar
      </button>
    </form>
  )
}
