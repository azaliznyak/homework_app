import {apiService} from "./apiService";
import {urls} from "../constants";

const peopleService={
    getAll:(page)=>apiService.get(urls.people.base, {params:{page}}),
    getAllFilms:()=>apiService.get(urls.film.base),
    getById:(id)=>apiService.get(urls.people.byId(id)),
    getByIdFilm:(id)=>apiService.get(urls.film.byId(id)),

}

export {
    peopleService
}