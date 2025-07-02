const Fetcher = require('../../Fetcher');

describe('Fetcher', () => {
  let fetcher;

  beforeEach(() => {
    fetcher = new Fetcher();
    jest.spyOn(fetcher, 'fetchData2').mockImplementation(() => Promise.resolve({ data: 'mocked data' }));
  });

  it('should return api data', async () => {
    const result = await fetcher.fetchData2();
    expect(result).toEqual({ data: 'mocked data' });
  });
});