import {signinApi} from "../apis/signinApis";
import history from "../helpers/history";
import {saveToken} from "../helpers/auth";
import {httpSuccess, messageHttpRequestSignIn} from "../helpers/httpRequest";

export function signin(account, setState) {
    setState({isLoading: true, messageError: null});
    signinApi(account)
        .then(res => {
            setState({isLoading: false});
            if (httpSuccess(res.status)) {
                saveToken(res.data.token);
                history.push("/");
            }
        })
        .catch(error => {
            const messageError = messageHttpRequestSignIn(error);
            setState({isLoading: false, messageError});
        });
}
