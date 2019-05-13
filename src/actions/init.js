import  * as metadata from "../db/seeds";
import { INIT_METADATA } from "../constants/actions";
import { getForestries, getMaquette } from "./api";
import { importMaquette } from "./db";
import { schemas } from "../db/migration";


export const initMetadata = () => async (dispatch, getState) => {
    console.log("start init");
   const { STRUCTURERBD, maket_availability, struct } = metadata;
    console.log(metadata, "from init");
    const params = { STRUCTURERBD, maket_availability, struct };
    params.STRUCTURERBD.forEach(item => params[item.RELATION] = metadata[item.RELATION]);



    dispatch({
        type: INIT_METADATA,
        payload: params
    });
};

export const importMaquetteFromServer = () => async(dispatch, getState) => {
    const forestries = (await dispatch(getForestries())).data.forestries;
    let maquetteData = (await dispatch(getMaquette({...forestries[0], table: "M01"}))).data;
    await dispatch(importMaquette("M01", maquetteData));
};

export const exportMaquette = () => async (dsipatch, getState) => {

};
