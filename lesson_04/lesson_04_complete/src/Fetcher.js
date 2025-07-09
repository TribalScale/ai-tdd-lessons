class Fetcher {
  fetchData(boolean) {
    if (boolean) {
      this.checkForSomething();
    }

    return Promise.resolve({ data: 'real data' });
  }

  checkForSomething() {

  }
}

module.exports = Fetcher;
