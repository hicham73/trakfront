import { Component, OnInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';
import { Api } from '../../util/api';
import { Apollo } from 'apollo-angular'
import { GetUsersGQL, CreateUserGQL } from '../../services/graphql.service'
import { GetUsersQuery } from '../../graphql/queries'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { Trak } from '../../models/trak'

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  public users = [];
  private user: User;
  private loading = false;
  private createUserGQL: CreateUserGQL;
  private apollo: Apollo;
  private data: Observable<any>;
  private traks: Trak[];




  
  constructor(private ngZone: NgZone, private readonly getUsersGQL: GetUsersGQL, createUserGQL: CreateUserGQL, apollo: Apollo) {
    this.createUserGQL = createUserGQL;
    this.apollo = apollo;

    // getUsersGQL.fetch().subscribe(({ data, loading }) => {
    //   this.loading = loading;
    //   console.log(data);
    //   this.users = data.getUsers;
    // });

    // this.apollo.watchQuery({query: GetUsersQuery}).valueChanges.subscribe((data) => {
    //     console.log(data.getUsers);

    // })

    
    this.apollo.watchQuery({query: GetUsersQuery}).valueChanges.subscribe( ({data}) => {
      this.users = data['getUsers'];

      this.user = new User();

      // res.forEach(e => {
      //   let u = new User();
      //   u.prenom = e['prenom'];
      //   u.nom = e['nom'];

      //   this.users.push(u);
        
      // });
    })

  }

  selectUser(user: User) {
    this.user = user;
    console.log('user selected');
  }

  createUser() {
    this.user.id = 0;
    this.user.type = 1;

    this.createUserGQL.mutate({
      userInput: this.user
    }).subscribe(({data}) => {
      console.log('user created: ' + data.createUser);
    })

  }

  updateUser() {
    this.user.id = 1;
    this.user.type = 1;

    this.createUserGQL.mutate({
      userInput: this.user
    }).subscribe(({data}) => {
      console.log('user updated: ' + data.createUser);
    })

  }

  ngOnInit(): void {

  }

}
