export const queryBuilder = (
  query: string = 'cat',
  pageNumber: number = 1,
): string => `?query=${query}&page=${pageNumber}`;
