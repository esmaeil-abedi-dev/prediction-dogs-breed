import Prediction from '../prediction';

describe('Prediction Class', () => {
  it('We can check getPredictions function', () => {
    const mockImageElemet: HTMLImageElement = document.createElement('img');
    mockImageElemet.src = 'https://mockImage.com';
    const prediction = new Prediction(mockImageElemet);
    prediction.predictions = [
      { className: 'The, dog', probability: 0.45 },
      { className: 'Chow, chow Dog cat', probability: 0.45 },
      { className: 'The, second cat, birD', probability: 0.45 },
    ];
    const expectedResult = ['the', 'dog', 'chow', 'cat', 'second', 'bird'];
    const result = prediction.getPredictions();

    expect(result).toStrictEqual(expectedResult);
  });
});
