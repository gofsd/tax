import * as db from "./db";

export const selectList = (tableName = "", option = {}) => async (dispatch, getState) => {
    if (!tableName) {
        return false;
    }
    const result = await dispatch(db.exportMaquette(tableName));
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
    const result = await dispatch(db.insertItem(tableName, params));
    return result;
};

export const updateRow = (tableName = "", params = {}) => async (dispatch, getState) => {
    if (!tableName){
        return false;
    }
        console.log("UPDATE");

    const result = await dispatch(db.insertItem(tableName, params));
    return result;
};

export const insertOrUpdate = (tableName = "", params = {}) => async (dispatch, getState) => {
    if (!tableName){
        return false;
    }
        console.log("INSERT OR UPDATE");

    const result = await dispatch(db.insertItem(tableName, params));
    return result;
}
;
