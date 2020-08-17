import { Component, OnInit, OnDestroy } from '@angular/core';
import { GetTransporteursQuery, UpdateTransporteurQuery, CreateTransporteurQuery, DeleteTransporteurQuery } from '../../graphql/queries'
import { Transporteur } from '../../models/transporteur'
import { Apollo } from 'apollo-angular'
import { Router } from '@angular/router'
import { TransporteurStoreService } from 'src/app/services/transporteur-store.service';
import { Observable } from 'apollo-link';


@Component({
  selector: 'app-transporteur-list',
  templateUrl: './transporteur-list.component.html',
  styleUrls: ['./transporteur-list.component.css']
})
export class TransporteurListComponent implements OnInit {
  private apollo: Apollo
  private router: Router
  private view = 1
  private store: TransporteurStoreService

  public transporteurs = []
  private transporteur: Transporteur
  private loading = false
  
  private file;
  private sub: Observable<any>;

  imageObject = [
    {
      image: '../../../assets/img/camion1.jpg',
      thumbImage: '../../../assets/img/camion1.jpg',
      title: 'type camion'
    }, 
    {
      image: '../../../assets/img/camion2.jpg',
      thumbImage: '../../../assets/img/camion2.jpg',
      title: 'type camion'
    }, 
    {
      image: '../../../assets/img/camion3.jpg',
      thumbImage: '../../../assets/img/camion3.jpg',
      title: 'type camion'
    }, 
    {
      image: '../../../assets/img/camion4.jpg',
      thumbImage: '../../../assets/img/camion4.jpg',
      title: 'type camion'
    }, 
    {
      image: '../../../assets/img/camion5.jpg',
      thumbImage: '../../../assets/img/camion5.jpg',
      title: 'type camion'
    }, 
    {
      image: '../../../assets/img/camion6.jpg',
      thumbImage: '../../../assets/img/camion6.jpg',
      title: 'type camion'
    }, 
    {
      image: '../../../assets/img/camion7.jpg',
      thumbImage: '../../../assets/img/camion7.jpg',
      title: 'type camion'
    }, 
];
  
  constructor(apollo: Apollo, router: Router, store: TransporteurStoreService) {
    this.apollo = apollo
    this.router = router
    this.store = store
   }

  createTransporteur() {
    console.log('creating transporteur...');

    delete this.store.transporteur['__typename']; // avoid a problem, will find a better solution

    this.apollo.mutate({
      mutation: CreateTransporteurQuery,
      variables: { transporteurInput: this.store.transporteur}
    }).subscribe(a => {
      console.log('transporteur created');
    });

  } 

  updateTransporteur() {
    this.view = 1

    delete this.store.transporteur['__typename']; // see create transporteur

    this.apollo.mutate({
      mutation: UpdateTransporteurQuery,
      variables: { transporteurInput: this.store.transporteur}
    }).subscribe(u => {
      console.log(u);
    });

  }

  changeView(id: number): void {
    this.view = id;
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
    this.view = 2;
    this.store.transporteur = v;
  }

  addTransporteur(): void {
    this.store.transporteur = new Transporteur();
    this.view = 2;
  }

  navToTransporteur(t: Transporteur) {
    console.log('navigating to transporteurs')
    this.router.navigate(['transporteur', t.id])

  }


  ngOnInit(): void {
    this.store.transporteur = new Transporteur();
    this.apollo.watchQuery({query: GetTransporteursQuery}).valueChanges.subscribe( ({data}) => {
      this.store.transporteurs = data['getTransporteurs'];
      console.log('got transporteurs')
      console.log(this.store.transporteurs);
    })
  }



}
