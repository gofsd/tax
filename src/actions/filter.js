import seeds from "../db/seeds";
import { SET_FILTER, CHANGE_MAQUETTE } from "../constants/actions";


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
}
;