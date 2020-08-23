import { Component, OnInit } from '@angular/core';
import { GetVehiculesQuery, UpdateVehiculeQuery, CreateVehiculeQuery, DeleteVehiculeQuery } from '../../graphql/queries'
import { Vehicule } from '../../models/vehicule'
import { Apollo } from 'apollo-angular'
import { TransporteurStoreService } from 'src/app/services/transporteur-store.service';

import { Router, ActivatedRoute } from '@angular/router'
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-vehicule-list',
  templateUrl: './vehicule-list.component.html',
  styleUrls: ['./vehicule-list.component.css']
})
export class VehiculeListComponent implements OnInit {

  private apollo: Apollo
  private router: Router;
  private store: TransporteurStoreService
  private route: Route

  constructor(apollo: Apollo, router: Router, route: ActivatedRoute, store: TransporteurStoreService) {
    this.apollo = apollo
    this.store = store
    this.router = router
    this.route = route
  }

  ngOnInit(): void {
    this.store.vehicule = new Vehicule();
    this.apollo.watchQuery({  
          query: GetVehiculesQuery,
          variables: {transporteurId: this.store.transporteur.id}
        }).valueChanges.subscribe( ({data}) => {
      this.store.vehicules = data['getVehicules'];
      console.log('goooot vehicules')
      console.log(this.store.vehicules);
    })
  }

  edit(v) {
    this.store.vehicule = v;
    this.router.navigate(['transporteur/' + this.store.transporteur.id, 'vehicule'])
    
  }
  nav(page) {
    this.router.navigate([page])
  }

}
