// Utilities
import axios, { AxiosInstance } from 'axios';
// Constants
import { baseAppURL, defaultAccessKey } from './config';

interface Config {
  accessKey?: string;
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
   * @param {string} AccessKey - access key for calling a service
   */
  constructor({
    suffix = '',
    baseURL = baseAppURL,
    accessKey = defaultAccessKey,
  }: Config) {
    this.httpService = axios.create({
      baseURL: `${baseURL}/${suffix}`,
      timeout: 3000,
    });

    this.httpService.defaults.headers.common.Authorization = `Client-ID ${accessKey}`;
  }
}
export default HttpServiceProvider;
