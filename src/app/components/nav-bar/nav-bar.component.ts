import { Component } from '@angular/core';
import {
  faList,
  faUser,
  faHouseUser,
  faWifi,
  faCalendar,
  faCheckCircle,
  faBoxOpen,
  faCog,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  faList = faList;
  faUser = faUser;
  faHouseUser = faHouseUser;
  faWifi = faWifi;
  faCalendar = faCalendar;
  faCheckCircle = faCheckCircle;
  faBoxOpen = faBoxOpen;
  faCog = faCog;
  faArrowUp = faArrowUp;
}
