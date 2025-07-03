const axios = require('axios');

async function fetchData() {
  const response = await axios.get('some url');
  return response.data;
}

module.exports = fetchData;