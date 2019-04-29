import * as ddl from "./ddl";


const migrateDb = (db) => {
    db.transaction(tx => {
        const migrationQuery = Object.keys(ddl).reduce((ac, item) => {
            return ac +=  ddl[item];
        }, "");
        tx.executeSql(migrationQuery, [], resolve, reject);
    });
};



export default migrateDb;

