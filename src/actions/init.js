import  * as metadata from "../db/seeds";
import { INIT_METADATA } from "../constants/actions";

export const initMetadata = () => {
    const { STRUCTURERBD, maket_availability } = metadata;
    console.log(metadata, "from init");
    const params = { STRUCTURERBD, maket_availability };
    params.STRUCTURERBD.forEach(item => params[item.RELATION] = metadata[item.RELATION]);
    return {
        type: INIT_METADATA,
        payload: params
    };
}
;
