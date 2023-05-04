import Character from "../pages/Character";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Header from "../templates/Header";
import getHash from "../utils/getHash";
import resolveRoute from "../utils/resolveRoute";


const routes = {
    "/": Home,
    "/:id": Character,
    "/contact": "Contact",
};

const router = async () => {
    const header = null || document.getElementById("header");
    const content = null || document.getElementById("content");

    header.innerHTML = await Header();

    let hash = getHash();
    let route = resolveRoute(hash);
    console.log(hash);
    let render = routes[route] ? routes[route]() : Error404();
    content.innerHTML = await render; //await para esperar los datos de la API 
}

export default router;


