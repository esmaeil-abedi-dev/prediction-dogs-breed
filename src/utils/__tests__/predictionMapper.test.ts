import { predictionMapper } from '../predictionMapper';

describe('Test the prediction mapper utils', (): void => {
  test('test return empty array', (): void => {
    const result = predictionMapper(['pred1,pred2'], ['pred3', 'pred4']);
    expect(result).toStrictEqual([]);
  });
  test('test return one match array', (): void => {
    const result = predictionMapper(['pred1,pred2'], ['pred1', 'pred4']);
    expect(result).toStrictEqual([]);
  });
  test('test return full match array', (): void => {
    const result = predictionMapper(['pred1,pred2'], ['pred1', 'pred2']);
    expect(result).toStrictEqual([]);
  });
});
