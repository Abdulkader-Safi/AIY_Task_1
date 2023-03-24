import { Component, Input, OnInit } from '@angular/core';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-data-filter',
  templateUrl: './data-filter.component.html',
  styleUrls: ['./data-filter.component.scss'],
})
export class DataFilterComponent implements OnInit {
  num1 = 10;
  num2 = 10;
  _step = 1;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;

  ngOnInit(): void {}

  incrementNum1Value(step: number = 1): void {
    const inputValue = this.num1 + step;

    this.num1 = inputValue;
  }

  incrementNum2Value(step: number = 1): void {
    const inputValue = this.num2 + step;

    this.num2 = inputValue;
  }
}
