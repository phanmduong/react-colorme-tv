import {splitHostname} from "../helpers/utility";

export const IS_PRODUCTION = process.env.NODE_ENV === "production";

const hostname = splitHostname();

let domain;

let protocol;

if (IS_PRODUCTION) {
    protocol = location.protocol + '//';
    domain = `${hostname.domain}.${hostname.type}`;

} else {
    protocol = 'https://';
    domain = 'atomuser.com';
}

export const PROTOCOL = protocol;                                       // http://
export const DOMAIN = domain + '/';                                     // atomuser.com/
export const PROTOCOL_DOMAIN = PROTOCOL + DOMAIN;                       // https://atomuser.com/
export const API_URL = PROTOCOL_DOMAIN + 'api/';                        // https://atomuser.com/api/
export const BASE_API_URL = 'https://k.atomuser.com/client-api/';                        // https://atomuser.com/api/
export const SOCKET_HOST = 'https://atomuser.com';                      // https://atomuser.com/
export const SOCKET_PORT = '9000';                                      // 9000
