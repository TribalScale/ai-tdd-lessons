const Fetcher = require('../Fetcher');

describe('Fetcher', () => {
  let fetcher;

  beforeEach(() => {
    fetcher = new Fetcher();
    jest.spyOn(fetcher, 'checkForSomething');
  })

  it('should return api data', async () => {

    const result = await fetcher.fetchData(true);

    expect(fetcher.checkForSomething).toHaveBeenCalled();

  });
});