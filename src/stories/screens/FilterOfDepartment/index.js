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
import {Keyboard} from "react-native";

import styles from "./styles";


import RNPicker from "rn-modal-picker";
import {insert} from "../../../db/dml/dml";


class FilterOfDepartment extends React.Component {
    onValueChange = (value) => {
        this.setState({
            selected: value
        });
    };

    moveToQuartal = () => {
        const { navigation, setFilter, forestries } = this.props;
        const { selected2: { KAIG, KAWN } } = this.state;
        const kaigValues = forestries.filter(it=> it != null).find(it => it.NAME == KAIG);
        setFilter({ kawn: KAWN, kaig: kaigValues.KAIG, kalg: kaigValues.KALG, name: "M01", kavn: 1, current: true });
        navigation.navigate("BlankPage");
    }

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
       const { select, insertItem, updateItem, deleteItems, insertOrUpdate, setForestry, setQuartals, setMeta } = this.props;
       select("M00", {KALG: 1, KAIG: 1, KAWN: 1, KAKL: 1, KARA: 1, KAGE: 1, MAPL: 1, MAIS: 1, MARI: 1}).then(result => console.log("FROM SELECT", result));
       insertItem("M00", {KALG: 1, KAIG: 1, KAWN: 1, KAKL: 1, KARA: 1, KAGE: 1, MAPL: 1, MAIS: 1, MARI: 1}).then(result => console.log("FROM INSERT", result));
       updateItem("M00", {KALG: 1, KAIG: 1, KAWN: 1, KAKL: 1, KARA: 1, KAGE: 1, MAPL: 1, MAIS: 1, MARI: 1}).then(result => console.log("FROM UPDATE", result));
       deleteItems("M00", {KALG: 1, KAIG: 1, KAWN: 1, KAKL: 1, KARA: 1, KAGE: 1, MAPL: 1, MAIS: 1, MARI: 1}).then(result => console.log("FROM DELETE", result));
       insertOrUpdate("M00", {KALG: 1, KAIG: 1, KAWN: 1, KAKL: 1, KARA: 1, KAGE: 1, MAPL: 1, MAIS: 1, MARI: 1}).then(result => console.log("FROM INSERTORUPDATE", result));
       setForestry();
              setMeta();

       setQuartals({kaig: 1, kalg: 13050101}).then(result => console.log("from set quartals", result));
       Keyboard.dismiss();


    }


    render() {
        console.log(this.props, this.state, "from other day");
        // console.log(this.props.getMequette());
        //  console.log(this.props.getForestries());
        const { forestries, quartels, setQuartals } = this.props;
        let index = 0;
        const data = [
            {name: "Some name", id: 1},
            {name: "Sem data", id: 2}
        ];

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
                        <View >
         <Text style={{marginLeft: 15, marginTop: 10, marginBottom: 5}}>Оберіть лісництво</Text>
           <RNPicker
          dataSource={forestries.filter(it=> it != null).map(it => ({...it, name: it.NAME, id: it.KAWN}))}
          dummyDataSource={forestries.filter(it=> it != null).map(it => ({...it, name: it.NAME, id: it.KAWN}))}
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
          selectedValue={(idx, value) =>{ const quartal = forestries.filter(it =>it != null).find(it => it.NAME == value); console.log(quartal); this.onValueChange2(idx, value, "KAIG");  setQuartals({kaig: quartal.KAIG, kalg: quartal.KALG}); }}
        />

         <Text style={{marginLeft: 15, marginTop: 10, marginBottom: 5}}>Оберіть квартали</Text>
           <RNPicker
          dataSource={quartels.map(it => ({...it, name: it.KAWN, id: it.KAWN}))}
          dummyDataSource={quartels.map(it => ({...it, name: it.KAWN, id: it.KAWN}))}
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
          selectedValue={(idx, value) =>this.onValueChange2(idx, value, "KAWN")}
        />
                          <View padder>
                           <Button style={{backgroundColor: "#333"}} full info
                                    onPress={this.moveToQuartal}>
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
