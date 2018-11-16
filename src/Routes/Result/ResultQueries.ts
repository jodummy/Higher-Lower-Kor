import { gql } from "apollo-boost";

export const CREATE_RESULT = gql`
  mutation createResult($score: Int!) {
    createResult(data: { score: $score, status: PUBLISHED }) {
      id
      score
    }
  }
`;
