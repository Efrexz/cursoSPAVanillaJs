
const resolveRoute = (route) => {
    if(route.length <= 3){
        let validRoute = route === "/" ?  route : "/:id";
        return validRoute;
    };
}

export default resolveRoute;