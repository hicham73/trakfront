import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { Transporteur } from 'src/app/models/transporteur';
import { Route } from '@angular/compiler/src/core';
import { Observable } from 'apollo-link';
import { GetTransporteurQuery, UpdateTransporteurQuery, CreateTransporteurQuery, DeleteTransporteurQuery } from '../../graphql/queries'
import { Apollo } from 'apollo-angular';
import { TransporteurStoreService } from '../../services/transporteur-store.service'

// import { User } from '../../models/user'

@Component({
  selector: 'app-transporteur',
  templateUrl: './transporteur.component.html',
  styleUrls: ['./transporteur.component.css']
})
export class TransporteurComponent implements OnInit {

  private sub: any
  private transporteur: Transporteur
  private route: ActivatedRoute
  private id: number;
  private apollo: Apollo;
  private store: TransporteurStoreService
  private router;
  
  constructor(apollo: Apollo, route: ActivatedRoute, router: Router, store: TransporteurStoreService) { 
    this.route = route
    this.apollo = apollo
    this.store = store
    this.router = router
  }

  async ngOnInit() {
  
    this.sub = this.route.params.subscribe(params => {
      this.id = parseInt(params['id'])
      console.log(`id transporteur: ${this.id}`)
      this.apollo.watchQuery({ 
          query: GetTransporteurQuery,  
          variables: {id: this.id}}).valueChanges.subscribe( t => {
            console.log('got transporteur, this is the data:')
            this.store.transporteur = t['data']['getTransporteur'] as Transporteur
            console.log(this.transporteur)
      })
    })
  }

  nav(page) {
    this.router.navigate([page])
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();

  }

}
