export type stringArray = string[];

/**
 *
 * @param predictions
 * @param breedsList
 * @returns list of predictios breeds that are in the breedsList
 */
export const predictionMapper = (
  predictions: stringArray,
  breedsList: stringArray,
): stringArray =>
  predictions.filter((prediction: string) => breedsList.includes(prediction));
