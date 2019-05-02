const initialState = {
	defaultScreen: "Login",
	isLoading: false,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case "CHANGE_ROUTE":
            return { ...action.payload }
        default:
            break;
    }
	return state;
}
