//fetchData.test.js
const axios = require('axios');

jest.mock('axios');
test('fetches data from API', async () => {
  const data = {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  };

  axios.get.mockResolvedValue({ data });

  const response = await axios.get('some url');

  expect(response.data).toEqual(data);
});