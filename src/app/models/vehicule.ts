import { Transporteur } from './transporteur'
import { Chauffeur } from './chauffeur'

export class Vehicule {

    id: number;
   	fabricant: string;
   	modele: string;
   	type: string;
   	immatriculation: string;
    ptac: number;
    datemisecirculation: Date;
   	carburant?: string;
   	vitesse?: string;
   	ville?: string;
    isactive: boolean;
    transporteur: Transporteur;
    chauffeurs: Chauffeur[];    

}

