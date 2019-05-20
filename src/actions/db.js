import Realm from "realm";
import { schemas, migration } from "../db/migration";
import connect from "../db/connect";
import * as ddl from "../db/migration";
import { SET_MIGRATION, SET_CONNECTION, SET_SEEDS, SET_TABLES_META } from "../constants/actions";
const db = connect();
const setConnection = (payload) => ({type: SET_CONNECTION, payload});
const setMigration = (payload) => ({type: SET_MIGRATION, payload});
const setTablesMeta = (payload) => ({type: SET_TABLES_META, payload});

export const importMaquette = (tableName = "M00", data = []) => async dispatch => new Promise((resolve, reject) => {
    console.log("IMPORT MAQUETE AND OTHER", tableName, data);
        if (!data.length){
            resolve();
        }
       db.transaction(tx => {
        let queryString = `INSERT INTO ${tableName} (${Object.keys(data[0]).map(it => `'${it}'`).join(",")})
            VALUES ${data.reduce((ac, item) => {
                return ac += `(${Object.values(item).map(it => typeof it === "string" ? `'${it.replace(/\'/g, "''")}'` : it == null ? "NULL" : it).join(",")}),`;
            }, "")}`.slice(0, -1);
        queryString = queryString + ";";
        data = null;
        tx.executeSql(queryString,
            [], (tx, result) =>{console.log(result,tx, "from executesql");  return resolve(result);}
        );
    });

});

export const executeQuery = (query) => new Promise((resolve, reject) => {
            db.executeSql(query, [], (tx, result) => {
            console.log(query, tx, result, "execute query");
            resolve({result});
        });
});

export const getDictionaries = () => async(dispatch) => {

};

export const executeArrayOfQuery = (arQueries) => async(dispatch) => {
    for (let i = 0; i < arQueries.length; i++){
        await executeQuery(arQueries[i]);
    }
};



export const startMigration = (metadata) => async (dispatch, getState) => {
    const { struct } = metadata;
    const arrayOfQeuries = ddl.generateTables(struct);
    dispatch(setTablesMeta(ddl.tablesMeta(struct)));
    const { migrated } = getState().init;
    dispatch(setConnection(true));
    if (true) {
        console.log(arrayOfQeuries, "MIGRATION ARRAY");
        await dispatch(executeArrayOfQuery(arrayOfQeuries));
        dispatch(setMigration(true));
    }
    console.log("END MIGRATION");

};

export const startSeeding = (metadata) => async (dispatch, getState) => {
    const { init: { seeded, tablesMeta } } = getState();
    const arrOfTablName = Object.keys(tablesMeta);
    console.log("from start seeds", arrOfTablName, metadata, "ARRAY SEED");
        for (let i = 0; i < arrOfTablName.length; i++) {
            const tableName = arrOfTablName[i];
            console.log(tableName, metadata[tableName], "SOME TABLE");
            if (metadata[tableName])
            {await dispatch(importMaquette(tableName, metadata[tableName]));}
        }
    console.log("ENG SEEDING");
};

export const initDb = () => async (dispatch, getState) => {
    const { migrated, seeded, connected} = getState().init;
    dispatch(setConnection(true));
    if (false) {
        dispatch(setMigration(true));
        db.transaction(tx => {
            Object.keys(ddl).reduce((ac, tableName) => tx.executeSql(ddl[tableName], [],(tx, result) => {
                console.log(ddl[tableName], "from init db query in");
            }), "");
        });
    }

    if (!seeded) {

    }
};

function realmToPlainObject(realmObj) {
  return JSON.parse(JSON.stringify(realmObj));
}

export const insertOrUpdateMaquette = (fields, schemaName = "M01") => async () => {
    const schema = schemas[schemaName];
    const realm = await Realm.open({schema: [schema], deleteRealmIfMigrationNeeded: true});
    let saved;
    realm.write(() => {
        saved = realm.create(schema.name, fields);
    });
    realm.close();
    return saved;
};


export const getSaws = (KAWN = 1, schemaName = "M01" ) => async (dispatch) => {
    const schema = schemas[schemaName];
    const realm = await Realm.open({schema: [schema], deleteRealmIfMigrationNeeded: true});
    const result = realmToPlainObject(realm.filtered("TRUEPREDICATE SORT(KAWN ASC) DISTINCT(KAWN)"));
    realm.close();
    return result;

};

export const getQuartels = (KAIG = 1, schemaName = "M00" ) => async (dispatch) => {
    const schema = schemas[schemaName];
    const realm = await Realm.open({schema: [schema], deleteRealmIfMigrationNeeded: true});
    const result = realm.objects(schema.name).snapshot();
    realm.close();
    return result;
};

export const selectMaquette = ( schemaName = "M01", id = "1_1_1" ) => async dispatch => {
    const schema = schemas[schemaName];
    const realm = await Realm.open({schema: [schema], deleteRealmIfMigrationNeeded: true});
    const result = realmToPlainObject(realm.objects(schema.name));
    realm.close();
    return result;
};

