import  * as metadata from "../db/seeds";
import { INIT_METADATA } from "../constants/actions";
import { getForestries, getMaquette, setMaquette } from "./api";
import { importMaquette, exportMaquette } from "./db";
import { schemas } from "../db/migration";
import SQLite from "react-native-sqlite-storage";


export const initMetadata = () => async (dispatch, getState) => {
    console.log("start init");
   const { STRUCTURERBD, maket_availability, struct } = metadata;
    console.log(metadata, "from init");
    const params = { STRUCTURERBD, maket_availability, struct };
    params.STRUCTURERBD.forEach(item => params[item.RELATION] = metadata[item.RELATION]);

console.log("after set params");
    //await dispatch(exportAllMaquette());


    dispatch({
        type: INIT_METADATA,
        payload: params
    });
};

export const importMaquetteFromServer = () => async(dispatch, getState) => {
    const forestries = (await dispatch(getForestries())).data.forestries;
    let maquetteData = (await dispatch(getMaquette({...forestries[0], table: "M01"}))).data;
    await dispatch(importMaquette("M01", maquetteData));
};
   console.log("start export");
 const  errorCB = (err) => {
  console.log("SQL Error: " + err);
};

const successCB = ()=>{
  console.log("SQL executed fine");
};

const openCB = ()  => {
  console.log("Database OPENED");
};
export const exportAllMaquette = () => async (dispatch, getState) => {


var db = SQLite.openDatabase("test.db", "1.0", "Test Database", 200000, openCB, errorCB);
db.transaction((tx) => {
  tx.executeSql("SELECT * FROM Employees a, Departments b WHERE a.department = b.department_id", [], (tx, results) => {
      console.log("Query completed");

      // Get rows with Web SQL Database spec compliance.

      var len = results.rows.length;
      for (let i = 0; i < len; i++) {
        let row = results.rows.item(i);
        console.log(`Employee name: ${row.name}, Dept Name: ${row.deptName}`);
      }

      // Alternatively, you can use the non-standard raw method.

      /*
        let rows = results.rows.raw(); // shallow copy of rows Array

        rows.map(row => console.log(`Employee name: ${row.name}, Dept Name: ${row.deptName}`));
      */
    });
});
   const result = (await dispatch(exportMaquette()));
   console.log("end export", result);
};
