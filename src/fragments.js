import { gql } from "apollo-boost";

export const KEYWORD_FRAGMENT = gql`
  fragment KeywordtItems on Keyword {
    id
    name
    img {
      url
    }
    count
  }
`;
