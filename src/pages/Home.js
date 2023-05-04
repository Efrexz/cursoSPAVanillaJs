import getData from '../utils/getData';//funcion para conseguir los datos de la API

const Home = async () => {
const characters = await getData(); // no le enviamos el parametro "id" para que traiga todos los personajes
console.log(characters.results);//el array de personajes
const view = `
    <div class="Characters">
    ${characters.results.map(character => `
        <article class="Character-item">
        <a href="#/${character.id}/">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
        </a>
        </article>
    `).join('')}
    </div>
`;//por cada personaje creamos una tarjeta con sus datos. esto nos devolvera un array en donde cada posicion tiene un template. Luego con el metodo .join() unimos todos los arrays para tener un template completo, Si no se llega a usar este metodo se vera en la pantalla las comas que separan cada template
return view;
};

export default Home;