import moment from "moment";

export const useCurrentMonthAndYear = () => {
  const now = moment().locale('en');
  const month = +now.format('M') - 1;
  const year = +now.format('yyyy');
  return { month, year };
}
