import { Component } from '@angular/core';
import { multi } from '../../../assets/data';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss'
})
export class GraphComponent {
  firstRange: number[] = Array.from({ length: 40 }, (_, i) => i + 1); // Generates 1 to 40
  secondRange: number[] = Array.from({ length: 19 }, (_, i) => i * 0.5); // Generates 0, 0.5, 1, ..., 9

  firstNumber: number | null = null;
  secondNumber: number | null = null;
  thirdNumber: number | null = null;
  fourthNumber: number | null = null;



  multi: any[] = [];
  view: [number, number] = [380, 400];

  constructor() {
    Object.assign(this, { multi })
  }

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Population';
  legendTitle: string = 'Years';

  colorScheme: any = {
    domain: ['#5AA454', '#C7B42C', '#88C273']
  };



 onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
