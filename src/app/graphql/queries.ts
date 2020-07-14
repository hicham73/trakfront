import gql from 'graphql-tag';

export const GetUsersQuery = gql`
query GetUsers {
  getUsers {
    nom
    prenom
    username
    password
    email
    type
  }
}
`;