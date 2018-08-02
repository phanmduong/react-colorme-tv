import apolloClient from 'apollo-boost';

export const client = new apolloClient({
    uri: "http://localhost:8000/graphql"
});