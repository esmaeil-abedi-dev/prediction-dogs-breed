// import { AxiosInstance } from 'axios';
import HttpServiceProvider from '../base';

jest.mock('../base');

test('test constructor', () => {
  // eslint-disable-next-line no-unused-vars
  const httpServer = new HttpServiceProvider({});
  expect(HttpServiceProvider).toHaveBeenCalled();
});

// test('axios create', () => {
//   const httpServer = new HttpServiceProvider({});
//   expect(httpServer.httpService).toBeInstanceOf(HttpServiceProvider);
// });
