import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyBarChartComponent } from './chart-bar/chart-bar.component';
import { MySmallMapComponent } from './map/map.component';
import { ReportSampleComponent } from './report-sample/report-sample.component';
import { FormProducteurComponent } from './form-producteur/form-producteur.component';
import { MainComponent } from './main/main.component';



const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'map', component: MySmallMapComponent },
  { path: 'chart', component: MyBarChartComponent },
  { path: 'form', component: FormProducteurComponent },
  { path: 'report', component: ReportSampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
