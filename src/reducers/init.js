import { SET_MIGRATION, SET_CONNECTION, SET_SEEDS, START_EXPORT, START_IMPORT, END_CACHING } from "../constants/actions";
const initialState = {
    migrated: false,
    seeded: false,
    connected: false,
    exporting: false,
    importing: false,
    cached: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_CONNECTION:
            return { ...state, connected: action.payload };
        case SET_MIGRATION:
            return { ...state, migrated: action.payload };
        case SET_SEEDS:
            return { ...state, seeded: action.payload };
        case START_EXPORT:
            return { ...state, exporting: action.payload };
        case START_IMPORT:
            return { ...state, importing: action.payload };
        case END_CACHING:
            return { ...state, cached: true };
        default:
            break;
    }
	return state;
}
