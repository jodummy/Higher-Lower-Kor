import { gql } from "apollo-boost";

export const CREATE_OPINION = gql`
  mutation createOpinion($text: String!) {
    createOpinion(data: { text: $text, status: PUBLISHED }) {
      id
      text
    }
  }
`;

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
