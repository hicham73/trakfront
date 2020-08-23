import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs'

import { map } from 'rxjs/operators'
import { Transporteur } from '../models/transporteur'
import { Vehicule } from '../models/vehicule';



@Injectable({providedIn: 'root'})
export class TransporteurStoreService {

  private readonly _trans = new BehaviorSubject<Transporteur>(new Transporteur());
  readonly trans$ = this._trans.asObservable();

  private readonly _transs = new BehaviorSubject<Transporteur[]>([]);
  readonly transs$ = this._trans.asObservable();

  private readonly _view = new BehaviorSubject<number>(1);
  readonly view$ = this._view.asObservable();

  private readonly _vehicule = new BehaviorSubject<Vehicule>(new Vehicule());
  readonly vehicule$ = this._vehicule.asObservable();

  private readonly _vehicules = new BehaviorSubject<Vehicule[]>([]);
  readonly vehicules$ = this._vehicules.asObservable();

  public get transporteur(): Transporteur {
    return this._trans.getValue();
  }

  public set transporteur(val: Transporteur) {
    this._trans.next(val);
  }

  public get vehicule(): Vehicule {
    return this._vehicule.getValue();
  }

  public set vehicule(val: Vehicule) {
    this._vehicule.next(val);
  }

  public get vehicules(): Vehicule[] {
    return this._vehicules.getValue();
  }

  public set vehicules(val: Vehicule[]) {
    this._vehicules.next(val);
  }


  public get transporteurs(): Transporteur[] {
    return this._transs.getValue();
  }

  public set transporteurs(val: Transporteur[]) {
    this._transs.next(val);
  }

  public get view(): number {
    return this._view.getValue();
  }

  public set view(val: number) {
    this._view.next(val);
  }





  // we'll compose the todos$ observable with map operator to create a stream of only completed todos
  readonly completedTodos$ = this.vehicules$.pipe(
    map(todos => todos.filter(todo => todo.isactive))
  )



  addVehicule(nom: string) {
    // we assaign a new copy of todos by adding a new todo to it 
    // with automatically assigned ID ( don't do this at home, use uuid() )
    this.vehicules.push(new Vehicule())
  }

  removeVehicule(id: number) {
    this.vehicules = this.vehicules.filter(todo => todo.id !== id);
  }

  setCompleted(id: number, isactive: boolean) {
    let todo = this.vehicules.find(todo => todo.id === id);

    if(todo) {
      // we need to make a new copy of todos array, and the todo as well
      // remember, our state must always remain immutable
      // otherwise, on push change detection won't work, and won't update its view
      const index = this.vehicules.indexOf(todo);
      this.vehicules[index] = new Vehicule();
      this.vehicules = [...this.vehicules];
    }
  }

}