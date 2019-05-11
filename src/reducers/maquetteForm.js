import {INIT_METADATA, GET_MAQUETTE, CHANGE_MAQUETTE, CREATE_MAKETS} from "../constants/actions";

const initialState = {
    name: "M01",
    load: true,
    makets: {
        M: [],
        children: [],
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'REHYDRATE':
            return state;
        case GET_MAQUETTE:
            return {...action.payload};
        case CHANGE_MAQUETTE:
            state.name = action.payload;
            return Object.assign({}, state);
        case CREATE_MAKETS:
            state.makets = action.payload;
            return Object.assign({}, state);
        default:
            break;
    }
    return state;
}
