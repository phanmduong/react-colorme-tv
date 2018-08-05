import {observable, action} from "mobx";
import {getAnalyticsSales} from './queries.graphql';
import {graphqlSuccess, messageGraphqlRequest} from "../../../graphql/graphqlSuccess";
import {client} from '../../../graphql/graphqlClient';
import {messageError} from "../../../helpers/message";

class Store {
    @observable data = {};
    @observable isLoading = false;
    @observable error = null;

    @action
    async getData() {
        this.isLoading = true;
        this.error = null;

        const variables = {};

        try {
            const res = await client
                .query({
                    query: getAnalyticsSales,
                    variables: variables
                });
            const data = res.data;

            if (graphqlSuccess(res.networkStatus)) {
                this.data = data;
            } else {
                this.error = messageGraphqlRequest();
                messageError(this.error);
            }
        }
        catch (error) {
            this.error = messageGraphqlRequest();
            messageError(this.error);
        } finally {
            this.isLoading = false;
        }


    }
}

export default new Store();