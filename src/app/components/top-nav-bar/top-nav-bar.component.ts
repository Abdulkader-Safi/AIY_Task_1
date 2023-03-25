import { Component } from '@angular/core';
import { ElectronService } from './../../core/services/electron/electron.service';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss'],
})
export class TopNavBarComponent {
  // remote: Electron.App = electron.remote;

  constructor(private electron: ElectronService) {}

  closeWindow() {
    this.electron.ipcRenderer.send('window-closed');
  }

  minimizeWindow() {
    this.electron.ipcRenderer.send('minimize-window');
  }
}
