// Axios Types
import { AxiosResponse } from 'axios';
// Services
import HttpServiceProvider from '../base';
import {
  BreedsImagesApiResponse,
  BreedsListApiResponse,
  RandomImageApiResponse,
} from '../types';

/**
 * Breed services
 */
class BreedServiceProvider extends HttpServiceProvider {
  /**
   * Create a new instance of the HttpServiceProvider.
   * @constructor
   */
  constructor() {
    super({ suffix: '' });
  }

  /**
   * Get the list of all dogs breed
   * @returns {Promise} A promise object that represents the array of dog's breeds  as messages and status of the response
   */
  getAllBreedTypes(): Promise<AxiosResponse<BreedsListApiResponse>> {
    return this.httpService.get('breeds/list/all');
  }

  /**
   * Get the list of all dogs based on breed type
   * @param {string} breedType - breedType's dog.
   * @returns {Promise} A promise object that represents the array of dog's image URL as messages and status of the response
   */
  getAllImagesByBreedType(
    breedType: string,
  ): Promise<AxiosResponse<BreedsImagesApiResponse>> {
    return this.httpService.get(`breed/${breedType}/images`);
  }

  /**
   * Get a random dogs image based on breed type
   * @param {string} breedType - breedType's dog.
   * @returns {Promise} A promise object that represents a random dog's image URL as messages and status of the response
   */
  getRandomImagesByBreedType(
    breedType: string,
  ): Promise<AxiosResponse<RandomImageApiResponse>> {
    return this.httpService.get(`breed/${breedType}/images/random`);
  }
}

const breedServiceProvider = new BreedServiceProvider();

export default breedServiceProvider;
