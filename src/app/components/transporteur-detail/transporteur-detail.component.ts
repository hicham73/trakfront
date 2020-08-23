import { Component, OnInit } from '@angular/core';
import { Transporteur } from 'src/app/models/transporteur';
import { Apollo } from 'apollo-angular'
import { TransporteurStoreService } from '../../services/transporteur-store.service'
import { CreateTransporteurQuery, UpdateTransporteurQuery, DeleteTransporteurQuery } from 'src/app/graphql/queries';


@Component({
  selector: 'app-transporteur-detail',
  templateUrl: './transporteur-detail.component.html',
  styleUrls: ['./transporteur-detail.component.css']
})

export class TransporteurDetailComponent implements OnInit {

  private apollo: Apollo;
  private store: TransporteurStoreService
  
  constructor(apollo: Apollo, store: TransporteurStoreService) { 
    this.apollo = apollo
    this.store = store
  }

  upsertTransporteur() {
    delete this.store.transporteur['__typename']; // avoid a problem, will find a better solution
    if(!this.store.transporteur.id) {
      console.log('creating transporteur...');
      this.apollo.mutate({
        mutation: CreateTransporteurQuery,
        variables: { transporteurInput: this.store.transporteur}
      }).subscribe(res => {
        let v = res['data']['createTransporteur'] as Transporteur;
        console.log('transporteur created');
        console.log(v);
        this.store.transporteur = v;
        this.store.transporteurs.push(v);

      });
    } else {
      this.apollo.mutate({
        mutation: UpdateTransporteurQuery,
        variables: { transporteurInput: this.store.transporteur}
      }).subscribe(u => {
        console.log(u);
      });
  
    }


  }


  deleteTransporteur() {
    let id = this.store.transporteur.id;
    if(!this.store.transporteur.id) {
      alert('select transporteur');
      return;
    }

    this.apollo.mutate({
      mutation: DeleteTransporteurQuery,
      variables: { id: this.store.transporteur.id}
    }).subscribe(u => {
      let idx = this.store.transporteurs.findIndex(x => x.id == id);
      this.store.transporteurs.splice(idx+1,1);
      if(this.store.transporteurs.length > 0)
        this.store.transporteur = this.store.transporteurs[0];

      console.log(u);
    });

  }

  edit(v: Transporteur): void {
    this.store.view = 2;
    this.store.transporteur = v;
  }

  addTransporteur(): void {
    this.store.transporteur = new Transporteur();
    this.store.view = 2;
  }

  ngOnInit(): void {
    
  }

}
