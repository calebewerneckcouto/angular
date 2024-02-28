import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { UserChart } from '../model/UserChart';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-char.component .html',
  styleUrls: ['./bar-char.component.css']
})
export class BarChartComponent implements OnInit {
  userChart = new UserChart();

  constructor (private usuarioService:UsuarioService){}
ngOnInit(): void {
  this.usuarioService.carregarGrafico().subscribe(data => {
    this.userChart = data;
    this.barChartLabels = this.userChart.nome.split(',');

    var arraySalario = JSON.parse('[' + this.userChart.salario + ']');
     this.barChartData = [
    { data: arraySalario, label: 'Salário Usuario' }
  ];


  });
}
  BarChartOptions: ChartOptions = {
    responsive :true,
  };

  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];


  barChartData: ChartDataSets[] = [
    { data: [], label: 'Salário Usuario' }
  ];


}
