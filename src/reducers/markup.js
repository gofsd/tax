import { SOME_ACTION } from "../constants/actions";

const initialState = {
    prop: 'i am prop'
};

export default function markup (state = initialState, action) {
    switch (action.type) {
        case SOME_ACTION:
            return state.prop = 'i am new prop';
        default:
            return state
    }
}
