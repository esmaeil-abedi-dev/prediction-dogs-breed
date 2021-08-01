import findText from '..';

describe('test replace harcode text', () => {
  test('test the return value for loading', () => {
    expect(findText('loading')).toEqual('Loading...');
  });

  test('test the return value for empty string', () => {
    expect(findText('')).toEqual('your key not found');
  });

  test('test the return value for not valid key ', () => {
    expect(findText('')).toEqual('your key not found');
  });
});
