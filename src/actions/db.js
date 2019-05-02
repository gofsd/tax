import connect from "../db";

export const insert = () => {

}

export const update = () => {

}

export const deleteItems = () => {

}

export const select = ( url ) => async dispatch => {
    dispatch(fetchListSuccess((url)));
    dispatch(listIsLoading(false));
};

export const initDatabase = () => async dispatch => {
    
}