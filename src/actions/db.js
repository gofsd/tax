import Realm from "realm";
import { schemas, migration } from "../db/migration";
import connect from "../db/connect";
import * as ddl from "../db/migration";
import { SET_MIGRATION, SET_CONNECTION, SET_SEEDS } from "../constants/actions";
const db = connect();
const setConnection = (payload) => ({type: SET_CONNECTION, payload});
const setMigration = (payload) => ({type: SET_MIGRATION, payload});


export const startMigration = () => async (dispatch, getState) => {
    const { struct } = getState().metadata;
    const arrayOfQeuries = ddl.generateTables(struct);
    const { migrated, seeded, connected} = getState().init;
    console.log(arrayOfQeuries, "FROM MIGRATION");
    dispatch(setConnection(true));
    if (!migrated) {
        dispatch(setMigration(true));
        db.transaction(tx => {
            arrayOfQeuries.forEach((query) => tx.executeSql(query, [], (tx, result) => {
                console.log(query, tx, result, "from init db query in");
            }));
        });
    }

    if (!seeded) {

    }
};

export const startSeeding = () => async (dispatch, getState) => {
    const { metadata, init: { seeded } } = getState();

    console.log("FROM SEEDING", metadata);
    return false;
};

export const initDb = () => async (dispatch, getState) => {
    const { migrated, seeded, connected} = getState().init;
    dispatch(setConnection(true));
    if (migrated) {
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

export const exportMaquette = (schemaName = "M00") => async () => {
   return new Promise((resolve, reject) => db.executeSql(`select * from ${schemaName};`, [], (tx)=> resolve(tx.rows.raw())));
};

export const importMaquette = (tableName = "M00", data = []) => async dispatch => new Promise((resolve, reject) => {
       db.transaction(tx => {
        let queryString = `INSERT INTO ${tableName} (${Object.keys(data[0]).map(it => `'${it}'`).join(",")})
            VALUES ${data.reduce((ac, item) => {
                return ac += `(${Object.values(item).map(it => typeof it === "string" ? `'${it}'` : it == null ? "NULL" : it).join(",")}),`;
            }, "")}`.slice(0, -1);
        queryString = queryString + ";";
        data = null;
        tx.executeSql(queryString,
            [], (tx, result) =>{console.log(result,tx, "from executesql");  return resolve(result);}
        );
    });
});
