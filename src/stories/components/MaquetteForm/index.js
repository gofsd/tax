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
			<Item style={{flexDirection: "column"}}>
							<Text style={{fontSize: 20}}>{lable}</Text>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: 800 }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={changeLandCategory ? changeLandCategory : this.onValueChange2.bind(this)}
              >
							{data.filter(it=>{
								return it.NAME != null;
							}).map((it, idx, arr) =>
							(<Picker.Item label={it.NAME} value={it.CODE}/>))}

              </Picker>
            </Item>
);
  }

  inputItem = (item) => {
    const { NAME } = item;
    return (<Item floatingLabel>
              <Label>{NAME}</Label>
              <Input/>
          </Item>
          );
  }

  chooseInput = (item) => {
    const { maquette, changeLandCategory } = this.props;
    console.log(this.props, "from choose");
    if (!item.RELATION) {
      return this.inputItem(item, item.CODE);
    } else {
         //   return this.inputItem(item);
      if (item.TABL === "M01" && item.CODE === "KAKZ")
      {
        return this.selectedItem(item.NAME, item.RELATION, item.CODE, changeLandCategory);
      }
      return this.selectedItem(item.NAME, item.RELATION, item.CODE);
    }
  }
  state = {
    selected2: undefined
}
onValueChange2(value) {
this.setState({
selected2: value
});
}

  render() {

    return (
        <Form style={{height:1000}}>
          {
            this.props.metadata.STRUCTURERBD.filter(item => item.TABL === this.props.maquette).map(this.chooseInput)

          }
        </Form>

    );
  }
}

MaquetteForm.defaultProps = {
  list: ["First ittem", "second item"],
};

export default MaquetteForm;
