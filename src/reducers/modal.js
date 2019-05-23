import { CLOSE_MODAL, OPEN_MODAL } from '../constants/actions'

const initialState = {
    visible: false,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case CLOSE_MODAL:
            return { visible: false };
        case OPEN_MODAL:
            return { visible: true };
        default:
            break;
    }
    return state;
}
