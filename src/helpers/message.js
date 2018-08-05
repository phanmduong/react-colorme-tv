import {message} from "antd";

export function messageSuccess(text, top, duration = 2.5) {
    message.config({
        top: top
    });
    message.success(text, duration);
}

export function messageError(text, top, duration = 2.5) {
    message.config({
        top: top
    });
    message.error(text, duration);
}

export function messageWarning(text, top, duration = 2.5) {
    message.config({
        top: top
    });
    message.warning(text, duration);
}