
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import { NotificationService } from './services/notification.service';

const n = new NotificationService();
n.notify({title: 'title', body: 'message'});
