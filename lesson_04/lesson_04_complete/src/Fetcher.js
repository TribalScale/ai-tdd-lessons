class Fetcher {
  fetchData() {
    return Promise.resolve({ data: 'real data' });
  }
}

module.exports = Fetcher;
