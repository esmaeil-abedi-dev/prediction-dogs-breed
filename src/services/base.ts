// Utilities
import axios, { AxiosInstance } from 'axios';
// Constants
import { baseAppURL } from './config';

interface Config {
  suffix?: string;
  baseURL?: string;
}

/**
 * A HTTP service which created by Axios instance creator
 *
 * @abstract
 */
class HttpServiceProvider {
  httpService: AxiosInstance;

  /**
   * Create a new instance of the Axios with custom config.
   * @constructor
   * @param {string} suffix - suffix for each instance
   * @param {string} baseURL - base url api for calling a service
   */
  constructor({ suffix = '', baseURL = baseAppURL }: Config) {
    this.httpService = axios.create({
      baseURL: `${baseURL}/${suffix}`,
      timeout: 3000,
    });
  }
}
export default HttpServiceProvider;
