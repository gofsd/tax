import * as metadata from "../seeds";
import Realm from "realm";

const { STRUCTURERBD, maket_availability } = metadata;
const params = { STRUCTURERBD, maket_availability };
metadata.STRUCTURERBD.forEach(item => params[item.RELATION] = metadata[item.RELATION]);

// Define your models and their properties
const getRealmType = (type) => {
    switch (type) {
        case "SMALLINT":
            return "int";
        case "INTEGER":
            return "int";
        default:
            return "float";
    }
};

const addToStructurerBdMetadata = () => {
  Object.keys(params).forEach(metaTabl => {
    console.log(params[metaTabl], "from add to structure bd metadata");
  } );
};


export const schemas = metadata.STRUCTURERBD.reduce((ac, item, i, arr) => {
    if (!ac[item.TABL]) {
        const properties = {};
        properties.state = getRealmType("INTEGER");
        properties[item.CODE] = getRealmType(item.TYPS);
        ac[item.TABL] = {
            name: item.TABL,
            properties
        };
    } else {
        ac[item.TABL].properties[item.CODE] = getRealmType(item.TYPS);
    }

    //console.log(ac, item, i, arr, 'from migration:')
    return ac;
}, {});



console.log(schemas, "after all");
const arrSchemas = Object.keys(schemas).map(item => schemas[item]);
console.log(arrSchemas);
const CarSchema = {
  name: "Car",
  properties: {
    make:  "string",
    model: "string",
    miles: {type: "int", default: 0},
  }
};
const PersonSchema = {
  name: "Person",
  properties: {
    name:     "string",
    birthday: "date",
    cars:     "Car[]",
    picture:  "data?" // optional property
  }
};

Realm.open({schema: [CarSchema, PersonSchema]})
  .then(realm => {
    // Create Realm objects and write to local storage
    realm.write(() => {
      const myCar = realm.create("Car", {
        make: "Honda",
        model: "Civic",
        miles: 1000,
      });
      myCar.miles += 20; // Update a property value
    });

    // Query Realm for all cars with a high mileage
    const cars = realm.objects("Car").filtered("miles > 1000");

    // Will return a Results object with our 1 car
    console.log(cars.length, "from realm"); // => 1

    // Add another car
    realm.write(() => {
      const myCar = realm.create("Car", {
        make: "Ford",
        model: "Focus",
        miles: 2000,
      });
    });

    // Query results are updated in realtime
    cars.length; // => 2
  })
  .catch(error => {
    console.log(error);
  });


const migrateDb = (db) => {

};
const result = migrateDb();

export default migrateDb;

