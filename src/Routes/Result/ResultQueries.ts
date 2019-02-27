import { gql } from "apollo-boost";

export const CREATE_RESULT = gql`
  mutation createResult($score: Int!) {
    createResult(data: { score: $score, status: PUBLISHED }) {
      id
      score
    }
  }
`;

export const CREATE_OPINION = gql`
  mutation createOpinion($text: String!) {
    createOpinion(data: { text: $text, status: PUBLISHED }) {
      id
      text
    }
  }
`;
