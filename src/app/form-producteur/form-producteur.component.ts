import { Component, OnInit, Input } from '@angular/core';
import { Trak } from '../model/trak'

@Component({
  selector: 'app-form-producteur',
  templateUrl: './form-producteur.component.html',
  styleUrls: ['./form-producteur.component.css']

})
export class FormProducteurComponent implements OnInit {

  trak: Trak;
  name: string = 'Nancy';
  constructor() { this.trak = new Trak();}

  ngOnInit(): void {
    this.trak.id = 10;
    this.trak.name = 'hello world!'
    this.trak.description = 'I am here for the first time';

  }

  setName(): void {
    this.name = 'Hicham';
    console.log('setName clicked');
  }

}
