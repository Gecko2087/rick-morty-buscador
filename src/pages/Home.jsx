import React, { useState } from 'react'
import SearchForm from '../components/SearchForm'
import CharacterCard from '../components/CharacterCard'
import FavoritesList from '../components/FavoritesList'
import { toast } from 'react-toastify'
import axios from 'axios'

export default function Home() {
  const [characters, setCharacters] = useState([])
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites')) || [])
  const [loading, setLoading] = useState(false)
  const [filters, setFilters] = useState({ species: '', gender: '', status: '' })

  const handleSearch = async (query, count) => {
    setLoading(true)
    try {
      const baseUrl = 'https://rickandmortyapi.com/api/character/'
      const params = new URLSearchParams()

      if (query) params.append('name', query)
      if (filters.species) params.append('species', filters.species)
      if (filters.gender) params.append('gender', filters.gender)
      if (filters.status) params.append('status', filters.status)

      const res = await axios.get(`${baseUrl}?${params.toString()}`)
      const results = res.data.results.slice(0, count)
      setCharacters(results)
      toast.success('✅ Resultados cargados')
    } catch (error) {
      setCharacters([])
      toast.error('❌ No se encontraron resultados')
    } finally {
      setLoading(false)
    }
  }

  const addFavorite = (char) => {
    const exists = favorites.some(fav => fav.id === char.id)
    if (exists) {
      toast.info('⚠️ El personaje ya está en favoritos')
      return
    }
  
    const updated = [...favorites, char]
    setFavorites(updated)
    localStorage.setItem('favorites', JSON.stringify(updated))
    toast.success('✅ Agregado a favoritos')
  }  

  const removeFavorite = (id) => {
    const updated = favorites.filter(f => f.id !== id)
    setFavorites(updated)
    localStorage.setItem('favorites', JSON.stringify(updated))
  }

  const clearFavorites = () => {
    setFavorites([])
    localStorage.removeItem('favorites')
  }

  return (
    <div>
      <SearchForm onSearch={handleSearch} filters={filters} setFilters={setFilters} />
      {loading && <p className="text-center text-green-400 font-medium">Cargando personajes...</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 my-6">
        {characters.map(char => (
          <CharacterCard key={char.id} character={char} onFav={addFavorite} />
        ))}
      </div>
      <FavoritesList favorites={favorites} onRemove={removeFavorite} onClear={clearFavorites} />
    </div>
  )
}
