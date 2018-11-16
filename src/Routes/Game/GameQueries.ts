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
