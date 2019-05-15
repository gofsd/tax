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
import { StyleSheet } from "react-native";
import ModalSelector from "react-native-modal-selector";
import ActionButton from "react-native-action-button";


import styles from "./styles";

export
interface
Props
{
    navigation: any;
    list: any;
}
export
interface
State
{
}


import SectionedMultiSelect from "react-native-sectioned-multi-select";
import RNPicker from "rn-modal-picker";

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
        icon: {uri: "https://cdn4.iconfinder.com/data/icons/free-crystal-icons/512/Gemstone.png"}, // web uri
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


class FilterOfDepartment extends React.Component {
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
        this.setState({selectedItems});
    };
    selectFilter = (option) => {
        let filteredArray = [];


        //this.setState({quartal: this.props.M00.filter(it => it.KAIG === option.id).map((it, idx, arr) => ({label: it.KAWN, id: idx}))});

        //return this.props.KAIG.map((it, idx, arr) => ({label: it.NAME, id: idx}));
    }

    state = {
        forestries:[],
        quartal: [],
        selected2: {}
    }


    onValueChange2 = (idx, value, CODE) => {
        const {selected2} = this.state;
        selected2[CODE] = value;
        this.setState({
            selected2
        });
    }

    componentDidMount() {
        this.getQuarters();
        this.getForestries();
    }

    getForestries = async() => {
        const forestries = (await this.props.getForestries()).data.forestries;
        console.log();
        this.setState({forestries: forestries.map(it => { const item = this.props.KAIG.find(x => x.KAIG == it.kaig); return {name: item.NAME, id: item.KAIG};})});
    }

    getQuarters = async () => {
        const quartal = (await this.props.getQuarters({
    "table": "M00",
    "kalg": 13050101,
    "kaig": 1
})).data.map(it=> ({id: it.KAWN, name: it.KAWN}));
        console.log(quartal, "from get qurtels`");
        this.setState({quartal});
    }





    render() {
        console.log(this.props, this.state, "from other day");
        // console.log(this.props.getMequette());
        //  console.log(this.props.getForestries());

        let index = 0;
        const data = [
            {name: "Some name", id: 1},
            {name: "Sem data", id:2}
        ];
        if (this.state.forestries.length == 0 || this.state.quartal.length == 0)
        {return <View />;}
        return (
            <Container style={styles.container}>
                <Header style={{backgroundColor: "#333"}}>

                    <Body>
                    <Title>Виконавець: Дмитро</Title>
                    </Body>

                </Header>
                <Content>
                    <Form>
                        <Body>
                        <View >
         <Text style={{marginLeft: 15, marginTop: 10, marginBottom: 5}}>Оберіть лісництво</Text>
           <RNPicker
          dataSource={this.state.forestries}
          dummyDataSource={this.state.forestries}
          defaultValue={false}
          pickerTitle={"Лicництво"}
          showSearchBar={true}
          disablePicker={false}
          changeAnimation={"none"}
          searchBarPlaceHolder={"Пошук"}
          showPickerTitle={true}
          pickerStyle={Styles.pickerStyle}
          selectedLabel={this.state.selected2.KAIG}
          placeHolderLabel={this.state.placeHolderText}
          selectLabelTextStyle={Styles.selectLabelTextStyle}
          placeHolderTextStyle={Styles.placeHolderTextStyle}
          dropDownImageStyle={Styles.dropDownImageStyle}
          selectedValue={(idx, value) =>this.onValueChange2(idx, value, "KAIG")}
        />

         <Text style={{marginLeft: 15, marginTop: 10, marginBottom: 5}}>Оберіть квартали</Text>
           <RNPicker
          dataSource={this.state.quartal}
          dummyDataSource={this.state.quartal}
          defaultValue={false}
          pickerTitle={"Квартал"}
          showSearchBar={true}
          disablePicker={false}
          changeAnimation={"none"}
          searchBarPlaceHolder={"Пошук"}
          showPickerTitle={true}
          pickerStyle={Styles.pickerStyle}
          selectedLabel={this.state.selected2.KAWN}
          placeHolderLabel={this.state.placeHolderText}
          selectLabelTextStyle={Styles.selectLabelTextStyle}
          placeHolderTextStyle={Styles.placeHolderTextStyle}
          dropDownImageStyle={Styles.dropDownImageStyle}
          selectedValue={(idx, value) =>this.onValueChange2(idx, value, "KAWN")}
        />
                          <View padder>
                           <Button style={{backgroundColor: "#333"}} full info
                                    onPress={() => this.props.navigation.navigate("BlankPage")}>
                                <Text>Шукати</Text>
                            </Button>
                            </View>

                        </View>


                        </Body>
                    </Form>
                </Content>
                <Footer>
                    <FooterTab style={{backgroundColor: "#333"}}>
                        <Button vertical>
                            <Icon name="navigate"/>
                            <Text>Карта</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="settings"/>
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
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  searchBarContainerStyle: {
    marginBottom: 10,
    flexDirection: "row",
    height: 40,
    shadowOpacity: 1.0,
    shadowRadius: 5,
    shadowOffset: {
      width: 1,
      height: 1
    },
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "#d3d3d3",
    borderRadius: 10,
    elevation: 3,
    marginLeft: 10,
    marginRight: 10
  },

  selectLabelTextStyle: {
    color: "#000",
    textAlign: "left",
    width: "99%",
    padding: 10,
    flexDirection: "row"
  },
  placeHolderTextStyle: {
    color: "#D3D3D3",
    padding: 10,
    textAlign: "left",
    width: "99%",
    flexDirection: "row"
  },
  dropDownImageStyle: {
    marginLeft: 10,
    width: 10,
    height: 10,
    alignSelf: "center"
  },

  pickerStyle: {
    marginLeft: 18,
    elevation:3,
    paddingRight: 25,
    marginRight: 10,
    marginBottom: 2,
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 1,
      height: 1
    },
    borderWidth:1,
    shadowRadius: 10,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "#d3d3d3",
    borderRadius: 5,
    flexDirection: "row"
  }
});
export default FilterOfDepartment;
