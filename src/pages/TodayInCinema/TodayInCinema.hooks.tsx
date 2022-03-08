import moment from "moment";
import { useGetPremieresQuery } from "redux/films/films.api";
import { monthsValuesEn } from "utils/constants/months";
import { useCurrentMonthAndYear } from "utils/hooks/date";

export const useAlreadyInCinemaFilms = () => {
  const now = moment().locale('en');
  const { month: monthNumber, year } = useCurrentMonthAndYear();
  const { data: filmList } = useGetPremieresQuery({ year, month: monthsValuesEn[monthNumber] });

  if (filmList) {
    return filmList.filter((film) => moment(film.premiereRu).isSameOrBefore(now))
  }
}
