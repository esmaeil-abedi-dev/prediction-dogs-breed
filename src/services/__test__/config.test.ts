import { baseAppURL } from '../config';

test('test base api address', () => {
  expect(baseAppURL).toEqual('https://dog.ceo/api');
});
