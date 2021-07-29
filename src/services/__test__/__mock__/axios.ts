import axios, { AxiosInstance } from 'axios';
import {
  BreedsImagesApiResponse,
  BreedsListApiResponse,
  RandomImageApiResponse,
} from '../../types';

const axiosBreedsListApiResponse: BreedsListApiResponse = {
  message: {
    affenpinscher: [],
    african: [],
    airedale: [],
    akita: [],
    appenzeller: [],
  },
  status: 'success',
};

const axiosBreedsImagesApiResponse: BreedsImagesApiResponse = {
  message: [
    'https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg',
    'https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg',
    'https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg',
  ],
  status: 'success',
};

const axiosRandomImageApiResponse: RandomImageApiResponse = {
  message: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg',
  status: 'success',
};

const axiosInstance: AxiosInstance = axios;

const exiosServices = {
  default: {
    create: jest.fn().mockImplementation(() => axiosInstance),
    get: jest.fn().mockImplementation((fetch_type) => {
      switch (fetch_type) {
        case 'breeds_list':
          return Promise.resolve(axiosBreedsImagesApiResponse);
        case 'breeds_image':
          return Promise.resolve(axiosBreedsListApiResponse);
        case 'random_image':
          return Promise.resolve(axiosRandomImageApiResponse);
        default:
          return Promise.resolve(null);
      }
    }),
  },
  create: jest.fn().mockImplementation(() => axiosInstance),
  get: jest.fn().mockImplementation((fetch_type) => {
    switch (fetch_type) {
      case 'breeds_list':
        return Promise.resolve(axiosBreedsImagesApiResponse);
      case 'breeds_image':
        return Promise.resolve(axiosBreedsListApiResponse);
      case 'random_image':
        return Promise.resolve(axiosRandomImageApiResponse);
      default:
        return Promise.resolve(null);
    }
  }),
};

export default exiosServices;
