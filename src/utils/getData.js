
const API = 'https://rickandmortyapi.com/api/character/';

// Definimos una función asincrónica que recibe un argumento opcional "id" para buscar un personaje en particular
const getData = async (id) => {
const apiURl = id ? `${API}${id}` : API; //Si se proporciona un ID, la función busca información sobre un personaje específico, mientras que si no se proporciona un ID, devuelve información sobre todos los personajes en la API.
try {
    const response = await fetch(apiURl);
    const data = await response.json();
    return data;
} catch (error) {
    console.log('Fetch Error', error);
};
};

export default getData;
