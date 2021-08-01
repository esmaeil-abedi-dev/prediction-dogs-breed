// Axios Types
import { AxiosResponse } from 'axios';
// Services
import HttpServiceProvider from '../base';
import { PhotoApiResponse, SearchPhotosApiResponse } from '../types';

/**
 * Photo services
 */
class PhotoServiceProvider extends HttpServiceProvider {
  /**
   * Create a new instance of the HttpServiceProvider.
   * @constructor
   */
  constructor() {
    super({ suffix: '' });
  }

  /**
   * Get all photos based on search keyword
   * @param {string} query - the search query.
   * @returns {Promise} A promise object that represents the results of search
   */
  searchPhotos(query: string): Promise<AxiosResponse<SearchPhotosApiResponse>> {
    return this.httpService.get(`search/photos${query}`);
  }

  /**
   * Get a single photo base on photo id
   * @param {string} PhotoId - id of photo.
   * @returns {Promise} A promise object that represents the single photo object
   */
  getPhoto(PhotoId: string): Promise<AxiosResponse<PhotoApiResponse>> {
    return this.httpService.get(`/photos/${PhotoId}`);
  }
}

const photoServiceProvider = new PhotoServiceProvider();

export default photoServiceProvider;
