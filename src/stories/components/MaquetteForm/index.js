import * as React from "react";
import {
    Text,
    View,
    Form,
    Label,
    Input,
    Item
} from "native-base";
import { ScrollView} from "react-native";
import RNPicker from "rn-modal-picker";
import styles from "./styles";
import Accordion from "../../components/Acordion";


class MaquetteForm extends React.Component {

    componentDidMount() {
        const { generateForm } = this.props;
        generateForm();
    }

    selectedItem = (lable, RELATION, CODE, changeLandCategory) => {
        const { dictionaries, currentItem } = this.props.form;
        const data = dictionaries[RELATION];
        if (!Array.isArray(data)) {
            return null;
        }
        let curId = null;
        let strToShow = "";
        let curItem = "";
        if (currentItem.length) {
            curId = currentItem[0][CODE];
            curItem = data.find(it => it[CODE] == curId);
            console.log(curItem , "SSDS");
            if (curItem)
            {curItem = curItem.NAME;}

        }

        const items = data.filter(it => it.NAME != null).map((it, idx) => ({
            name: it.NAME,
            id: idx
        }));




        return (
            <View>
                <Text style={styles.pickerLabel}>{lable}</Text>
                <RNPicker
                    dataSource={items}
                    dummyDataSource={items}
                    defaultValue={false}
                    pickerTitle={lable}
                    showSearchBar={true}
                    disablePicker={false}
                    changeAnimation={"none"}
                    searchBarPlaceHolder={"Пошук"}
                    showPickerTitle={true}
                    pickerStyle={styles.pickerStyle}
                    selectedLabel={this.state.selected2[CODE]}
                    placeHolderLabel={curItem}
                    selectLabelTextStyle={styles.selectLabelTextStyle}
                    placeHolderTextStyle={styles.placeHolderTextStyle}
                    dropDownImageStyle={styles.dropDownImageStyle}
                    selectedValue={(id, name ) => this.onValueChange2(id, name, CODE, data )}
                />
            </View>
        );
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.saw !== nextProps.saw) {this.setState({});}
    }

    onChangeInputValue = (value, code) => {
        const { inputs } = this.state;
        inputs[code] = value;
        this.setState({ inputs });
    }

    inputItem = (item, code) => {
        const { currentItem } = this.props.form;
        const { name } = item;
        let curItVal = currentItem.length && currentItem[0][code];
        curItVal = String(curItVal);
        console.log(curItVal, "FROM INPUT");
        return (
            <Item key={name} style={styles.containerInputNumber}>
                <Label style={{marginLeft: 12, marginBottom: 5, color: "#000"}}>{name}</Label>
                <Input style={styles.inputNumber} onChangeText={(val )=> this.onChangeInputValue(val, code)} keyboardType="numeric" value={curItVal}/>
            </Item>
        );
    };

    chooseInput = (item) => {
        const {changeLandCategory} = this.props;
        console.log("CHOOSEN ITEM", item);
        if (!item.relation) {
            return this.inputItem(item, item.code);
        } else {
            //   return this.inputItem(item);
            if (item.tabl === "M01" && item.code === "KAKZ") {
                return this.selectedItem(item.name, item.relation, item.code, changeLandCategory);
            }
            return this.selectedItem(item.name, item.relation, item.code);
        }
    };

    state = {
        inputs: {},
        selected2: {}
    };

    renderForm = () => {
        return <Form>
            <ScrollView>
                {
                    this.props.metadata.struct.filter(item => item.TABL === this.props.maquetteName).filter(item => item.num).map(this.chooseInput)
                }
            </ScrollView>
            {(this.props.maquetteName === "M10") ? <Accordion
                data={{NDI10200003: this.props.NDI10200003, NDI10200005: this.props.NDI10200005}}
            /> : null}
        </Form>;
    };

    onValueChange2 = (idx, value, CODE, data) => {
        console.log(idx, value, CODE,data, "ON VALUECHANGE");
        const item = data.find(it => it.NAME ===  value);
        const { selected2, inputs } = this.state;
        selected2[CODE] = value;
        inputs[CODE] = item[CODE];
        this.setState({
            selected2,
            inputs
        });
    };

    render() {
        console.log(this.props, this.state,"from maquete form");
        const { load, mStruct } = this.props.form;
        if (load){
            return <View />;
        }
        return (
            <Form>
                <ScrollView>
                {
                    mStruct.filter(item => item.tabl === this.props.maquetteName).filter(item => item.num).map(this.chooseInput)
                }
                </ScrollView>
            </Form>
        );

        return (
            <View>{this.renderForm()}</View>
        );
    }
}

MaquetteForm.defaultProps = {
    list: ["First ittem", "second item"],
};

export default MaquetteForm;
