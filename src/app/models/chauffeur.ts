import { Vehicule } from './vehicule'
import { Transporteur } from './transporteur'

export class Chauffeur {
    id: number;
   	nom: string;
   	prenom: string;
   	cin: string;          
   	permis: string;   
    dob: Date;            // ............................................................... Certificat chez l'ophtalmo ?
    isactive: boolean;    // ............................................................... Peut participer ou pas ? gelé ? Qawwad'ha f les derniers voyages ?
    transporteur: Transporteur;
    vehicules: Vehicule[];    

}