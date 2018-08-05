import {InMemoryCache} from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import {HttpLink} from 'apollo-link-http';

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
    link: new HttpLink({uri: 'http://192.168.1.7:8000/graphql'}),
    cache: new InMemoryCache,
    defaultOptions
});