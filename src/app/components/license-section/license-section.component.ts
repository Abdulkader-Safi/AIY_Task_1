import { Component } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-license-section',
  templateUrl: './license-section.component.html',
  styleUrls: ['./license-section.component.scss'],
})
export class LicenseSectionComponent {
  faEye = faEye;
}
