import {
    ADD_FILE,
    DELETE_FILE,
    GENERATE_KEYS,
    LOGIN_USER,
    SIGN_FILE,
} from './types';

export function addNewFile(id, title, file) {
    return {
        type: ADD_FILE,
        id: id,
        title: title,
        file: file,
    };
}

export function deleteFile(id) {
    return {
        type: DELETE_FILE,
        id: id,
    };
}

export function loginUser(name, surname, login) {
    return {
        type: LOGIN_USER,
        name: name,
        surname: surname,
        login: login,
    };
}

export function setKeys(keys) {
    return {
        type: GENERATE_KEYS,
        privateKey: keys.privateKey,
        publicKey: keys.publicKey,
    };
}

export function signFile(id, sign) {
    return {
        type: SIGN_FILE,
        id: id,
        sign: sign,
    };
}
