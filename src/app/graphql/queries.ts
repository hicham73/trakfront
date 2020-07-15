import gql from 'graphql-tag';

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

