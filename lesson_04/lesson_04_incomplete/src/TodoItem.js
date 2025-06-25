export class TodoItem {
  constructor(text, status = 'pending') {
    if (typeof text !== 'string' || !text.trim()) {
      throw new Error('Text must be a non-empty string')
    }
    if (!['pending', 'completed'].includes(status)) {
      throw new Error('Invalid status')
    }
    this.text = text
    this.status = status
  }

  setStatus(status) {
    if (!['pending', 'completed'].includes(status)) {
      throw new Error('Invalid status')
    }
    this.status = status
  }

  getText() {
    return this.text
  }

  getStatus() {
    return this.status
  }
} 