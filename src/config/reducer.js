import {
    ADD_FILE,
    DELETE_FILE,
    GENERATE_KEYS,
    LOGIN_USER,
    SIGN_FILE,
} from '../components/actions/types';

const initiasState = {
    fileList: [],
    user: {},
    keys: {},
};

const initialKeys = {
    privateKey: '',
    publicKey: '',
};

const initialItem = {
    id: '',
    title: '',
    file: '',
    sign: '',
};

const initialUser = {
    name: '',
    surname: '',
    login: '',
};

export default function(state = initiasState, action) {
    switch (action.type) {
        case ADD_FILE:
            console.log(state);
            return {
                ...state,
                fileList: state.fileList.concat([
                    {
                        ...initialItem,
                        id: action.id,
                        title: action.title,
                        file: action.file,
                    },
                ]),
            };
        case DELETE_FILE:
            return {
                ...state,
                fileList: state.fileList.filter(item => item.id !== action.id),
            };
        case LOGIN_USER:
            return {
                ...state,
                user: {
                    ...initialUser,
                    name: action.name,
                    surname: action.surname,
                    login: action.login,
                },
            };
        case GENERATE_KEYS:
            return {
                ...state,
                keys: {
                    ...initialKeys,
                    private: action.private,
                    public: action.public,
                },
            };
        case SIGN_FILE:
            return {
                ...state,
                fileList: state.fileList.map(item =>
                    item.id === action.id
                        ? { ...item, sign: action.sign }
                        : item,
                ),
            };
        default:
            return state;
    }
}
