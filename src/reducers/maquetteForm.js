import { INIT_METADATA, GET_MAQUETTE, CHANGE_MAQUETTE} from "../constants/actions";
const initialState = {
    name: "M01",
    load: true
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_MAQUETTE:
            return { ...action.payload };
        case CHANGE_MAQUETTE:
            state.name = action.payload;
            return Object.assign({}, state);
        default:
            break;
    }
	return state;
}
