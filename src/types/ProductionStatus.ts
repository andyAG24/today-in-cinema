export const productionStatusValues = [
  'FILMING', 
  'PRE_PRODUCTION', 
  'COMPLETED', 
  'ANNOUNCED', 
  'UNKNOWN', 
  'POST_PRODUCTION',
] as const;

export type ProductionStatus = typeof productionStatusValues[number];
