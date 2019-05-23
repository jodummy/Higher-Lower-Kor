import { ApolloClient } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { toast } from "react-toastify";

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_API_URL
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      toast.error(`Unexpected error: ${message}`);
    });
  }
  if (networkError) {
    toast.error(`Network error: ${networkError}`);
  }
});

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, httpLink]),
  cache
});

export default client;
