import  * as seeds from "../db/seeds"
import { INIT_METADATA } from "../constants/actions"

export const initMetadata = () => {
    const { M99, M00, M01, STRUCTURERBD } = seeds

    const params = { M99, M00, M01, STRUCTURERBD }
    params.STRUCTURERBD.forEach(item => params[item.RELATION] = seeds[item.RELATION])
    return {
        type: INIT_METADATA,
        payload: params
    }
}