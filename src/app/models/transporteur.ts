import { Vehicule } from './vehicule'
import { Chauffeur } from './chauffeur'

export class Transporteur {
    id: number;
    type: string;         // ............................................................... Moul L'Kamiou wella entreprise qui gère une flotte
   	nom: string;          // ............................................................... Nom de l'entreprise si Type =Entreprise
   	prenom?: string;      // ............................................................... Vide si entreprise
   	cin: string;          // ............................................................... Vide si entreprise
   	permis: string;       // ............................................................... Vide si entreprise
    isactive: boolean;
    vehicules: Vehicule[];
    chauffeurs: Chauffeur[];
}