import * as db from "./db";
import * as init from "./init";
import { SET_QUARTALS, SET_STRUCT_AND_AVAIL } from "../constants/actions";
import { makeSaws } from "../actions/filter";

export const setQuartals = (payload) => ({ type: SET_QUARTALS, payload });

export const setStructAndAvail = (payload) => ({ type: SET_STRUCT_AND_AVAIL, payload });


export const selectList = (tableName = "", option = {}) => async (dispatch, getState) => {
    if (!tableName) {
        return false;
    }
    const result = await dispatch(db.selectFromTable(tableName, option));
    return result;
};

export const insertRow = (tableName = "", params = {}) => async (dispatch, getState) => {
    if (!tableName){
        return false;
    }
        console.log("INSERT");

    const result = await dispatch(db.insertItem(tableName, params));
    return result;
};

export const deleteRows = (tableName = "", params = {}) => async (dispatch, getState) => {
    if (!tableName){
        return false;
    }
    console.log("DELETE");
    const result = await dispatch(db.deleteItems(tableName, params));
    return result;
};

export const updateRow = (tableName = "", params = {}) => async (dispatch, getState) => {
    if (!tableName){
        return false;
    }
        console.log("UPDATE");

    const result = await dispatch(db.updateItem(tableName, params));
    return result;
};

export const insertOrUpdate = (tableName = "", params = {}) => async (dispatch, getState) => {
    if (!tableName){
        return false;
    }
        console.log("INSERT OR UPDATE");

    const result = await dispatch(db.insertOrUpdateItem(tableName, params));
    return result;
};

export const setForesteries = () => async (dispatch, getState) => {
    const { forestries } = getState().init;
    const forestriesDictionary = await dispatch(selectList("NDI30420000"));
    const updatedForestriesAr = forestries.map(it => forestriesDictionary.find(forestryIt => it.kaig == forestryIt.KAIG && it.kalg == forestryIt.KALG));
    dispatch(init.setForestries(updatedForestriesAr));
};

export const selectQuartals = (params) => async (dispatch, getState) => {
    const quartals = await dispatch(selectList("M00", params));
    dispatch(setQuartals(quartals));
};

export const loadMetadata = (params) => async (dispatch, getState) => {
    const struct = await dispatch(selectList("struct"));
    const maket_availability = await dispatch(selectList("maket_availability"));
    dispatch(setStructAndAvail({struct, maket_availability}));
};

export const setSaws = () => async (dispatch, getState) => {
    const { kaig, kawn } = this.getState().filter;
    const saws = await dispatch(selectList("M01", { kaig, kawn }));
    dispatch(makeSaws(saws));
};
