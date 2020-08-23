import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MySmallMapComponent } from './components/map/map.component';
import { ReportSampleComponent } from './components/report-sample/report-sample.component';
import { MainComponent } from './components/main/main.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { TransporteurComponent } from './components/transporteur/transporteur.component';
import { VehiculeDetailComponent } from './components/vehicule-detail/vehicule-detail.component';
import { VehiculeListComponent } from './components/vehicule-list/vehicule-list.component';
import { TransporteurDetailComponent } from './components/transporteur-detail/transporteur-detail.component';
import { TransporteurListComponent } from './components/transporteur-list/transporteur-list.component';
import { ImageComponent } from './components/image/image.component'
<<<<<<< HEAD
import { MesencheresComponent } from './components/mesencheres/mesencheres.component';
import { PropositionsComponent } from './components/propositions/propositions.component';


=======
import { VehiculeRouteComponent } from './components/vehicule-route/vehicule-route.component';
>>>>>>> f308dc0568711997116deb1d70e4df523e3c6311


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'map', component: MySmallMapComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'report', component: ReportSampleComponent },
  { path: 'image', component: ImageComponent },
  { path: 'transporteurs', component: TransporteurListComponent },
  { path: 'vehicule', component: VehiculeDetailComponent },
  { path: 'transporteur/:id', 
    component: TransporteurComponent,
    children: [
      { path: '', component: TransporteurDetailComponent },
      { path: 'enroute', component: VehiculeRouteComponent },
      { path: 'vehicules', component: VehiculeListComponent },
      { path: 'vehicule', 
        component: VehiculeDetailComponent,
        children: [
          { path: 'detail', component: VehiculeDetailComponent}
        ]
      },
      { path: 'voyages', component: MySmallMapComponent },
    ] 
<<<<<<< HEAD
  },
  { path: 'mesencheres', component: MesencheresComponent },
  { path: 'propositions', component: PropositionsComponent },

=======
  }
>>>>>>> f308dc0568711997116deb1d70e4df523e3c6311
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
