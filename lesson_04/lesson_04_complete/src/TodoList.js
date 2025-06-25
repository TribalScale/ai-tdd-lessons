export class TodoList {
  constructor() {
    this.items = []
  }

  add(item) {
    this.items.push(item)
  }

  remove(index) {
    if (index < 0 || index >= this.items.length) {
      throw new Error('Invalid index')
    }
    this.items.splice(index, 1)
  }

  get(index) {
    if (index < 0 || index >= this.items.length) {
      throw new Error('Invalid index')
    }
    return this.items[index]
  }

  getAll() {
    return [...this.items]
  }

  sortByStatus() {
    // 'pending' at the bottom
    this.items.sort((a, b) => {
      if (a.getStatus() === 'pending' && b.getStatus() !== 'pending') return 1
      if (a.getStatus() !== 'pending' && b.getStatus() === 'pending') return -1
      return 0
    })
  }
} 