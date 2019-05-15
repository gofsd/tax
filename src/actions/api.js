import axios from "axios";
import * as urls from "../constants/api";
const tax = axios.create({
    baseURL: urls.tax_host
});
export const login = (token) => {
    return {
        type: "login",
        token
    };
};

export const loginRequest = (params = {}) => async (dispatch, getState) => {
    try {
        const response = await tax.post(urls.auth, params);
        tax.defaults.headers.common.Authorization = response.data.token;
        return response;
    } catch (error) {
        return error.response;
    }

};

export const getMaquette = (params = {
    "table": "M10",
    "kalg": 13050101,
    "kaig": 1
}) => async (dispatch, getState) => {
    try {
        const response = await tax.post(urls.layout, params);
        return response;
    } catch (error) {
        return error.response;
    }
};

export const setMaquette = (data = {}) => async(dispatch, getState) => {
    try {
        const response = await tax.post(urls.saveLayouts, data);
        return response;

    } catch (error) {
        return error.response;
    }
};

export const getForestries = (params = {}) => async (dispatch, getState) => {
    try {
        const response = await tax.post(urls.forestries, params);
        return response;
    } catch (error) {
        return error.response;
    }
}
;
