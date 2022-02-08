import { PremiereGetResponseParams } from "./films.type";

const controller = 'films';

const urls = {
  premieres: `${controller}/premieres`,
};

export const filmsEndpoints = {
  getPremieres: (params: PremiereGetResponseParams) => ({ 
    url: urls.premieres, 
    params 
  }),
} 