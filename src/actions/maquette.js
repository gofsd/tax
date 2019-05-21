import { SET_FILTER, SET_LOADING_FORM, SET_STRUCT_AND_DICT } from "../constants/actions";
import { getForestries, getMaquette, setMaquette, getMetadata } from "./api";
import { importMaquette, exportMaquette, startMigration, getDictionaries } from "./db";
import { selectList } from "./dbApi";


export const setFilter = (payload) => ({type: SET_FILTER, payload});

export const setLoadingForm = payload => ( {type: SET_LOADING_FORM, payload} );

export const setStructAndDictionaries = payload => ({ type: SET_STRUCT_AND_DICT, payload });

export const generateForm = () => async (dispatch, getState) => {
    const {
        kawn,
        kaig,
        kalg,
        name,
        kavn
    } = getState().filter;

    dispatch(setLoadingForm(true));
    const mStruct = await dispatch(selectList("struct", {tabl: name}));
    const dict = mStruct.filter(it => it.relation != "").map(it => it.relation);
    const dictionaries = await dispatch(getDictionaries(dict));
    dispatch(setStructAndDictionaries({mStruct, dictionaries}));
    dispatch(setLoadingForm(false));
    console.log("AFTER GET DICT", dictionaries);
};
