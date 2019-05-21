import {
    GET_MAQUETTE,
    CHANGE_MAQUETTE,
    CREATE_MAKETS,
    SET_MAKETS,
    SELECT_SAW,
    SET_SAW,
    SET_ALL,
    UNSET_ALL,
    SET_LOADING_FORM,
    SET_STRUCT_AND_DICT,
    MAKE_SAWS,
} from "../constants/actions";

const initialState = {
    name: "M01",
    load: true,
    saws: [],
    selectedSaw: 1,
};

const makeSaws = (data) => {
    return data.map((item) => {return {
        id: item.KAVN,
        M: [],
        children: [],
        on: false,
    };});
};

const setUnset = (state, on, flag) => {
    if (flag === "saw") {
        state.saws = state.saws.map((saw) => {return {...saw, on: on};});
    }
    if (flag === "layout") {
        state.saws[state.selectedSaw].M = state.saws[state.selectedSaw].M.map((item) => {return {...item, on: on};});
        state.saws[state.selectedSaw].children = state.saws[state.selectedSaw].children.map((item) => {return {...item, on: on};});
    }

    return state;
};

const setMakets = (id, arr, value) => {
    return arr.map((item) => {
        return (item.id === id)
            ? {...item, on: value}
            : item;
    });
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_LOADING_FORM:
            return { ...state, load: payload };
        case SET_STRUCT_AND_DICT:
            return {
                ...state,
                ...payload
            };
        case GET_MAQUETTE:
            return {...payload};
        case CHANGE_MAQUETTE:
            return Object.assign({}, state, payload);
        case SELECT_SAW:
            state.selectedSaw = payload;
            return Object.assign({}, state);
        case CREATE_MAKETS:
            state.saws = state.saws.map((item, index) => {return {...item, M: payload.M, children: payload.children, on: index === 0};});
            return Object.assign({}, state);
        case SET_MAKETS:
            state.saws[state.selectedSaw][payload.flag] = setMakets(payload.id, state.saws[state.selectedSaw][payload.flag], payload.value);
            return Object.assign({}, state);
        case SET_SAW:
            state.saws[payload.id - 1].on = payload.value;
            return Object.assign({}, state);
        case SET_ALL:
            return Object.assign({}, setUnset(state, true, payload));
        case UNSET_ALL:
            return Object.assign({}, setUnset(state, false, payload));
        case MAKE_SAWS:
            console.log('from reducer before', state)
            state.saws = makeSaws(payload);
            console.log('from reducer after', state)
            return Object.assign({}, state);
        default:
            break;
    }
    return state;
}
