import { Injectable } from '@angular/core';
import { GetAllOptionsQuery } from './graphql/queries'
import { Option } from './models/option'
import { Apollo } from 'apollo-angular'


@Injectable({
  providedIn: 'root'
})
export class AppService {
  public options: Option[];
  private apollo: Apollo;

  constructor(apollo: Apollo) {
    this.apollo = apollo; 

    this.apollo.watchQuery({  
      query: GetAllOptionsQuery,
    }).valueChanges.subscribe(({data}) => {
      this.options = data['getAllOptions'];
      console.log('got these options: ');
      console.log(this.options);
    });

  }
}
