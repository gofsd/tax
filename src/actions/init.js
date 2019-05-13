import  * as metadata from "../db/seeds";
import { INIT_METADATA } from "../constants/actions";
import { getForestries, getMaquette } from "./api";
import { importMaquette } from "./db";

export const initMetadata = () => async (dispatch, getState) => {
    console.log("start init");
    const forestries = (await dispatch(getForestries())).data.forestries;
    let maquetteData = (await dispatch(getMaquette({...forestries[0], table: "M01"}))).data;
    console.log("before dispatch");
    await dispatch(importMaquette("M01", maquetteData));
    console.log(params, maquetteData, "from init metadata");
    const { STRUCTURERBD, maket_availability, struct } = metadata;
    console.log(metadata, "from init");
    const params = { STRUCTURERBD, maket_availability, struct };
    params.STRUCTURERBD.forEach(item => params[item.RELATION] = metadata[item.RELATION]);



    dispatch({
        type: INIT_METADATA,
        payload: params
    });
};
