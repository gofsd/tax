import { INIT_METADATA, SET_SEEDS, SET_FORESTRIES } from "../constants/actions";
import { getForestries, getMaquette, setMaquette, getMetadata, getDictionaries } from "./api";
import { importMaquette, exportMaquette, startMigration, startSeeding } from "./db";
import { tablesMeta } from "../db/migration";


export const setSeeds = (payload) => ({type: SET_SEEDS, payload});


export const setMetadata = (payload) => ({ type: INIT_METADATA, payload });
export const setForestries = payload => ({ type: SET_FORESTRIES, payload });

export const initMetadata = () => async (dispatch, getState) => {
    const { seeded } = getState().init;
    console.log("START INIT Track change");
    if (false){
      console.log("START GET METADATA WITH IMPORT");
      const meta = (await dispatch(getMetadata())).data;
      console.log("get dictionaries");
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
      console.log("END INIT DB");
      console.log("START IMPORT");
      const start = Date.now();
      await dispatch(importMaquetteFromServer());
      const end = Date.now();
      console.log("TIME TIME", end - start);
      dispatch(setSeeds(true));

    }

};

export const importMaquetteFromServer = () => async(dispatch, getState) => {
  console.log("start import");
    const { tablesMeta } = getState().init;
    console.log(tablesMeta, "metadata");

    const tablesM = Object.keys(tablesMeta);
    const forestries = (await dispatch(getForestries())).data.forestries;
    console.log("getForestries");
    dispatch(setForestries(forestries));
    console.log("after set forestries");
    const start = new Date().getTime();
    for (let i = 0; i < forestries.length; i++) {
      for (let k = 0; k < 1; k++){
        if (!/M/g.test(tablesM[k])) {continue;}
        console.log("IMPORT DATA FROM:", tablesM[k]);
        let maquetteData = (await dispatch(getMaquette({...forestries[i], table: "M00"}))).data;
        await dispatch(importMaquette("M00", maquetteData));
        maquetteData = (await dispatch(getMaquette({...forestries[i], table: "M01"}))).data;
        await dispatch(importMaquette("M01", maquetteData));
        // let maquetteData = (await dispatch(getMaquette({...forestries[i], table: tablesM[k]}))).data;
        // await dispatch(importMaquette(tablesM[k], maquetteData));
        break;
      }
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
