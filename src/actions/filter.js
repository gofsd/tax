import seeds from "../db/seeds"
import { SET_FILTER } from "../constants/actions"


const setFilter = (params) => {
    return {
        type: SET_FILTER,
        payload: params
    }
} 