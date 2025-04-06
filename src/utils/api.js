import axios from 'axios'

export const fetchCharacters = async (name) => {
  const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`)
  return response.data.results
}
