import { KinopoiskID } from "backend/models/FilmDto";
import { PremiereGetResponseParams } from "./films.type";

const controller = 'films';

const urls = {
  films: `${controller}`,
  premieres: `${controller}/premieres`,
};

export const filmsEndpoints = {
  getFilm: (id: KinopoiskID) => ({
    url: `${urls.films}/${id}`,
  }),
  getPremieres: (params: PremiereGetResponseParams) => ({ 
    url: urls.premieres, 
    params,
  }),
}
