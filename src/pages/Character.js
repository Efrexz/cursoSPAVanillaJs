import getData from '../utils/getData';
import getHash from "../utils/getHash";

const Character = async () => {
    const id = getHash();
    const characterInfo = await getData(id);
    console.log(characterInfo);
    const view = `
    <div class="Characters-inner">
        <article class="Characters-card">
            <img src="${characterInfo.image}" alt="${characterInfo.name}">
            <h2>${characterInfo.name}</h2>
        </article>

        <article class="Characters-card">
            <h3>Episodes: ${characterInfo.episode.length}</h3>
            <h3>Status: ${characterInfo.status}</h3>
            <h3>Species: ${characterInfo.species}</h3>
            <h3>Gender: ${characterInfo.gender}</h3>
            <h3>Origin: ${characterInfo.origin.name}</h3>
            <h3>Last Location: ${characterInfo.location.name}</h3>
        </article>
    </div>
    `
    return view;
}

export default Character;