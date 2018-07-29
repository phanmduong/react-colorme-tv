function isUndefined(data) {
    return data === undefined;
}

function isNull(data) {
    return data == null;
}

function isNotValue(data) {
    return data == "";
}

function isEmpty(data) {
    return isUndefined(data) || isNull(data) || isNotValue(data);
}

export function removeObservable(dataInput) {

    if (isUndefined(dataInput)) return undefined;

    if (isNull(dataInput)) return null;

    if (dataInput.slice && Array.isArray(dataInput.slice())) {
        return dataInput.map((item) => {
            return removeObservable(item);
        });
    }

    if ((typeof dataInput) === 'object') {
        return Object.entries(dataInput).reduce((acc, [key, value]) => {
            return {...acc, [key]: removeObservable(value)};
        }, {});
    }

    return dataInput;
}