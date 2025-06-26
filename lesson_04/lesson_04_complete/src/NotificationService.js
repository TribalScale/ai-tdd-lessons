export class NotificationService {
  notify(message) {
    // In real app, this could send an email, SMS, etc.
    // Here, just log or store the message
    console.log('Notification:', message)
  }

  async notifyAsync(message) {
    // Simulate async notification
    return new Promise(resolve => {
      setTimeout(() => {
        this.notify(message)
        resolve()
      }, 10)
    })
  }
} 