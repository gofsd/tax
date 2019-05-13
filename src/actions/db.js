import connect from "../db";
import Realm from "realm";
import { schemas } from "../db/migration";


function realmToPlainObject(realmObj) {
  return JSON.parse(JSON.stringify(realmObj));
}

export const insertMaquette = (fields, schemaName = "M01") => async () => {
    const schema = schemas[schemaName];
    const realm = await Realm.open({schema: [schema], deleteRealmIfMigrationNeeded: true});
    let saved;
    realm.write(() => {
        saved = realm.create(schema.name, fields);
    });
    realm.close();
    return saved;
};

export const update = () => {

};
export const getSaws = (KAWN = 1, schemaName = "M01" ) => async (dispatch) => {
    const schema = schemas[schemaName];
    const realm = await Realm.open({schema: [schema], deleteRealmIfMigrationNeeded: true});
    const result = realmToPlainObject(realm.filtered("TRUEPREDICATE SORT(KAWN ASC) DISTINCT(KAWN)"));
    realm.close();
    return result;

};

export const getQuartels = (KAIG = 1, schemaName = "M01" ) => async (dispatch) => {
    const schema = schemas[schemaName];
    const realm = await Realm.open({schema: [schema], deleteRealmIfMigrationNeeded: true});
    const result = realmToPlainObject(realm.filtered("TRUEPREDICATE SORT(KAIG ASC) DISTINCT(KAIG)"));
    realm.close();
    return result;
};

export const selectMaquette = ( schemaName = "M01", id = "1_1_1" ) => async dispatch => {
    const schema = schemas[schemaName];
    const realm = await Realm.open({schema: [schema], deleteRealmIfMigrationNeeded: true});
    const result = realmToPlainObject(realm.objects(schema.name).filtered(id));
    realm.close();
    return result;
};


export const importMaquette = (schemaName = "M01", data = []) => async dispatch => {
    console.log("import maquette");
    const schema = schemas[schemaName];
    //Realm.deleteFile();
    Realm.open({schema: [schema], deleteRealmIfMigrationNeeded: true})
  .then(realm => {
       console.log(realm,schema, "realm obj");
       realm.write(() => {
           console.log({id: `${data[0].KAIG}_${data[0].KAWN}_${data[0].KAVN}`, ...data[0]},data.length, "debug");
           //realm.create(schema.name, [{id: `${data[0].KAIG}_${data[0].KAWN}_${data[0].KAVN}`, ...data[0]}], true);
           for ( let i = 0; i < data.length; i++){
            realm.create(schema.name, {id: `${data[i].KAIG}_${data[i].KAWN}_${data[i].KAVN}`, ...data[i]}, true);
           }
       });
       realm.close();
    //    let dogs = realm.objects(schema.name);
    //    console.log(realmToPlainObject(dogs.slice(0, 30)), "unit");

    // Create Realm objects and write to local storage
//     realm.write(() => {
//         const maq = realm.create(schema.name, {KAIG:1,
// KAKI:1,
// KAKL:1,
// KAKZ:1,
// KALG:1,
// KARN:1,
// KAVN:1,
// KAVQ:1,
// KAVS:1,
// KAWN:1,
// KAZU:1,
// PPGH:1, id:1, state:1});
//         console.log(maq);
//         //data.forEach(item => realm.create(schema.name, item));
//     });

  })
  .catch(error => {
    console.log(error, "realm error");
  });
};
