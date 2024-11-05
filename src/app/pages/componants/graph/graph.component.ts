import { Component } from '@angular/core';
import { single } from '../../../assets/data';
import { Color, ScaleType } from '@swimlane/ngx-charts';

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



  single: any[] = []; 
  view: [number, number] = [380, 400];
  overallScore: number = 0;

// параметры диаграммы
showXAxis = true;
showYAxis = true;
gradient = false;
showLegend = false;
showXAxisLabel = true;
xAxisLabel = 'IELTS Section';
showYAxisLabel = true;
yAxisLabel = 'Score';

colorScheme: any = {
  domain: ['#5AA454', '#A10A28', '#C7B42C', '#2196F3','#AAAAAA', '#9C27B0' ] // цвета для каждой секции IELTS
};



constructor() {
  Object.assign(this, { single }); 
  this.single.push({ name: 'Overall', value: this.calculateOverallScore() });
}


calculateOverallScore(): any {
  // суммируем все значения и делим на их количество
  const totalScore = this.single.reduce((sum, section) => sum + section.value, 0);
  const averageScore = totalScore / this.single.length;

  // округляем до ближайшего 0.5
  return this.overallScore = Math.round(averageScore * 2) / 2;
}

onSelect(event: any) {
  console.log(event);
}

}
