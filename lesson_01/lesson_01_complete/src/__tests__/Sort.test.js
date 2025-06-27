import { Sorter } from '../Sorter'

describe('Sort', () => {

  it('should sort an array of numbers', () => {
    const sorter = new Sorter([3, 1, 2])
    sorter.sort()
    expect(sorter.getNumbers()).toEqual([1, 2, 3])
  })
})