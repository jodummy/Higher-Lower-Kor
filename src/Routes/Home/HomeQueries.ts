import { gql } from "apollo-boost";

export const CREATE_OPINION = gql`
  mutation createOpinion($text: String!) {
    createOpinion(data: { text: $text, status: PUBLISHED }) {
      id
      text
    }
  }
`;
