const Sorter = require('../src/Sorter');

describe('Sorter', () => {
  it('should sort an array of numbers in ascending order', () => {
    const arr = [5, 2, 9, 1, 5, 6];
    expect(Sorter.sort(arr)).toEqual([1, 2, 5, 5, 6, 9]);
  });

  it('should handle an empty array', () => {
    expect(Sorter.sort([])).toEqual([]);
  });

  it('should handle an array with one element', () => {
    expect(Sorter.sort([42])).toEqual([42]);
  });

  it('should handle an array with negative numbers', () => {
    expect(Sorter.sort([3, -2, -7, 4, 0])).toEqual([-7, -2, 0, 3, 4]);
  });

  it('should not mutate the original array', () => {
    const arr = [3, 1, 2];
    Sorter.sort(arr);
    expect(arr).toEqual([3, 1, 2]);
  });
});
