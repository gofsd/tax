import  * as metadata from "../db/seeds";
import { INIT_METADATA, SET_SEEDS } from "../constants/actions";
import { getForestries, getMaquette, setMaquette, getMetadata, getDictionaries } from "./api";
import { importMaquette, initDb, exportMaquette, startMigration, startSeeding } from "./db";


export const setSeeds = (payload) => ({type: SET_SEEDS, payload});


export const setMetadata = (payload) => ({ type: INIT_METADATA, payload });


export const initMetadata = () => async (dispatch, getState) => {
    console.log("start init");
    const { seeded, cached } = getState().init;
    if (true){
      console.log("IN SEEDS, change");
        const metadata = (await dispatch(getMetadata())).data;
        const dictionaries = (await dispatch(getDictionaries())).data;


      console.log(metadata,  "from init in if");
      dispatch(setMetadata({ metadata, dictionaries }));
      await dispatch(startMigration());
      await dispatch(startSeeding());
      dispatch(setSeeds(true));
    }

    const { STRUCTURERBD, maket_availability, struct } = metadata;
    const params = { STRUCTURERBD, maket_availability, struct };
    params.STRUCTURERBD.forEach(item => params[item.RELATION] = metadata[item.RELATION]);
    try {
     // const result = await dispatch(initDb());
    } catch (err) {
      console.info(err, "from init db");
    }
    dispatch({
        type: INIT_METADATA,
        payload: { metadata: params, dictionaries: params}
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
