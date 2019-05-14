import Realm from "realm";
import { schemas } from "../db/migration";


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

export const exportMaquette = (schemaName = "M01") => async (dispatch, getState) => {
    const schema = schemas[schemaName];
    const realm = await Realm.open({schema: [schema], deleteRealmIfMigrationNeeded: true});

const start = new Date().getTime();
    const result = realm.objects(schema.name);
    const end = new Date().getTime();


    realm.close();
    return result;
};

export const importMaquette = (schemaName = "M00", data = []) => async dispatch => {
    const schema = schemas[schemaName];
    Realm.open({schema: [schema], deleteRealmIfMigrationNeeded: true, inMemory : true})
      .then(realm => {
       realm.write(() => {
           //realm.create(schema.name, [{id: `${data[0].KAIG}_${data[0].KAWN}_${data[0].KAVN}`, ...data[0]}], true);
           for ( let i = 0; i < data.length; i++){
            realm.create(schema.name, {id: `${data[i].KAIG}_${data[i].KAWN}_${data[i].KAVN}`, ...data[i]}, true);
           }
       });
       realm.close();

  })
  .catch(error => {
    console.log(error, "realm error");
  });
};
