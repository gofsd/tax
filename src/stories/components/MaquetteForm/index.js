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
    Item
} from "native-base";
import {ScrollView} from "react-native";
import ModalSelector from "react-native-modal-selector";
import ActionButton from "react-native-action-button";


import styles from "./styles";



class MaquetteForm extends React.Component {


  	selectedItem = (lable, RELATION, CODE, changeLandCategory) => {
      const { metadata } = this.props;
      const data = metadata[RELATION];
      if (!Array.isArray(data)) {
        return null;
      }
		return (
      <View>
			<Text style={{fontSize: 17, marginLeft: 5, marginTop: 5}}>{lable}</Text>
			<Item style={{flexDirection: "column", borderColor: "#d9d9d9", borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth: 2, marginLeft: 0, marginTop: 5, borderRadius: 8, flex: 0, height: 50}} picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width:"100%", borderLeftWidth: 2, borderColor: "#d9d9d9" }}
                itemStyle={{marginTop: 50}}
                placeholder="Select"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2[CODE]}
                onValueChange={this.onValueChange2}
              >
							{data.filter(it=>{
								return it.NAME != null;
							}).map((it, idx, arr) =>
							(<Picker.Item label={it.NAME} value={`${CODE}_${idx}`}/>))}

              </Picker>
            </Item>
            </View>
);
  }

  inputItem = (item) => {
    const { NAME } = item;
    return (<Item style={{ flexDirection: "column", alignItems: "flex-start", borderBottomWidth: 0, marginLeft: 0, borderColor: "#000", marginTop: 5 }}>
    <Label style={{marginLeft: 5, marginBottom: 5, color: "#000"}}>{NAME}</Label>
    <Input style={{ width: "100%", borderRadius: 8, flex: 0, borderColor: "#D9D5DC",borderWidth: 2, marginBottom: 5}} keyboardType="numeric"/>
          </Item>
          );
  }

    chooseInput = (item) => {
        const {maquette, changeLandCategory} = this.props;
        ///console.log(item, "FROM CHOOSE INPUTE");
        if (!item.RELATION) {
            return this.inputItem(item, item.CODE);
        } else {
            //   return this.inputItem(item);
            if (item.TABL === "M01" && item.CODE === "KAKZ") {
                return this.selectedItem(item.NAME, item.RELATION, item.CODE, changeLandCategory);
            }
            return this.selectedItem(item.NAME, item.RELATION, item.CODE);
        }
    }
    state = {
        selected2: {}
    }

    onValueChange2 = (value, some) => {
        const params = value.split("_");
        const {selected2} = this.state;
        selected2[params[0]] = value;
        console.log(value, "ssd", some);
        this.setState({
            selected2
        });
    }

  render() {

    return (
        <Form style={{height:1000}}>
          {
            this.props.metadata.struct.filter(item => item.TABL === this.props.maquetteName).filter(item => item.num).map(this.chooseInput)
          }
        </Form>

        );
    }
}

MaquetteForm.defaultProps = {
    list: ["First ittem", "second item"],
};

export default MaquetteForm;
