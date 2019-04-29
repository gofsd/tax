// @flow
import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import BlankPage from "./container/BlankPageContainer";
import Sidebar from "./container/SidebarContainer";
import Search from "./stories/screens/Search";
import ListOfDepartments from "./stories/screens/ListOfDepartments";
import ListOfMakets from "./stories/screens/ListOfMakets";
//import SearchOfDepartments from "./stories/screens/SearchDepartments";



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
		Home: { screen: Home },
		Search: { screen: Search },
		//ListOfDepartments: { screen: ListOfDepartments},
		ListOfMakets: { screen: ListOfMakets },
		//SearchOfDepartments: { screen: SearchOfDepartments }
				Drawer: { screen: Drawer }


	},
	{
		initialRouteName: "Login",
		headerMode: "none"
	}
);

export default () => (
	<Root>
		<App />
	</Root>
);
