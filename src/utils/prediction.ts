const mobilenet = require('@tensorflow-models/mobilenet');

interface IPrediction {
  className: string;
  probability: number;
}

/**
 * Prediction class recieve an image html element and make a prediction base on the image
 */
class Prediction {
  imageHTMLElement: HTMLImageElement;

  predictions: IPrediction[] = [];

  /**
   * Create a new instance of the Prediction.
   * @constructor
   * @param {File} imageHTMLElement - image html element for making prediction
   */
  constructor(imageHTMLElement: HTMLImageElement) {
    this.imageHTMLElement = imageHTMLElement;
  }

  async makePrediction() {
    const model = await mobilenet.load();
    this.predictions = await model.classify(this.imageHTMLElement);
  }

  getPredictions(): string[] {
    const tempPredictios = this.predictions.flatMap(
      (prediction: IPrediction) => {
        const classNameLowerCase = prediction.className.toLowerCase();
        let predictionNoComma: string = classNameLowerCase;
        while (predictionNoComma.includes(',')) {
          predictionNoComma = predictionNoComma.replace(',', '');
        }
        const predictionSplit = predictionNoComma.split(' ');
        return predictionSplit;
      },
    );
    return Array.from(new Set(tempPredictios));
  }
}

export default Prediction;
