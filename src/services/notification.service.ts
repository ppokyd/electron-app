import * as path from 'path';

export class NotificationService {

  constructor() {
    if (Notification['permission'] !== 'granted') {
      Notification.requestPermission();
    }
  }

  /**
   * Example of options parameter
   * {
   *   title: "Title",
   *   body: "Short message plus a custom content image",
   *   icon: path.join(__dirname, 'icon.png')
   * }
   */
  notify(options) {
    new Notification(options.title, options);
  }
}
