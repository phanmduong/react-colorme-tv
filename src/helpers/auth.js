import {PATH_REDIRECT_NO_AUTH, TOKEN_EXPIRED_TIME} from "../constants";
import {deleteCookie, getCookie, setCookie} from "./cookie";
import {DOMAIN, IS_PRODUCTION} from "../constants/env";

export function getToken() {
    const token = getCookie("colorme_token");
    if (token) {
        return token;
    }
    history.push(PATH_REDIRECT_NO_AUTH);
}

export function isLoggedIn() {
    return getCookie("colorme_token");
}

export function saveToken(token, expires_in = TOKEN_EXPIRED_TIME) {
    if (IS_PRODUCTION) {
        setCookie("colorme_token", token, expires_in, '.' + DOMAIN);
    } else {
        setCookie("colorme_token", token, expires_in);
    }

}

export function clearToken() {
    if (IS_PRODUCTION) {
        deleteCookie("colorme_token", '.' + DOMAIN);
    } else {
        deleteCookie("colorme_token");
    }
}

export function getRefreshToken() {
    const token = getCookie("colorme_refresh_token");
    if (token) {
        return token;
    }
    return null;
}

export function saveRefreshToken(token, expires_in = TOKEN_EXPIRED_TIME) {
    if (IS_PRODUCTION) {
        setCookie("colorme_refresh_token", token, expires_in, '.' + DOMAIN);
    } else {
        setCookie("colorme_refresh_token", token, expires_in);
    }
}

export function clearRefreshToken() {
    if (IS_PRODUCTION) {
        deleteCookie("colorme_refresh_token", '.' + DOMAIN);
    } else {
        deleteCookie("colorme_refresh_token");
    }
}

export function signout() {
    clearToken();
    clearRefreshToken();
    history.push(PATH_REDIRECT_NO_AUTH);
}
