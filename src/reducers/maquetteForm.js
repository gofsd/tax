import {
    GET_MAQUETTE,
    CHANGE_MAQUETTE,
    CREATE_MAKETS,
    SET_MAKETS,
    SELECT_SAW,
    SET_SAW,
    SET_ALL,
    UNSET_ALL,
} from "../constants/actions";

const initialState = {
    name: "M01",
    load: true,
    saws: [],
    selectedSaw: 1,
};

const createSaws = (data) => {
    let saws = [];

    for (let i = 1; i <= 100; i++) {
        saws.push(
            {
                id: i,
                M: data.M,
                children: data.children,
                on: i === 1
            }
        )
    }

    return saws;
};

const setUnset = (state, on, flag) => {
    if (flag === 'saw') {
        state.saws = state.saws.map((saw) => {return {...saw, on: on}})
    }
    if (flag === 'layout') {
        state.saws[state.selectedSaw].M = state.saws[state.selectedSaw].M.map((item) => {return {...item, on: on}});
        state.saws[state.selectedSaw].children = state.saws[state.selectedSaw].children.map((item) => {return {...item, on: on}})
    }

    return state
};

const setMakets = (id, arr, value) => {
    return arr.map((item) => {
        return (item.id === id)
            ? {...item, on: value}
            : item
    })
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_MAQUETTE:
            return {...payload};
        case CHANGE_MAQUETTE:
            state.name = payload;
            return Object.assign({}, state);
        case SELECT_SAW:
            state.selectedSaw = payload;
            return Object.assign({}, state);
        case CREATE_MAKETS:
            state.saws = createSaws(payload);
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
        default:
            break;
    }
    return state;
}
