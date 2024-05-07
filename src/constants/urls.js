const baseURL='https://swapi.dev/api/';

const people='people';
const films='/films'

const urls={
    people:{
        base:people,
        byId:(id)=>`${people}/${id}`

    },
    film:{
        base: films,
        byId:(id)=>`${films}/${id}`
    }
}

export {
    baseURL, urls
}