import {INIT_METADATA, GET_MAQUETTE, CHANGE_MAQUETTE, CREATE_MAKETS, SET_MAKETS} from "../constants/actions";

const initialState = {
    name: "M01",
    load: true,
    makets: {
        M: [],
        children: [],
    }
};

const setMakets = (id, arr, value) => {
    return [...arr.map((item) => {
        return (item.id === id)
            ? {...item, on: value}
            : item
    })]
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'REHYDRATE':
            return state;
        case GET_MAQUETTE:
            return {...payload};
        case CHANGE_MAQUETTE:
            state.name = payload;
            return Object.assign({}, state);
        case CREATE_MAKETS:
            state.makets = payload;
            return Object.assign({}, state);
        case SET_MAKETS:
            state.makets[payload.flag] = setMakets(payload.id, state.makets[payload.flag], payload.value);
            return Object.assign({}, state);
        default:
            break;
    }
    return state;
}
