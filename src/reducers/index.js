import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import homeReducer from "./homeContainer";
import navigation from "./navigation"
import metadata from "./metadata"

const rootReducer = combineReducers({
	form: formReducer,
	homeReducer,
	navigation,
	metadata
});

export default rootReducer;