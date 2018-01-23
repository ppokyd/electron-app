import { app, Menu, Tray } from 'electron';
import * as path from 'path';

export class TrayComponent {
  private tray = null;

  constructor() {
    this.tray = new Tray(path.join(__dirname, '../../favicon.png'));

    app.on('ready', () => {
      const contextMenu = Menu.buildFromTemplate([
        {label: 'Check-In', type: 'radio'},
        {label: 'Check-Out', type: 'radio'},
      ]);
      this.tray.setToolTip('This is my application.');
      this.tray.setContextMenu(contextMenu);
    });
  }

  getTray() {
    return this.tray;
  }
}
