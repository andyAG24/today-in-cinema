import { Country, Genre } from "types";

export interface PremiereResponseItem {
  kinopoiskId: number;
  nameRu: string;
  nameEn: string;
  year: number;
  posterUrl: string;
  posterUrlPreview: string;
  countries: Country[];
  genres: Genre[];
  duration: number;
  premiereRu: string;
}
