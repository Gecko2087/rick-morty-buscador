import React, { useState, useEffect } from 'react'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <div className="min-h-screen px-4 py-10 transition-colors duration-300 bg-white text-gray-900 dark:bg-[#0f172a] dark:text-gray-100 relative">

      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={() => setIsDark(!isDark)}
          className="flex items-center gap-2 px-4 py-2 border border-white text-white bg-black/30 hover:bg-black/50 rounded-md shadow-md transition"
        >
          {isDark ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
        </button>
      </div>

      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold">
          🔍 <span className="text-green-500">Buscador</span> de Personajes – Rick & Morty
        </h1>
        <p className="text-gray-500 dark:text-gray-300 mt-2">
          Explorá el multiverso: Rick, Morty, Summer, Beth, Mr. Meeseeks...
        </p>
      </header>

      <main className="max-w-6xl mx-auto">
        <Home />
      </main>

      <ToastContainer />
    </div>
  )
}
