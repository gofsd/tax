import { SET_MIGRATION, SET_CONNECTION, SET_SEEDS, START_EXPORT, START_IMPORT, END_CACHING, SET_TABLES_META, SET_FORESTRIES, SET_QUARTALS, SET_STRUCT_AND_AVAIL } from "../constants/actions";
const initialState = {
    migrated: false,
    seeded: false,
    connected: false,
    exporting: false,
    importing: false,
    cached: false,
    tablesMeta: {},
    forestries: [],
    quartels: []
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
        case SET_TABLES_META:
            return { ...state, tablesMeta: action.payload };
        case SET_FORESTRIES:
            return { ...state, forestries: action.payload };
        case SET_QUARTALS:
            return {...state, quartels: action.payload };
        case SET_STRUCT_AND_AVAIL:
            return { ...state, ...action.payload };
        default:
            break;
    }
	return state;
}
