import { gql } from '@apollo/client';

export const GET_USER_BY_ID = gql`
  query GetUserById($id: ID!) {
    user(id: $id) {
      id
      name
      gender
      createdAt
      updatedAt
    }
  }
`;

export const GET_ALL_TICKET_ESCALATIONS = gql`
  query GetAllTicketEscalations {
    escalations {
      id
      user {
        name
        gender
      }
      category
      title
      createdAt
      updatedAt
    }
  }
`;
