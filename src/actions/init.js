import { INIT_METADATA, SET_SEEDS } from "../constants/actions";
import { getForestries, getMaquette, setMaquette, getMetadata, getDictionaries } from "./api";
import { importMaquette, exportMaquette, startMigration, startSeeding } from "./db";


export const setSeeds = (payload) => ({type: SET_SEEDS, payload});


export const setMetadata = (payload) => ({ type: INIT_METADATA, payload });


export const initMetadata = () => async (dispatch, getState) => {
    const { seeded } = getState().init;
    console.log("START INIT");
    if (!seeded){
      console.log("START GET METADATA");
      const meta = (await dispatch(getMetadata())).data;
      const dictionaries = (await dispatch(getDictionaries())).data;
      console.log("GET FROM API");
      const metadata = {...meta, ...dictionaries};
      console.log("ENG GET METADATA", metadata);
      //dispatch(setMetadata({ metadata, dictionaries }));
      console.log("SET METADATA TO STORE");
      await dispatch(startMigration(metadata));
      console.log("END MIGRATION", metadata);
      await dispatch(startSeeding(metadata));
      console.log("END SEEDING");
      dispatch(setSeeds(true));
      console.log("END INIT DB");
    }
};

export const importMaquetteFromServer = () => async(dispatch, getState) => {
    const forestries = (await dispatch(getForestries())).data.forestries;
    const start = new Date().getTime();
    for (let i = 0; i < forestries.length; i++) {
      let maquetteData = (await dispatch(getMaquette({...forestries[i], table: "M00"}))).data;
      await dispatch(importMaquette("M00", maquetteData));
    }
    const end = new Date().getTime();
};

export const exportAllMaquette = () => async (dispatch, getState) => {
  const forestries = (await dispatch(getForestries())).data.forestries;
  for (let i = 0; i < forestries.length; i++) {
    const maquetteData = await dispatch(exportMaquette("M00"));
    await dispatch(setMaquette({data: maquetteData, ...forestries[i]}));
  }
};
