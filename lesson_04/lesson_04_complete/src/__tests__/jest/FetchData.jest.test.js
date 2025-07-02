//fetchData.test.js
const axios = require('axios');
const fetchData = require('../../fetchData');

jest.mock('axios');
test('fetches data from API', async () => {
  const data = {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  };
  axios.get.mockResolvedValue({ data });
  const result = await fetchData();
  expect(result).toEqual(data);
});