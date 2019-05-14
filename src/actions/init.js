import  * as metadata from "../db/seeds";
import { INIT_METADATA } from "../constants/actions";
import { getForestries, getMaquette, setMaquette } from "./api";
import { importMaquette, initDb, exportMaquette } from "./db";


export const initMetadata = () => async (dispatch, getState) => {
    console.log("start init");
    const { STRUCTURERBD, maket_availability, struct } = metadata;
    const params = { STRUCTURERBD, maket_availability, struct };
    params.STRUCTURERBD.forEach(item => params[item.RELATION] = metadata[item.RELATION]);
    try {
      const result = await dispatch(initDb());
    } catch (err) {
      console.info(err, "from init db");
    }
    //dispatch(importMaquetteFromServer());
    dispatch({
        type: INIT_METADATA,
        payload: params
    });
};

export const importMaquetteFromServer = () => async(dispatch, getState) => {
    const forestries = (await dispatch(getForestries())).data.forestries;
    const start = new Date().getTime();
    for (let i = 0; i < forestries.length; i++) {
      let maquetteData = (await dispatch(getMaquette({...forestries[i], table: "M00"}))).data;
      await dispatch(importMaquette("M00", maquetteData));
    }
    const end = new Date().getTime();
    console.log("TIME TIME", end - start);

};

export const exportAllMaquette = () => async (dispatch, getState) => {
  const forestries = (await dispatch(getForestries())).data.forestries;
  for (let i = 0; i < forestries.length; i++) {
    const maquetteData = await dispatch(exportMaquette("M00"));
    await dispatch(setMaquette({data: maquetteData, ...forestries[i]}));
  }
};
