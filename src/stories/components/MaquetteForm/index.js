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
        const { dictionaries } = this.props.form;
        const data = dictionaries[RELATION];
        if (!Array.isArray(data)) {
            return null;
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
                    placeHolderLabel={this.state.placeHolderText}
                    selectLabelTextStyle={styles.selectLabelTextStyle}
                    placeHolderTextStyle={styles.placeHolderTextStyle}
                    dropDownImageStyle={styles.dropDownImageStyle}
                    selectedValue={(idx, value) => this.onValueChange2(idx, value, CODE)}
                />
            </View>
        );
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.saw !== nextProps.saw) this.setState({})
    }

    inputItem = (item) => {
        const { NAME } = item;
        return (<Item key={NAME} style={styles.containerInputNumber}>
                <Label style={{marginLeft: 12, marginBottom: 5, color: "#000"}}>{NAME}</Label>
                <Input style={styles.inputNumber} keyboardType="numeric"/>
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
        selected2: {}
    };

    renderForm = () => {
        return <Form>
            <ScrollView>
                {
                    this.props.metadata.struct.filter(item => item.TABL === this.props.maquetteName).filter(item => item.num).map(this.chooseInput)
                }
            </ScrollView>
            {(this.props.maquetteName === 'M10') ? <Accordion
                data={{NDI10200003: this.props.NDI10200003, NDI10200005: this.props.NDI10200005}}
            /> : null}
        </Form>
    };

    onValueChange2 = (idx, value, CODE) => {
        const {selected2} = this.state;
        selected2[CODE] = value;
        this.setState({
            selected2
        });
    };

    render() {
        return (
            <View>{this.renderForm()}</View>
        );
    }
}

MaquetteForm.defaultProps = {
    list: ["First ittem", "second item"],
};

export default MaquetteForm;
