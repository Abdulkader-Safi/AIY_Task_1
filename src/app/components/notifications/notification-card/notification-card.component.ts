import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-card',
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.scss'],
})
export class NotificationCardComponent implements OnInit {
  @Input() productPrice = '11';
  @Input() payment = 'true';

  photoPath = '../../../../assets/SB Dunk Neckface.png';
  statusTitle = '';
  productName = 'Nike SB Dunk Low Pro';
  storeName = 'NeckFace';

  ngOnInit(): void {
    this.statusTitle =
      this.payment === 'true' ? 'Successfully Check Out' : 'Payment Error';
  }
}
