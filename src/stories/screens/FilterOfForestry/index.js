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
  Input,
  Footer,
  FooterTab,
} from "native-base";
import ModalSelector from "react-native-modal-selector";


import styles from "./styles";




// This is how you can load a local icon
// You can remove this if you'd like

const items = [
  {
    name: "Fruits",
    id: 0,
    children: [
      {
        name: "Apple",
        id: 10,
      },
      {
        name: "Strawberry",
        id: 17,
      },
      {
        name: "Pineapple",
        id: 13,
      },
      {
        name: "Banana",
        id: 14,
      },
      {
        name: "Watermelon",
        id: 15,
      },
      {
        name: "Kiwi fruit",
        id: 16,
      },
    ],
  },
  {
    name: "Gems",
    id: 1,
    icon: { uri: "https://cdn4.iconfinder.com/data/icons/free-crystal-icons/512/Gemstone.png" }, // web uri
    children: [
      {
        name: "Quartz",
        id: 20,
      },
      {
        name: "Zircon",
        id: 21,
      },
      {
        name: "Sapphire",
        id: 22,
      },
      {
        name: "Topaz",
        id: 23,
      },
    ],
  },
  {
    name: "Plants",
    id: 2,
    icon: "filter_vintage", // material icons icon name
    children: [
      {
        name: "Mother In Law's Tongue",
        id: 30,
      },
      {
        name: "Yucca",
        id: 31,
      },
      {
        name: "Monsteria",
        id: 32,
      },
      {
        name: "Palm",
        id: 33,
      },
    ],
  },
];


class ListOfMakets extends React.Component<Props, State> {
  onValueChange = (value: string) => {
    this.setState({
      selected: value
    });
  };
      state = {
      selected: "key1",
                  textInputValue: "",
                        selectedItems: [],

    }
  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
  };
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

          <Body>
            <Title>Виконавець: Дмитро</Title>
          </Body>

        </Header>
        <Content>
        <Form>
          <Body>
              <View style={{width: 1000, height: 1000}}>

                <ModalSelector
                    data={data}
                    initValue="Оберiть область"
                    supportedOrientations={["landscape"]}
                    accessible={true}
                    scrollViewAccessibilityLabel={"Scrollable options"}
                    cancelButtonAccessibilityLabel={"Cancel Button"}
                    onChange={(option)=>{ this.setState({textInputValue:option.label});}} />

                <ModalSelector
                    data={data}
                    initValue="Оберiть пiдприэмство"
                    supportedOrientations={["landscape"]}
                    accessible={true}
                    scrollViewAccessibilityLabel={"Scrollable options"}
                    cancelButtonAccessibilityLabel={"Cancel Button"}
                    onChange={(option)=>{ this.setState({textInputValue:option.label});}} />

                <ModalSelector
                    data={data}
                    initValue="Оберiть лiсництво"
                    supportedOrientations={["landscape"]}
                    accessible={true}
                    scrollViewAccessibilityLabel={"Scrollable options"}
                    cancelButtonAccessibilityLabel={"Cancel Button"}
                    onChange={(option)=>{ this.setState({textInputValue:option.label});}} />
                </View>




            </Body>
          </Form>
        </Content>
        <Footer >
				<FooterTab>

            <Button vertical active onPress={() => this.props.navigation.navigate("FilterOfDepartment")}>
              <Icon active name="paper" />
              <Text>Шукати</Text>
            </Button>

          </FooterTab>
					</Footer>
      </Container>
    );
  }
}

export default ListOfMakets;
