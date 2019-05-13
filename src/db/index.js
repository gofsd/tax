//import connect from "./connect";
import migration from "./migration";
//import addInterface from "./dml";
const prepareDb = async () => {
    const db = await connect;
    await migration(db);
    const withInterface = addInterface(db);
    const resData = await withInterface.select();
    return db;

};
//const db = prepareDb();
const db = {}
export default db;
