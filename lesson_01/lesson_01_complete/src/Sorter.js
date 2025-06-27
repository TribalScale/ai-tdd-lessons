export class Sorter {

  constructor(numbers) {
    this.numbers = numbers
  }

  getNumbers() {
    return this.numbers
  }

  sort() {
    return this.numbers.sort((a, b) => a - b)
  }
}