// import {signout} from "./auth";

export function httpSuccess(status) {
    return status == 200 || status == 201;
}

function getMessageBadRequest(error) {
    if ((typeof error) === "string") {
        return error;
    } else {
        let text = "";
        error.map((message) => {
            text += message + '\n';
        });

        text.substring(0, text.length - 3);
        return text;
    }
}

export function messageHttpRequest(error = {}) {
    if (error.response) {
        switch (error.response.status) {
            case 401:
                // signout();
                return;
            case 404:
                return 'not_found';
            case 400:
                return getMessageBadRequest(error.response.data);
            default:
                return 'Có lỗi xảy ra';
        }
    } else if (error.request) {
        return 'Kiểm tra kết nối mạng';
    } else {
        return 'Có lỗi xảy ra';
    }
}

export function messageHttpRequestSignIn(error) {
    if (error.response) {
        switch (error.response.status) {
            case 400:
                return 'Kiểm tra thông tin tài khoản';
        }
    }

    return messageHttpRequest(error);
}
