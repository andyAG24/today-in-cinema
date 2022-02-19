import moment from "moment";
import { useGetPremieresQuery } from "redux/films/films.api";
import { monthsValuesEn } from "utils/constants/months";

export const useAlreadyInCinemaFilms = () => {
  const now = moment().locale('en');
  const monthNumber = +now.format('M') - 1;
  const year = +now.format('yyyy');
  
  const { data: filmList } = useGetPremieresQuery({ year, month: monthsValuesEn[monthNumber] });

  if (filmList) {
    return filmList.filter((film) => moment(film.premiereRu).isSameOrBefore(now))
  }
}
