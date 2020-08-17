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

// Transpoteur ----------------------------------------
export const GetTransporteursQuery = gql`
query GetTransporteurs {
  getTransporteurs {
    id
    type
    prenom
    nom
    cin
    nbrvehicules
    nbrvoyages
    cote
  
  }
}
`;

export const GetTransporteurQuery = gql`
query GetTransporteur($id: Int!) {
  getTransporteur(id: $id) {
    id
    type
    prenom
    nom
    cin
    nbrvehicules
    nbrvoyages
    cote
  
  }
}
`;

export const CreateTransporteurQuery = gql`
mutation createTransporteur($transporteurInput: TransporteurInput!) {
  createTransporteur(transporteurInput: $transporteurInput) {
    type
    nom
    prenom
   	cin
   	permis
   	isactive
    nbrvehicules
    nbrvoyages
    cote
    dateinscription
    dateexpirationpermis
  }
}
`;
export const UpdateTransporteurQuery = gql`
mutation updateTransporteur($transporteurInput: TransporteurInput!) {
  updateTransporteur(transporteurInput: $transporteurInput) {
    id
    type
    prenom
    nom
    cin
    nbrvehicules
    nbrvoyages
    cote
  }
}
`;

export const DeleteTransporteurQuery = gql`
mutation deleteTransporteur($id: Int!) {
  deleteTransporteur(id: $id) {
    id
  }
}
`;
// Vehicule -----------------------------
export const GetVehiculesQuery = gql`
query GetVehicules($transporteurId: Int!) {
  getVehicules(transporteurId: $transporteurId) {
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
    image {
      id
      data
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

export const SetImagePrincipaleQuery = gql`
mutation setImagePrincipale($vehiculeId: Int!, $imageId: Int!) {
  setImagePrincipale(vehiculeId: $vehiculeId, imageId: $imageId)
}
`;