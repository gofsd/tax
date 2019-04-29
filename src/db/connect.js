import SQLite from "react-native-sqlite-storage";

const errorCB = (err)=> {
    console.log("SQL Error: " + err);
};

const openCB = (some) => {
    console.log("Database OPENED", some);
};


export default new Promise((resolve, reject) => {
    return SQLite.openDatabase("tax.db", "1.0", "Test Database", 200000, resolve, reject);
})
;
