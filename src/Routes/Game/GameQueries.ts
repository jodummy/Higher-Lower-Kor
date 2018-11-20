import { gql } from "apollo-boost";

export const KEYWORDS = gql`
  query keywordsQuery {
    keywords {
      id
      name
      image {
        url
      }
      count
    }
  }
`;

export const CREATE_RESULT = gql`
  mutation createResult($score: Int!) {
    createResult(data: { score: $score, status: PUBLISHED }) {
      id
      score
    }
  }
`;
