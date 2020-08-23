import gql from 'graphql-tag';

// User ----------------------------------------
export const GetUsersQuery = gql`
query GetUsers {
  getUsers {
    id
    nom
    prenom
    username
    password
    email
    type
  }
}
`;

export const CreateUserQuery = gql`
mutation createUser($userInput: UserInput!) {
  createUser(userInput: $userInput) {
    id
    nom
    prenom
    username
    password
    email
    type
  }
}
`;
export const UpdateUserQuery = gql`
mutation updateUser($userInput: UserInput!) {
  updateUser(userInput: $userInput) {
    id
    nom
    prenom
    username
    password
    email
    type
  }
}
`;

export const DeleteUserQuery = gql`
mutation deleteUser($id: Int!) {
  deleteUser(id: $id) {
    id
  }
}
`;

// Vehicule -----------------------------
export const GetVehiculesQuery = gql`
query GetVehicules {
  getVehicules {
    id
    fabricant
    modele
    type
    immatriculation
    ptac
    datemisecirculation
    carburant
    vitesse
    ville
    isactive
    transporteur {
      id
    }
  }
}
`;

export const CreateVehiculeQuery = gql`
mutation createVehicule($vehiculeInput: VehiculeInput!) {
  createVehicule(vehiculeInput: $vehiculeInput) {
    id
    fabricant
    modele
    type
    immatriculation
    ptac
    datemisecirculation
    carburant
    vitesse
    ville
    isactive
    transporteur {
      id
    }
  }
}
`;
export const UpdateVehiculeQuery = gql`
mutation updateVehicule($vehiculeInput: VehiculeInput!) {
  updateVehicule(vehiculeInput: $vehiculeInput) {
    id
    fabricant
    modele
    type
    immatriculation
    ptac
    datemisecirculation
    carburant
    vitesse
    ville
    isactive
    transporteur {
      id
    }
  }
}
`;

export const DeleteVehiculeQuery = gql`
mutation deleteVehicule($id: Int!) {
  deleteVehicule(id: $id) {
    id
  }
}
`;

export const GetImagesQuery = gql`
  query GetImages {
    getImages {
      id
      data
    }
  }
`
export const CreateImageQuery = gql`
mutation createImage($imageInput: ImageInput!) {
  createImage(imageInput: $imageInput) {
    id
    data
    vehicule {
      id
    }
  }
}
`;

export const DeleteImageQuery = gql`
mutation deleteImage($id: Int!) {
  deleteImage(id: $id) {
    id
  }
}
`;


export const GetEncheresEtLeursExpediteursQuery = gql`
query GetEncheresEtLeursExpediteursQuery {
  getExpediteurs  {
    id
    nom
    cin
    encheres {
      villedepart
      villearrivee
      marchandise
      uniteprix
      prixunitaire
      statut
      debutpublication
      finpublication
    }
  }
}
`;

export const GetEncheresDUnExpediteur = gql`
query GetEncheresDUnExpediteur {
  getEncheresDUnExpediteur(id:1)  {
    id
    villedepart
    villearrivee
    marchandise
    uniteprix
    prixunitaire
    statut
    debutpublication
    finpublication
    volume
    commentaire
      propositions {
        prixunitaire
        commentaire
        date
        statut
      }    
  }
}
`;


export const GetPropositionsDUneEnchere = gql`
query GetPropositionsDUneEnchere {
  getPropositionsDUneEnchere(id:11)  {
    id
    prixunitaire
    commentaire
    date
    statut
  }
}
`;

export const UpdateEnchereMutation = gql`
mutation UpdateEnchereMutation($enchereInput: EnchereInput!) {
  updateEnchere(enchereInput: $enchereInput) {
    id
    marchandise
    statut
    villedepart
    villearrivee
    volume
    commentaire
    debutpublication
    finpublication
  }
}
`;

export const CreateEnchereMutation = gql`
mutation CreateEnchereMutation($enchereInput: EnchereInput!) {
  createEnchere(enchereInput: $enchereInput) {
    id
    marchandise
    statut
    villedepart
    villearrivee
    volume
    commentaire
    uniteprix
    prixunitaire
    debutpublication
    finpublication
  }
}
`;

export const getExpediteursEncheres = gql`
query getExpediteursEncheres {
  getExpediteursEncheres(id:1)  {
    id
    nom
    cin
    encheres {
      villedepart
      villearrivee
      marchandise
      uniteprix
      prixunitaire
      statut
      debutpublication
      finpublication
    }
  }
}
`;


export const GetEncheresSimpleQuery = gql`
query GetEncheresSimpleOne {
  getEncheres {
    id
		villedepart
    villearrivee
    marchandise
    statut
  }
}
`;

export const GetExpediteursSimpleQuery = gql`
query GetExpediteursSimpleOne {
  getExpediteurs {
    id
    type
    nom
    prenom
    marchandise
    cin
    ville
  }
}
`; 