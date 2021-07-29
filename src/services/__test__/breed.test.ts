import breedServiceProvider from '../breed';
import MockecdAxios from './__mock__/axios';

describe('test breed services', () => {
  test('fetch successfully data from getAllBreedTypes', async () => {
    const data = {
      message: {
        affenpinscher: [],
        african: [],
        airedale: [],
        akita: [],
        appenzeller: [],
      },
      status: 'success',
    };
    MockecdAxios.get('breeds_list');
    expect(breedServiceProvider.getAllBreedTypes()).resolves.toStrictEqual(
      data,
    );
  });

  test('fetch successfully data from getAllImagesByBreedType', async () => {
    const data = {
      message: [
        'https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg',
        'https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg',
        'https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg',
      ],
      status: 'success',
    };
    MockecdAxios.get('breeds_image');
    expect(
      breedServiceProvider.getAllImagesByBreedType('hound'),
    ).resolves.toStrictEqual(data);
  });

  test('fetches successfully data from getRandomImagesByBreedType', async () => {
    const data = {
      message: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg',
      status: 'success',
    };
    MockecdAxios.get('random_image');
    expect(
      breedServiceProvider.getRandomImagesByBreedType('hound'),
    ).resolves.toStrictEqual(data);
  });
});
