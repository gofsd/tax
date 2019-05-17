import * as React from "react";
import {
    Container,
    Header,
    Title,
    Content,
    Text,
    Button,
    Icon,
    Body,
    View,
    Form,
    Footer,
    FooterTab,
} from "native-base";
import {Keyboard} from 'react-native';

import styles from "./styles";


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
        forestries: [],
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
        Keyboard.dismiss();
        this.getQuarters();
        this.getForestries();
    }

    getForestries = async () => {
        const forestries = (await this.props.getForestries()).data.forestries;
        console.log();
        this.setState({
            forestries: forestries.map(it => {
                const item = this.props.KAIG.find(x => x.KAIG == it.kaig);
                return {name: item.NAME, id: item.KAIG};
            })
        });
    }

    getQuarters = async () => {
        const quartal = (await this.props.getQuarters({
            "table": "M00",
            "kalg": 13050101,
            "kaig": 1
        })).data.map(it => ({id: it.KAWN, name: it.KAWN}));
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
            {name: "Sem data", id: 2}
        ];
        if (this.state.forestries.length == 0 || this.state.quartal.length == 0) {
            return <View/>;
        }
        return (
            <Container style={styles.container}>
                <Header style={{backgroundColor: "#333", width: "100%"}}>

                    <Body>
                    <Title>Виконавець: Дмитро</Title>
                    </Body>

                </Header>
                <Content>
                    <Form>
                        <Body>
                        <View>
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
                                pickerStyle={styles.pickerStyle}
                                selectedLabel={this.state.selected2.KAIG}
                                placeHolderLabel={this.state.placeHolderText}
                                selectLabelTextStyle={styles.selectLabelTextStyle}
                                placeHolderTextStyle={styles.placeHolderTextStyle}
                                dropDownImageStyle={styles.dropDownImageStyle}
                                selectedValue={(idx, value) => this.onValueChange2(idx, value, "KAIG")}
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
                                pickerStyle={styles.pickerStyle}
                                selectedLabel={this.state.selected2.KAWN}
                                placeHolderLabel={this.state.placeHolderText}
                                selectLabelTextStyle={styles.selectLabelTextStyle}
                                placeHolderTextStyle={styles.placeHolderTextStyle}
                                dropDownImageStyle={styles.dropDownImageStyle}
                                selectedValue={(idx, value) => this.onValueChange2(idx, value, "KAWN")}
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

export default FilterOfDepartment;