export const selectFromTable = (tableName = "", params) => async () =>new Promise((resolve, reject) => {
    const keysParams = Object.keys(params);
    const valuesParams = Object.values(params);
    if (!keysParams.length){
        resolve();
    }
    let selectStr = "";
    const arLength = keysParams.length;
    for (let i = 0; i < arLength; i++) {
        if (i === arLength - 1){
            selectStr += `${keysParams[i]} = ${typeof valuesParams[i] === "string" ? `'${valuesParams[i].replace(/\'/g, "''")}'` : valuesParams[i] == null ? "NULL" : valuesParams[i]}`;
        } else {
            selectStr += `${keysParams[i]} = ${typeof valuesParams[i] === "string" ? `'${valuesParams[i].replace(/\'/g, "''")}'` : valuesParams[i] == null ? "NULL" : valuesParams[i]} and `;
        }
    }
    const query = `select * from ${tableName} ${selectStr && "WHERE " + selectStr };`;
    db.executeSql(query, [], (tx) => {
        resolve(tx.rows.raw());
    });
});


export const exportMaquette = (schemaName = "M00") => async (dispatch) => {
    const query = `select * from ${schemaName};`;
   return new Promise((resolve, reject) => db.executeSql(query, [], (tx)=>{
    resolve(tx.rows.raw());}
   ));
};


export const insertItem = (tableName = "M00", params) => async dispatch => new Promise((resolve, reject) => {
    console.log("IMPORT MAQUETE AND OTHER", tableName, params);
        const keysParams = Object.keys(params);
        const valuesParams = Object.values(params);
        if (!keysParams.length){
            resolve();
        }
       db.transaction(tx => {
        let queryString = `INSERT INTO ${tableName} (${keysParams.map(it => `'${it}'`).join(",")})
            VALUES (${valuesParams.map(it => typeof it === "string" ? `'${it.replace(/\'/g, "''")}'` : it == null ? "NULL" : it).join(",")})`;
        tx.executeSql(queryString,
            [], (tx, result) =>{console.log(result,tx, "INSERTED");  return resolve(result);}
        );
    });

});

export const deleteItems = (tableName = "M00", params) => async dispatch => new Promise((resolve, reject) => {
        const keysParams = Object.keys(params);
        const valuesParams = Object.values(params);
        if (!keysParams.length){
            resolve();
        }
        let selectStr = "";
        const arLength = keysParams.length;
        for (let i = 0; i < arLength; i++) {
            if (i === arLength - 1){
                selectStr += `${keysParams[i]} = ${typeof valuesParams[i] === "string" ? `'${valuesParams[i].replace(/\'/g, "''")}'` : valuesParams[i] == null ? "NULL" : valuesParams[i]}`;
            } else {
                selectStr += `${keysParams[i]} = ${typeof valuesParams[i] === "string" ? `'${valuesParams[i].replace(/\'/g, "''")}'` : valuesParams[i] == null ? "NULL" : valuesParams[i]} and `;
            }
        }
        const deleteQuery = `DELETE FROM ${tableName} ${selectStr && "WHERE " + selectStr };`;
       db.transaction(tx => {
        tx.executeSql(deleteQuery,
            [], (tx, result) =>{console.log(result,tx, "DELETED");  return resolve(result);}
        );
    });

});

export const updateItem = (tableName = "M00", params) => async dispatch => new Promise((resolve, reject) => {
    console.log("IMPORT MAQUETE AND OTHER", tableName, params);
        const keysParams = Object.keys(params);
        const valuesParams = Object.values(params);
        if (!keysParams.length){
            resolve();
        }

                let selectStr = "";
        const arLength = keysParams.length;
        for (let i = 0; i < arLength; i++) {
            if (i === arLength - 1){
                selectStr += `${keysParams[i]} = ${typeof valuesParams[i] === "string" ? `'${valuesParams[i].replace(/\'/g, "''")}'` : valuesParams[i] == null ? "NULL" : valuesParams[i]}`;
            } else {
                selectStr += `${keysParams[i]} = ${typeof valuesParams[i] === "string" ? `'${valuesParams[i].replace(/\'/g, "''")}'` : valuesParams[i] == null ? "NULL" : valuesParams[i]} and `;
            }
        }
        const updateStr = `${valuesParams.map((it, idx) => typeof it === "string" ? `${keysParams[idx]} = '${it.replace(/\'/g, "''")}'` : it == null ? `${keysParams[idx]} = NULL` : `${keysParams[idx]} = ${it}`).join(",")}`;
        const updateQuery = `UPDATE ${tableName} SET ${updateStr} ${selectStr && "WHERE " + selectStr };`;
       db.transaction(tx => {

        tx.executeSql(updateQuery,
            [], (tx, result) =>{console.log(result,tx, "INSERTED");  return resolve(result);}
        );
    });

});

export const insertOrUpdateItem = (tableName = "M00", params) => async dispatch => new Promise((resolve, reject) => {
    console.log("IMPORT MAQUETE AND OTHER", tableName, params);
        const keysParams = Object.keys(params);
        const valuesParams = Object.values(params);
        if (!keysParams.length){
            resolve();
        }
       db.transaction(tx => {
        let queryString = `INSERT INTO ${tableName} (${keysParams.map(it => `'${it}'`).join(",")})
            VALUES (${valuesParams.map(it => typeof it === "string" ? `'${it.replace(/\'/g, "''")}'` : it == null ? "NULL" : it).join(",")})`;
        tx.executeSql(queryString,
            [], (tx, result) =>{console.log(result,tx, "INSERTED");  return resolve(result);}
        );
    });

});
