import { Component, OnInit } from '@angular/core';
import { GetVehiculesQuery, UpdateVehiculeQuery, CreateVehiculeQuery, DeleteVehiculeQuery } from '../../graphql/queries'
import { Vehicule } from '../../models/vehicule'
import { Apollo } from 'apollo-angular'
import { TransporteurStoreService } from 'src/app/services/transporteur-store.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css']
})
export class VehiculeComponent implements OnInit {
  
  private apollo: Apollo
  private router: Router
  private store: TransporteurStoreService
  private vehicule: Vehicule
  
  constructor(apollo: Apollo, router: Router, store: TransporteurStoreService) {
    this.apollo = apollo
    this.store = store
    this.router = router

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

}
