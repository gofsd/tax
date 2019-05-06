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
import ActionButton from "react-native-action-button";


import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
}
export interface State {}


import SectionedMultiSelect from "react-native-sectioned-multi-select";

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


class FilterOfDepartment extends React.Component{
  onValueChange = (value) => {
    this.setState({
      selected: value
    });
  };
      state = {
      selected: "key1",
                  textInputValue: "",
                        selectedItems: [],
      company: [],
      forestery: {},
      quartal: [],
      department: []

    }
  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
  };
  selectFilter = (option) => {
    let filteredArray = [];


   //this.setState({quartal: this.props.M00.filter(it => it.KAIG === option.id).map((it, idx, arr) => ({label: it.KAWN, id: idx}))});

    //return this.props.KAIG.map((it, idx, arr) => ({label: it.NAME, id: idx}));
  }
  render() {
    console.log(this.props, "props");
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
                    data={/*this.props.KAIG.map((it, idx, arr) => ({label: it.NAME, id: it.KAIG}))*/ []}
                    initValue="Оберiть лiсництво"
                    supportedOrientations={["landscape"]}
                    accessible={true}
                    scrollViewAccessibilityLabel={"Scrollable options"}
                    cancelButtonAccessibilityLabel={"Cancel Button"}
                    onChange={this.selectFilter} />
                <ModalSelector
                    data={this.state.quartal}
                    initValue="Оберiть квартал"
                    supportedOrientations={["landscape"]}
                    accessible={true}
                    scrollViewAccessibilityLabel={"Scrollable options"}
                    cancelButtonAccessibilityLabel={"Cancel Button"}
                    onChange={this.selectFilter} />




                    <Button full info onPress={() => this.props.navigation.navigate("BlankPage")}>
            <Text>Шукати</Text>
          </Button>

                </View>




            </Body>
          </Form>
        </Content>
        <Footer >
				<FooterTab>
            <Button vertical>
              <Icon name="navigate" />
              <Text>Карта</Text>
            </Button>
            <Button vertical>
              <Icon name="settings" />
              <Text>Налаштування</Text>
            </Button>
          </FooterTab>
					</Footer>
      </Container>
    );
  }
}

FilterOfDepartment.defaultProps = {
  list: ["First ittem", "second item"],
};

export default FilterOfDepartment;
