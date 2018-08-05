import {capitalizeFirstLetter} from "./utility";
import moment from "moment";

export function formatTime(time, format = "llll") {
    return capitalizeFirstLetter(convertTime(time).format(format));
}

/**
 * convert timestamp to moment
 */
export function convertTime(time) {
    return moment.unix(time);
}

export function relativeTime(time) {
    const currentTimestamp = moment().unix();
    if (currentTimestamp - time > 24 * 60 * 60) {
        return formatTime(time);
    }
    return capitalizeFirstLetter(convertTime(time).startOf('minute').fromNow());
}

export function fullRelativeTime(time) {
    return capitalizeFirstLetter(convertTime(time).startOf('minute').fromNow());
}

/**
 * generate Date With Unix
 * @param startTime timestamp
 * @param endTime timestamp
 * @param format
 * @returns {Array} date
 */
export function generateDateWithUnix(startTime, endTime, format = 'L') {
    let arr = [];
    while (startTime <= endTime) {
        arr = [...arr, formatTime(startTime, format)];
        startTime += 86400;
    }
    return arr;
}
