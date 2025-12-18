# 🧪 Rick & Morty – Buscador de Personajes

Una aplicación web desarrollada en **React + Vite** que consume la [API de Rick and Morty](https://rickandmortyapi.com/) para buscar, visualizar y guardar personajes como favoritos. Totalmente responsiva, con diseño moderno y modo claro/oscuro.

---

## 🌍 Link del proyecto desplegado

Accedé a la app online en:  
🔗 https://rick-morty-buscador.vercel.app

---

## 🧠 Autor

- 👨‍💻 Lucas Nieto

---

## 🎯 Funcionalidades

- 🔍 Buscar personajes por nombre o por filtros (especie, género, estado)
- 🧑 Ver información (imagen, especie, origen)
- ⭐ Agregar y quitar personajes favoritos (sin duplicados)
- 🗑 Botón para eliminar todos los favoritos de una vez
- 💾 Persistencia con localStorage
- 🌓 Cambio entre modo claro y oscuro
- 🎨 Diseño moderno, responsivo y accesible con TailwindCSS 4
- ✅ Estilo visual personalizado (colores, tipografía Inter)
- ⚠️ Mensajes amigables con React Toastify

---

## 🛠 Tecnologías usadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS v4](https://tailwindcss.com/docs/installation) con `@tailwindcss/vite`
- [React Toastify](https://fkhadra.github.io/react-toastify/) para notificaciones
- [Axios](https://axios-http.com/) para llamadas a la API
- Rick and Morty API pública

---

## ⚙️ Instalación local

```bash
# Clonar el repositorio
git clone https://github.com/Gecko2087/rick-morty-buscador.git
cd rick-morty-buscador

# Instalar dependencias
npm install

# Ejecutar la app
npm run dev
```

---

## 📁 Estructura del proyecto

```
src/
├── components/       # Formulario, Cards y Favoritos
├── pages/            # Home principal
├── utils/            # Lógica de fetch API
├── App.jsx           # App principal
├── index.css         # Tailwind + variantes dark
├── main.jsx
index.html            # HTML base con fuente e ícono
tailwind.config.js
vite.config.js
```

---
