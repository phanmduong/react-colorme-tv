import {InMemoryCache} from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {GRAPHQL_URL} from "../constants/env";

const defaultOptions = {
    watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
    },
    query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
    },
};

export const client = new ApolloClient({
    link: new HttpLink({uri: GRAPHQL_URL}),
    cache: new InMemoryCache,
    defaultOptions
});