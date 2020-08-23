import { Component, OnInit } from '@angular/core';
import { GetVehiculesQuery, UpdateVehiculeQuery, CreateVehiculeQuery, DeleteVehiculeQuery } from '../../graphql/queries'
import { Vehicule } from '../../models/vehicule'
import { Apollo } from 'apollo-angular'
import { TransporteurStoreService } from 'src/app/services/transporteur-store.service';

@Component({
  selector: 'app-vehicule-detail',
  templateUrl: './vehicule-detail.component.html',
  styleUrls: ['./vehicule-detail.component.css']
})
export class VehiculeDetailComponent implements OnInit {

  private apollo: Apollo
  private view = 1;

  private store: TransporteurStoreService

  constructor(apollo: Apollo, store: TransporteurStoreService) {
    this.apollo = apollo
    this.store = store
  }

  createVehicule() {
    console.log('creating vehicule...');

    delete this.store.vehicule['__typename']; // avoid a problem, will find a better solution

    this.apollo.mutate({
      mutation: CreateVehiculeQuery,
      variables: { vehiculeInput: this.store.vehicule}
    }).subscribe(a => {
      console.log('vehicule created');
    });

  } 

  updateVehicule() {
    delete this.store.vehicule['__typename']; // see create vehicule

    this.apollo.mutate({
      mutation: UpdateVehiculeQuery,
      variables: { vehiculeInput: this.store.vehicule}
    }).subscribe(u => {
      console.log(u);
    });

  }

  
  upsertVehicule() {

    delete this.store.vehicule['__typename']; // avoid a problem, will find a better solution
    delete this.store.vehicule.image['__typename']; // avoid a problem, will find a better solution

    if(!this.store.vehicule.id) {
      console.log('creating vehicule...');
      this.apollo.mutate({
        mutation: CreateVehiculeQuery,
        variables: { vehiculeInput: this.store.vehicule}
      }).subscribe(res => {
        let v = res['data']['createVehicule'] as Vehicule;
        console.log('vehicule created');
        console.log(v);
        this.store.vehicule = v;
        this.store.vehicules.push(v);

      });
    } else {
      console.log('updating vehicule...');
      this.apollo.mutate({
        mutation: UpdateVehiculeQuery,
        variables: { vehiculeInput: this.store.vehicule}
      }).subscribe(u => {


        console.log(u);
      });
  
    }


  }

  deleteVehicule() {
    let id = this.store.vehicule.id;
    if(!this.store.vehicule.id) {
      alert('select vehicule');
      return;
    }

    this.apollo.mutate({
      mutation: DeleteVehiculeQuery,
      variables: { id: this.store.vehicule.id}
    }).subscribe(u => {
      let idx = this.store.vehicules.findIndex(x => x.id == id);
      this.store.vehicules.splice(idx+1,1);
      if(this.store.vehicules.length > 0)
        this.store.vehicule = this.store.vehicules[0];

      console.log(u);
    });

  }

  edit(v: Vehicule): void {
    // this.view = 2;
    this.store.vehicule = v;
  }

  addVehicule(): void {
    this.store.vehicule = new Vehicule();
  }



  ngOnInit(): void {
  }

}
