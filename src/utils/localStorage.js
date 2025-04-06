export const saveFavorites = (data) => {
    localStorage.setItem('favorites', JSON.stringify(data))
  }
  
  export const loadFavorites = () => {
    return JSON.parse(localStorage.getItem('favorites')) || []
  }
  
  export const removeFavoriteById = (id) => {
    const current = loadFavorites()
    const updated = current.filter(f => f.id !== id)
    saveFavorites(updated)
    return updated
  } 
  