// @flow
import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import BlankPage from "./container/BlankPageContainer";
import Sidebar from "./container/SidebarContainer";
import SQLite from "react-native-sqlite-storage";

 const errorCB = (err)=> {
	console.log("SQL Error: " + err);
  };

  const successCB = () => {
	console.log("SQL executed fine");
  };

  const openCB = () => {
	console.log("Database OPENED");
  };

	var db = SQLite.openDatabase("test.db", "1.0", "Test Database", 200000, openCB, errorCB);
	db.transaction(tx => {
		tx.executeSql(`CREATE TABLE contacts (
 contact_id INTEGER PRIMARY KEY,
 first_name TEXT NOT NULL,
 last_name TEXT NOT NULL,
 email text NOT NULL UNIQUE,
 phone text NOT NULL UNIQUE
);`, [], (tx, res)=>{
console.log(res, "query complete");
});
	});

const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
	},
	{
		initialRouteName: "Home",
		contentComponent: props => <Sidebar {...props} />,
	}
);

const App = StackNavigator(
	{
		Login: { screen: Login },
		BlankPage: { screen: BlankPage },
		Drawer: { screen: Drawer },
	},
	{
		initialRouteName: "Login",
		headerMode: "none",
	}
);

export default () => (
	<Root>
		<App />
	</Root>
);
