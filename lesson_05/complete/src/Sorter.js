class Sorter {
  static sort(arr) {
    // Return a new sorted array, do not mutate the original
    return [...arr].sort((a, b) => a - b);
  }
}

module.exports = Sorter;
