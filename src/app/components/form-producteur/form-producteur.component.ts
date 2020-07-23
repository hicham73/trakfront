import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Api } from '../../util/api';
import { AppService } from '../../app.service'

@Component({
  selector: 'app-form-producteur',
  templateUrl: './form-producteur.component.html',
  styleUrls: ['./form-producteur.component.css'],

})
export class FormProducteurComponent implements OnInit {
  private name: string = 'Nancy';
  constructor(private ngZone: NgZone, private appService: AppService) {
    
  }

  ngOnInit(): void {

  }

  setName(): void {
    
  }

}
