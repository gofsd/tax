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
import {ScrollView, StyleSheet} from "react-native";
import ModalSelector from "react-native-modal-selector";
import ActionButton from "react-native-action-button";
// import SearchableDropdown from "react-native-searchable-dropdown";
import RNPicker from "rn-modal-picker";


import styles from "./styles";



class MaquetteForm extends React.Component {


  	selectedItem = (lable, RELATION, CODE, changeLandCategory) => {
      const { metadata } = this.props;
      const data = metadata[RELATION];
      if (!Array.isArray(data)) {
        return null;
      }

      // const items = {data.filter(it=>{ return it.NAME != null;}).map((it, idx, arr) => ({
      // name: it.NAME,
      // id: {`${CODE}_${idx}`}
      // })))}

      const items = data.filter(it => it.NAME != null).map((it, idx) => ({
        name: it.NAME,
        id: `${CODE}_${idx}`
      }) );

      console.info(items);

		return (
      <View>
			<Text style={{fontSize: 17, marginLeft: 5, marginTop: 5}}>{lable}</Text>
			{/* <Item style={{flexDirection: "column", borderColor: "#d9d9d9", borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth: 2, marginLeft: 0, marginTop: 5, borderRadius: 8, flex: 0, height: 50}} picker>
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
							{/* {data.filter(it=>{
								return it.NAME != null;
							}).map((it, idx, arr) =>
              ({
              name: it.NAME,
              id: {`${CODE}_${idx}`}
              }))} */}

              {/* </Picker> */}
            {/* // </Item> */ }
            {/* ///// */}
            <RNPicker
          dataSource={items}
          dummyDataSource={items}
          defaultValue={false}
          pickerTitle={"Country Picker"}
          showSearchBar={true}
          disablePicker={false}
          changeAnimation={"none"}
          searchBarPlaceHolder={"Search....."}
          showPickerTitle={true}
          // searchBarContainerStyle={this.props.searchBarContainerStyle}
          pickerStyle={Styles.pickerStyle}
          selectedLabel={this.onValueChange2}
          placeHolderLabel={this.state.placeHolderText}
          selectLabelTextStyle={Styles.selectLabelTextStyle}
          placeHolderTextStyle={Styles.placeHolderTextStyle}
          dropDownImageStyle={Styles.dropDownImageStyle}
          // dropDownImage={require("./res/ic_drop_down.png")}
          selectedValue={this.state.selected2[CODE]}
        />
            
            {/* <SearchableDropdown
        onTextChange={items}
        this.state.selected2[CODE]
        onItemSelect={this.onValueChange2}
        containerStyle={{ padding: 5 }}
        textInputStyle={{
          padding: 12,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 5,
        }}
        itemStyle={{
          padding: 10,
          marginTop: 2,
          backgroundColor: "#ddd",
          borderColor: "#bbb",
          borderWidth: 1,
          borderRadius: 5,
        }}
        itemTextStyle={{ color: "#222" }}
        itemsContainerStyle={{ maxHeight: 140 }}
        items={items}
        defaultIndex={1}
        placeholder="placeholder"
        resetValue={false}
        underlineColorAndroid="transparent"
      /> */}
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

export default MaquetteForm;
