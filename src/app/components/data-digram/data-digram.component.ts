import { Component, Input, ElementRef, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-data-digram',
  templateUrl: './data-digram.component.html',
  styleUrls: ['./data-digram.component.scss'],
})
export class DataDigramComponent implements OnInit {
  dataArray: any = [];
  chart: any;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    Chart.register(...registerables);
    this.createChart();
  }

  createChart() {
    const ctx = this.elementRef.nativeElement.querySelector(`#area-chart`);

    this.chart = new Chart(ctx, {
      type: 'line',

      data: {
        // values on X-Axis
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: 'checkouts',
            data: [
              1678371122633, 1678351122633, 1678371121633, 1678343121633,
              1678375121633, 1678377121633, 1678371122633, 1678351122633,
              1678371121633, 1678343121633, 1678375121633, 1678377121633,
            ],
            backgroundColor: 'rgba(32, 71, 52,.5)',
            fill: true,
          },
          {
            label: 'failures',
            data: [
              1678371122633, 1678351122633, 1678372121633, 1678375121633,
              1678377121633, 1678378121633, 1678371122633, 1678351122633,
              1678372121633, 1678375121633, 1678377121633, 1678378121633,
            ],
            backgroundColor: 'rgba(60, 31, 36,.5)',
            fill: true,
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
