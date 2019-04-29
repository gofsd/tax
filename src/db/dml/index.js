import * as dml from "./dml";

const addInterface = function(db) {
    db.select = (params = { tableName: "m99"}) => new Promise((someResolve, reject)=> {
        db.executeSql(dml.select(params), [], (res) => {
        someResolve(res.rows.raw());
        }, err =>{ reject(err); console.log(err);});
        return db;
    });


    return db;
};
    // db.transaction(tx => {
    //     const migrationQuery = Object.keys(dml).reduce((ac, item) => {
    //         return ac +=  ddl[item];
    //     }, "");
    //     tx.executeSql(migrationQuery, [], resolve, reject);
    // })


export default addInterface;
