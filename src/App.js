// @flow
import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import BlankPage from "./container/BlankPageContainer";
import Sidebar from "./container/SidebarContainer";
import Search from "./stories/screens/Search";
//import FilterOfForestry from "./stories/screens/FilterOfForestry";
import FilterOfForestry from "./container/FilterForestryContainer";
import FilterOfDepartment from "./container/FilterOfDepartment";
import SelectDepartmentsAndMaquette from "./container/SelectDepartmentsAndMaquette";
import MarkupScreen from "./stories/screens/MarkupScreen"
	const Drawer = DrawerNavigator(
		{
			Home: { screen: Home },
		},
		{
			initialRouteName: "Home",
			contentComponent: props => <Sidebar {...props} />,
		}
	);
const getStackNavigator = (defaultScreen) => StackNavigator(
	{
		Login: { screen: Login },
		BlankPage: { screen: BlankPage },
		Home: { screen: Home },
		Search: { screen: Search },
		Drawer: { screen: Drawer },
		FilterOfForestry:{ screen: FilterOfForestry },
		FilterOfDepartment: { screen: FilterOfDepartment },
		SelectDepartmentsAndMaquette: { screen: SelectDepartmentsAndMaquette },
		MarkupScreen: {screen: MarkupScreen}
	},
	{
		initialRouteName: "MarkupScreen",
		headerMode: "none"
	}
);

export default (props) =>{
	const App = getStackNavigator(props.defaultScreen);
	return (
	<Root>
		<App />
	</Root>
	);
};
