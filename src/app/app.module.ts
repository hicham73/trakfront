
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
// import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MySmallMapComponent } from './components/map/map.component';
import { ReportSampleComponent } from './components/report-sample/report-sample.component';
import { MainComponent } from './components/main/main.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { TransporteurComponent } from './components/transporteur/transporteur.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { VehiculeComponent } from './components/vehicule/vehicule.component';
import { TransporteurDetailComponent } from './components/transporteur-detail/transporteur-detail.component';
import { ImageComponent } from './components/image/image.component';
import { TransporteurListComponent } from './components/transporteur-list/transporteur-list.component';
import { VehiculeDetailComponent } from './components/vehicule-detail/vehicule-detail.component';
import { VehiculeListComponent } from './components/vehicule-list/vehicule-list.component';
import { VehiculeRouteComponent } from './components/vehicule-route/vehicule-route.component';
import { MesencheresComponent } from './components/mesencheres/mesencheres.component';




@NgModule({
  declarations: [
    AppComponent,
    MySmallMapComponent,
    ReportSampleComponent,
    MainComponent,
    InscriptionComponent,
    TransporteurComponent,
    VehiculeComponent,
    TransporteurDetailComponent,
    ImageComponent,
    TransporteurListComponent,
    VehiculeDetailComponent,
    VehiculeListComponent,
    VehiculeRouteComponent,
    MesencheresComponent


    // HttpClientModule
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    AppRoutingModule, 
    NgImageSliderModule,
    // ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCDTdtGD64ASXwhuGE8Nc2slGNJ-q2B0w4'
    }), GraphQLModule,
    HttpClientModule,
    AgmDirectionModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
