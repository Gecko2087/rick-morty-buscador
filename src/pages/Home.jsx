import React, { useState } from 'react'
import SearchForm from '../components/SearchForm'
import CharacterCard from '../components/CharacterCard'
import FavoritesList from '../components/FavoritesList'
import { fetchCharacters } from '../utils/api'
import { toast } from 'react-toastify'

export default function Home() {
  const [characters, setCharacters] = useState([])
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites')) || [])
  const [loading, setLoading] = useState(false)

  const handleSearch = async (query, count) => {
    setLoading(true)
    try {
      const results = await fetchCharacters(query)
      setCharacters(results.slice(0, count))
      toast.success('✅ Resultados cargados')
    } catch (error) {
      toast.error('❌ Error al buscar personajes')
    } finally {
      setLoading(false)
    }
  }

  const addFavorite = (char) => {
    const updated = [...favorites, char]
    setFavorites(updated)
    localStorage.setItem('favorites', JSON.stringify(updated))
  }

  const removeFavorite = (id) => {
    const updated = favorites.filter(f => f.id !== id)
    setFavorites(updated)
    localStorage.setItem('favorites', JSON.stringify(updated))
  }

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {loading && <p className="text-center text-green-400 font-medium">Cargando personajes...</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 my-6">
        {characters.map(char => (
          <CharacterCard key={char.id} character={char} onFav={addFavorite} />
        ))}
      </div>
      <FavoritesList favorites={favorites} onRemove={removeFavorite} />
    </div>
  )
}
