import { Component } from '@angular/core';
import { single, multi } from '../../../assets/data';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss'
})
export class GraphComponent {


  selectedTip: string = 'overall';
  multi: any[] = [];































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



  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  // showYAxisLabel: boolean = true;
  // showXAxisLabel: boolean = true;
  // xAxisLabel: string = 'Year';
  // yAxisLabel: string = 'Population';
  timeline: boolean = true;

colorScheme: any = {
  domain: ['#5AA454', '#A10A28', '#C7B42C', '#2196F3','#AAAAAA', '#9C27B0' ] // цвета для каждой секции IELTS
};



constructor() {

  Object.assign(this, { single }); 
  Object.assign(this, { multi });
  this.single.push({ name: 'Overall', value: this.calculateOverallScore() });
}

calculateIELTSBand(score: number | "not attend"): number {
  if (score === "not attend") {
      return 0;
  }

  if (score >= 39) return 9.0;
  if (score >= 37) return 8.5;
  if (score >= 35) return 8.0;
  if (score >= 33) return 7.5;
  if (score >= 30) return 7.0;
  if (score >= 27) return 6.5;
  if (score >= 23) return 6.0;
  if (score >= 19) return 5.5;
  if (score >= 15) return 5.0;
  if (score >= 13) return 4.5;
  if (score >= 10) return 4.0;
  if (score >= 8) return 3.5;
  if (score >= 7) return 3.0;
  if (score >= 4) return 2.5;

  // Any score below 4
  return 1.0;
}





onActivate(data: any): void {
  console.log('Activate', JSON.parse(JSON.stringify(data)));
}

onDeactivate(data: any): void {
  console.log('Deactivate', JSON.parse(JSON.stringify(data)));
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
