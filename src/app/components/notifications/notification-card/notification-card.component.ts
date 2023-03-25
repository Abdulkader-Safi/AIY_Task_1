import { Component } from '@angular/core';

@Component({
  selector: 'app-notification-card',
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.scss'],
})
export class NotificationCardComponent {
  photoPath = '../../../../assets/SB Dunk Neckface.png';
  statusTitle = 'Successfully Check Out';
  productName = 'Nike SB Dunk Low Pro';
  storeName = 'NeckFace';
  productPrice = 11;
}
