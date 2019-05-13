import seeds from "../db/seeds";
import { SET_FILTER, CHANGE_MAQUETTE, CREATE_MAKETS, SET_MAKETS } from "../constants/actions";


const setFilter = (params) => {
    return {
        type: SET_FILTER,
        payload: params
    };
};

export const changeForm = (name) => {
    return {
        type: CHANGE_MAQUETTE,
        payload: name
    };
};

export const createMakets = (M, children) => {
    console.log('creating Makets')
    return {
        type: CREATE_MAKETS,
        payload: {
            M,
            children,
        }
    }
};

export const setMakets = (flag, id, value) => {
    return {
        type: SET_MAKETS,
        payload: {
            flag,
            id,
            value,
        }
    }
};
