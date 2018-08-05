import {client} from "../graphql/graphqlClient";
import gql from 'graphql-tag';

export function getBases() {
    return client.query({
        query: gql `
            {
                bases {
                    id, name, address
                }
            }
        `
    });
}
