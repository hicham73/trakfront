import { Vehicule } from './vehicule'
import { Chauffeur } from './chauffeur'

export class Transporteur {
    id: number;
    type: number;
   	nom: string;
   	prenom?: string;
   	cin: string;
   	permis: string;
    isactive: boolean;
    nbrvehicules: number;
    nbrvoyages: number;
    cote: number;
    dateinscription: Date;
    vehicules: Vehicule[];
    chauffeurs: Chauffeur[];

    fullname() {
        if(this.prenom || this.nom)
            return `${this.prenom} ${this.nom}`
        else
            return 'Société'
    }
}