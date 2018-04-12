import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pieChartOptions:any = {
    legend: { 
      display:false,
      position: 'bottom',
      fontFamily: "'Open Sans',sans-serif",
      fontColor: '#ACACAC',
      padding: '10',
      usePointStyle:true,
    },
    pieceLabel: {
      render: 'value'+'%',
      fontColor: '#949494',
      fontFamily: "'Open Sans',sans-serif",
      fontSize: 16,
      position: 'outside'
    }, 
    responsive: true,
    maintainAspectRatio: false,
  }
  pieChartOptionsWithLegend:any = {
    legend: { 
      display:true,
      position: 'bottom',
      fontFamily: "'Open Sans',sans-serif",
      fontColor: '#ACACAC',
      padding: '10',
      usePointStyle:true,
    },
    pieceLabel: {
      render: 'value'+'%',
      fontColor: '#949494',
      fontFamily: "'Open Sans',sans-serif",
      fontSize: 16,
      position: 'outside'
    }, 
    responsive: true,
    maintainAspectRatio: false,
  }
}
