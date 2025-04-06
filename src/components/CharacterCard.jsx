import React from 'react'

export default function CharacterCard({ character, onFav }) {
  return (
    <div className="bg-white dark:bg-black/30 rounded-2xl shadow-lg p-5 text-center transition hover:scale-[1.03] duration-200">
      <img
        src={character.image}
        alt={character.name}
        className="w-24 h-24 rounded-full mx-auto border-4 border-green-500 object-cover"
      />
      <h2 className="text-xl font-bold mt-3">{character.name}</h2>
      <p className="text-gray-700 dark:text-gray-300 mt-1">
        <strong>Especie:</strong> {character.species}
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        <strong>Origen:</strong> {character.origin.name}
      </p>
      <button
        onClick={() => onFav(character)}
        className="mt-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md shadow transition-all"
      >
        ⭐ Agregar a Favoritos
      </button>
    </div>
  )
}
