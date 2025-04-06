import React from 'react'

export default function FavoritesList({ favorites, onRemove, onClear }) {
  if (favorites.length === 0) return null

  return (
    <section className="mt-14">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-green-400">⭐ Personajes Favoritos</h2>
        <button
          onClick={onClear}
          className="text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md transition"
        >
          🗑 Eliminar todos
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {favorites.map((char) => (
          <div
            key={char.id}
            className="bg-green-100 dark:bg-green-900/20 p-5 rounded-2xl shadow-lg text-center hover:scale-[1.02] transition"
          >
            <img
              src={char.image}
              alt={char.name}
              className="mx-auto mb-3 rounded-full w-24 h-24 object-cover border-4 border-green-400"
            />
            <h3 className="text-lg font-bold">{char.name}</h3>
            <button
              onClick={() => onRemove(char.id)}
              className="mt-3 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow"
            >
              🗑 Quitar
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
