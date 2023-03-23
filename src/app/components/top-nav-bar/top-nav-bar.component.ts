import { ElectronService } from './../../core/services/electron/electron.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss'],
})
export class TopNavBarComponent {
  constructor(private electron: ElectronService) {}

  closeWindow() {
    // this.electron.windowPage.getPrimaryDisplay().close();
    // this.electron.windowPage.getCurrentDisplay().close();
  }

  minimizeWindow() {
    // this.electron.windowPage.getCurrentDisplay().minimize();
  }
}
