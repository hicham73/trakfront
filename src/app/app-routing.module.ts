import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyBarChartComponent } from './components/chart-bar/chart-bar.component';
import { MySmallMapComponent } from './components/map/map.component';
import { ReportSampleComponent } from './components/report-sample/report-sample.component';
import { FormProducteurComponent } from './components/form-producteur/form-producteur.component';
import { MainComponent } from './components/main/main.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { FormSample1Component } from './components/form-sample1/form-sample1.component';
import { TransporteurComponent } from './components/transporteur/transporteur.component';




const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'map', component: MySmallMapComponent },
  { path: 'chart', component: MyBarChartComponent },
  { path: 'form', component: FormProducteurComponent },
  { path: 'form1', component: FormSample1Component },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'report', component: ReportSampleComponent },
  { path: 'transporteur', component: TransporteurComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
