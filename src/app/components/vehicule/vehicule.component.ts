import { Component, OnInit } from '@angular/core';
import { GetVehiculesQuery, UpdateVehiculeQuery, CreateVehiculeQuery, DeleteVehiculeQuery } from '../../graphql/queries'
import { Vehicule } from '../../models/vehicule'
import { Apollo } from 'apollo-angular'


@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css']
})
export class VehiculeComponent implements OnInit {
  private apollo: Apollo
  private view = 1;

  public vehicules = [];
  private vehicule: Vehicule;
  private loading = false;
  
  private file;

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
  
  constructor(apollo: Apollo) {
    this.apollo = apollo
   }

  createVehicule() {
    console.log('creating vehicule...');

    delete this.vehicule['__typename']; // avoid a problem, will find a better solution

    this.apollo.mutate({
      mutation: CreateVehiculeQuery,
      variables: { vehiculeInput: this.vehicule}
    }).subscribe(a => {
      console.log('vehicule created');
    });

  } 

  updateVehicule() {
    this.view = 1;

    delete this.vehicule['__typename']; // see create vehicule

    this.apollo.mutate({
      mutation: UpdateVehiculeQuery,
      variables: { vehiculeInput: this.vehicule}
    }).subscribe(u => {
      console.log(u);
    });

  }

  changeView(id: number): void {
    this.view = id;
  }

  upsertVehicule() {

    delete this.vehicule['__typename']; // avoid a problem, will find a better solution

    if(!this.vehicule.id) {
      console.log('creating vehicule...');
      this.apollo.mutate({
        mutation: CreateVehiculeQuery,
        variables: { vehiculeInput: this.vehicule}
      }).subscribe(res => {
        let v = res['data']['createVehicule'] as Vehicule;
        console.log('vehicule created');
        console.log(v);
        this.vehicule = v;
        this.vehicules.push(v);

      });
    } else {
      this.apollo.mutate({
        mutation: UpdateVehiculeQuery,
        variables: { vehiculeInput: this.vehicule}
      }).subscribe(u => {


        console.log(u);
      });
  
    }


  }


  deleteVehicule() {
    let id = this.vehicule.id;
    if(!this.vehicule.id) {
      alert('select vehicule');
      return;
    }

    this.apollo.mutate({
      mutation: DeleteVehiculeQuery,
      variables: { id: this.vehicule.id}
    }).subscribe(u => {
      let idx = this.vehicules.findIndex(x => x.id == id);
      this.vehicules.splice(idx+1,1);
      if(this.vehicules.length > 0)
        this.vehicule = this.vehicules[0];

      console.log(u);
    });

  }

  edit(v: Vehicule): void {
    this.view = 2;
    this.vehicule = v;
  }

  addVehicule(): void {
    this.vehicule = new Vehicule();
    this.view = 2;
  }


  ngOnInit(): void {
    this.vehicule = new Vehicule();
    this.apollo.watchQuery({query: GetVehiculesQuery}).valueChanges.subscribe( ({data}) => {
      this.vehicules = data['getVehicules'];
      console.log('got vehicules')
      console.log(this.vehicules);
    })
  }

}
