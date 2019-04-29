const isEmptyObj = (obj) => Object.entries(obj).length === 0 && obj.constructor === Object;

export const select = (params) => {
    const { tableName, ...selected } = params;
    let select = "*";
    if (!isEmptyObj(selected)) {

    }

    return `select ${select} from ${tableName}`;
};

export const insert = (params) => {

};

export const update = (params) => {

};

export const deleteItems = (params) => {

};
