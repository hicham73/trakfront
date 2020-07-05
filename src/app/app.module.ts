
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';
import { AgmCoreModule } from '@agm/core';
// import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MyBarChartComponent } from './chart-bar/chart-bar.component';
import { MySmallMapComponent } from './map/map.component';
import { ReportSampleComponent } from './report-sample/report-sample.component';
import { FormProducteurComponent } from './form-producteur/form-producteur.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MyBarChartComponent,
    MySmallMapComponent,
    ReportSampleComponent,
    FormProducteurComponent,
    MainComponent
    // HttpClientModule
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    AppRoutingModule,    
    // ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCDTdtGD64ASXwhuGE8Nc2slGNJ-q2B0w4'
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
