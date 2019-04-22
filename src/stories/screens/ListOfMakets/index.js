import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  List,
  ListItem,
  SwipeRow,
  View,
  Form,
  Picker,
  Label,
  Input
} from "native-base";
import ModalSelector from "react-native-modal-selector";
import ActionButton from "react-native-action-button";


import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
}
export interface State {}





class ListOfMakets extends React.Component<Props, State> {
  onValueChange = (value: string) => {
    this.setState({
      selected: value
    });
  };
      state = {
      selected: "key1",
                  textInputValue: ""
    }
  render() {
            let index = 0;
        const data = [
            { key: index++, label: "Red Apples" },
            { key: index++, label: "Cherries" },
            { key: index++, label: "Cranberries" },
            { key: index++, label: "Pink Grapefruit" },
            { key: index++, label: "Raspberries" },
            { key: index++, label: "Beets" },
            { key: index++, label: "Red Peppers" },
            { key: index++, label: "Radishes" },
            { key: index++, label: "Radicchio" },
            { key: index++, label: "Red Onions" },
            { key: index++, label: "Red Potatoes" },
            { key: index++, label: "Rhubarb" },
            { key: index++, label: "Tomatoes" }
        ];
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon
                active
                name="menu"
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right >
          <Button transparent>
              <Icon
                active
                name="setting"
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              />
            </Button>
          </Right>
        </Header>
        <Content>
        <Form>
          <Body>
              <View>

                <ModalSelector
                    data={data}
                    initValue="Select something yummy!"
                    supportedOrientations={["landscape"]}
                    accessible={true}
                    scrollViewAccessibilityLabel={"Scrollable options"}
                    cancelButtonAccessibilityLabel={"Cancel Button"}
                    onChange={(option)=>{ this.setState({textInputValue:option.label});}} />

                <ModalSelector
                    data={data}
                    initValue="Select something yummy!"
                    supportedOrientations={["landscape"]}
                    accessible={true}
                    scrollViewAccessibilityLabel={"Scrollable options"}
                    cancelButtonAccessibilityLabel={"Cancel Button"}
                    onChange={(option)=>{ this.setState({textInputValue:option.label});}} />

                <ModalSelector
                    data={data}
                    initValue="Select something yummy!"
                    supportedOrientations={["landscape"]}
                    accessible={true}
                    scrollViewAccessibilityLabel={"Scrollable options"}
                    cancelButtonAccessibilityLabel={"Cancel Button"}
                    onChange={(option)=>{ this.setState({textInputValue:option.label});}} />
                </View>




            </Body>
          </Form>
        </Content>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor="#9b59b6" title="New Task" onPress={() => console.log("notes tapped!")}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor="#3498db" title="Search" onPress={() =>
                  this.props.navigation.navigate("BlankPage", {
                    name: { text: "Some text" }
                  })}>
            <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>

        </ActionButton>
      </Container>
    );
  }
}

ListOfMakets.defaultProps = {
  list: ["First ittem", "second item"],
};

export default ListOfMakets;
