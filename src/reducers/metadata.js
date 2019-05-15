import { INIT_METADATA} from "../constants/actions";
const initialState = {

};

export default function(state = initialState, action) {
    switch (action.type) {
        case INIT_METADATA:
            return { ...action.payload.dictionaries, ...action.payload.metadata };
        default:
            break;
    }
	return state;
}
