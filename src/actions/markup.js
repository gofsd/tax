import { SOME_ACTION } from "../constants/actions";

export const someAction = (id) => {
    return {
        type: SOME_ACTION,
        payload: {
            id: id
        }
    }
};
