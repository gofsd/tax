// @flow
import React from "react";
import {StackNavigator, DrawerNavigator} from "react-navigation";
import {Root} from "native-base";
import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import Saw from "./container/SawContainer";
import BlankPage from "./container/BlankPageContainer";
import Sidebar from "./container/SidebarContainer";
import SidebarM from "./container/SidebarMarkup";
import Search from "./stories/screens/Search";
import ModalContainer from './container/ModalContainer'
//import FilterOfForestry from "./stories/screens/FilterOfForestry";
import FilterOfForestry from "./container/FilterForestryContainer";
import FilterOfDepartment from "./container/FilterOfDepartment";
import SelectDepartmentsAndMaquette from "./container/SelectDepartmentsAndMaquette";
import MarkupScreen from "./stories/screens/MarkupScreen";

const Drawer = DrawerNavigator(
    {
        Home: {screen: Home},
    },
    {
        initialRouteName: "Home",
        contentComponent: props => <Sidebar {...props} />,
    }
);
const getStackNavigator = (defaultScreen) => StackNavigator(
    {
        Login: {screen: Login},
        BlankPage: {screen: BlankPage},
        Home: {screen: Home},
        Saw: {screen: Saw},
        Search: {screen: Search},
        Drawer: {screen: Drawer},
        FilterOfForestry: {screen: FilterOfForestry},
        FilterOfDepartment: {screen: FilterOfDepartment},
        SelectDepartmentsAndMaquette: {screen: SelectDepartmentsAndMaquette},
        MarkupScreen: {screen: MarkupScreen},
        SidebarM: {screen: SidebarM}
    },
    {
        initialRouteName: defaultScreen ? defaultScreen : "Login",
        headerMode: "none"
    }
);

export default (props) => {
    const App = getStackNavigator(props.defaultScreen);
    return (
        <Root>
            <ModalContainer/>
            <App/>
        </Root>
    );
};
