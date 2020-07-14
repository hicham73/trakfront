
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';
import { AgmCoreModule } from '@agm/core';
// import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MyBarChartComponent } from './components/chart-bar/chart-bar.component';
import { MySmallMapComponent } from './components/map/map.component';
import { ReportSampleComponent } from './components/report-sample/report-sample.component';
import { FormProducteurComponent } from './components/form-producteur/form-producteur.component';
import { MainComponent } from './components/main/main.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { FormSample1Component } from './components/form-sample1/form-sample1.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MyBarChartComponent,
    MySmallMapComponent,
    ReportSampleComponent,
    FormProducteurComponent,
    MainComponent,
    InscriptionComponent,
    FormSample1Component
    // HttpClientModule
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    AppRoutingModule,    
    // ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCDTdtGD64ASXwhuGE8Nc2slGNJ-q2B0w4'
    }), GraphQLModule, HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
