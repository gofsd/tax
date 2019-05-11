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

class MaquetteForm extends React.Component {
    selectedItem = (lable, RELATION, CODE, changeLandCategory) => {
        const {metadata} = this.props;
        const data = metadata[RELATION];
        if (!Array.isArray(data)) {
            return null;
        }
        return (
            <View style={{flexDirection: "column"}}>
                <Text style={{fontSize: 17, padding: 5, marginLeft: 5, marginBottom: 5}}>{lable}</Text>
                <Item style={{
                    flexDirection: "column",
                    marginLeft: 0,
                    borderLeftWidth: 2,
                    borderRightWidth: 2,
                    borderTopWidth: 2,
                    borderRadius: 8,
                    height: 50
                }} picker>
                    <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-down"/>}
                        itemStyle={{width: "100%"}}
                        placeholder="Select"
                        placeholderStyle={{color: "#bfc6ea"}}
                        placeholderIconColor="#007aff"
                        selectedValue={this.state.selected2[CODE]}
                        onValueChange={this.onValueChange2}
                    >
                        {data.filter(it => {
                            return it.NAME != null;
                        }).map((it, idx, arr) =>
                            (<Picker.Item label={it.NAME} style={{marginLeft: 0}} value={`${CODE}_${idx}`}/>))}

                    </Picker>
                </Item>
            </View>
        );
    }

    inputItem = (item) => {
        const {NAME} = item;
        return (<Item style={{
                flexDirection: "column",
                alignItems: "flex-start",
                borderBottomWidth: 0,
                marginLeft: 0,
                borderColor: "#000",
                marginTop: 5
            }}>
                <Label style={{marginLeft: 5, marginBottom: 5, color: "#000"}}>{NAME}</Label>
                <Input style={{width: "100%", borderRadius: 8, borderColor: "#D9D5DC", borderWidth: 2, marginBottom: 5}}
                       keyboardType="numeric"/>
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
        console.log('from maquette', this.props)
        return (
            <Form style={{}}>
                <ScrollView>
                    <Text>{this.props.maquetteName}</Text>
                    {
                        this.props.metadata.struct.filter(item => item.TABL === this.props.maquetteName).filter(item => item.num).map(this.chooseInput)
                    }
                </ScrollView>
            </Form>

        );
    }
}

MaquetteForm.defaultProps = {
    list: ["First ittem", "second item"],
};

export default MaquetteForm;
