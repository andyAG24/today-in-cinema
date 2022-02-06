export const filmTypeValues = [
  'FILM', 
  'VIDEO', 
  'TV_SERIES', 
  'MINI_SERIES', 
  'TV_SHOW',
] as const;

export type Film = typeof filmTypeValues[number];
