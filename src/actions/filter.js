import seeds from "../db/seeds";
import { SET_FILTER, CHANGE_MAQUETTE, CREATE_MAKETS, SET_MAKETS, SELECT_SAW, SET_SAW } from "../constants/actions";


const setFilter = (params) => {
    return {
        type: SET_FILTER,
        payload: params
    };
};

export const selectSaw = (id) => {
    return {
        type: SELECT_SAW,
        payload: id,
    }
};

export const changeForm = (name) => {
    return {
        type: CHANGE_MAQUETTE,
        payload: name
    };
};

export const createMakets = (M, children) => {
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
};export const setSaw = (id, value) => {
    return {
        type: SET_SAW,
        payload: {
            id,
            value,
        }
    }
};
