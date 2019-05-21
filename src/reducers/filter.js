import { SET_FILTER } from "../constants/actions";
const initialState = {
};

export default function(state = initialState, action) {
    const { payload } = action;
    switch (action.type) {
        case SET_FILTER:
            return { ...state, ...payload };
        default:
            break;
    }
	return state;
}
