import * as React from "react";
import {Text, Container, List, ListItem, Content} from "native-base";
import {NavigationActions} from "react-navigation";

const routes = [
    {
        route: "FilterOfDepartment",
        caption: "Вибрати лісничество та квартали",
    },
    {
        route: "Saw",
        caption: "Синхронізація",
    },
];

export
interface
Props
{
    navigation: any,
}
export
interface
State
{
}

const resetAction = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName: "Login"})],
});
export default class Sidebar extends React.Component<Props, State> {
    render() {
        return (
            <Container>
                <Content>
                    <List
                        style={{marginTop: 40}}
                        dataArray={routes}
                        renderRow={data => {
                            return (
                                <ListItem
                                    button
                                    style={{
                                        backgroundColor: '#333',
                                        marginBottom: 10,
                                        marginRight: 17,
                                        justifyContent: 'center'
                                    }}
                                    onPress={() => {
                                        data.route === "Login"
                                            ? this.props.navigation.dispatch(resetAction)
                                            : this.props.navigation.navigate(data.route);
                                    }}
                                >
                                    <Text style={{color: '#fff'}}>{data.caption}</Text>
                                </ListItem>
                            );
                        }}
                    />
                </Content>
            </Container>
        );
    }
}
