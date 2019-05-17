import * as React from "react";
import {
    Button,
    Text,
    Icon,
    View,
    Container,
    Footer,
    FooterTab,
    Header,
    Content,
    Body,
    Title,
    ListItem,
    Switch,
    Right,
    Left,
    Form,
} from "native-base";
import {StyleSheet} from "react-native";
import MaquetteForm from "../../../stories/components/MaquetteForm";
import RNPicker from "rn-modal-picker"

class Accordion extends React.Component {
    state = {
        items: [],
    };

    renderForm = (id) => {
        return <View>
                <Text style={{fontSize: 17, marginLeft: 5, marginTop: 5}}>{'Порода'}</Text>
                <RNPicker
                    dataSource={this.props.data.map((item) => {return {id: item.KASP, name: item.NAME}})}
                    dummyDataSource={this.props.data.map((item) => {return {id: item.KASP, name: item.NAME}})}
                    defaultValue={false}
                    pickerTitle={'Порода'}
                    showSearchBar={true}
                    disablePicker={false}
                    changeAnimation={"none"}
                    searchBarPlaceHolder={"Пошук"}
                    showPickerTitle={true}
                    pickerStyle={style.pickerStyle}
                    selectedLabel={this.state.items.find((item) => item && item.id === id).selected}
                    placeHolderLabel={'Оберіть породу'}
                    selectLabelTextStyle={style.selectLabelTextStyle}
                    placeHolderTextStyle={style.placeHolderTextStyle}
                    dropDownImageStyle={style.dropDownImageStyle}
                    selectedValue={(idx, value) => this.selectValue(id, value)}
                />
            </View>
    };

    getItem = (id, isOpen) => {
        return <View key={`accordionItem${id}`}>
            <View style={style.buttonsContainerAccordion}>
                <Button style={style.buttonContent} onPress={() => this.openCloseItem(id)}>
                    <Text style={style.textColor}>{this.state.items.find((item) => item && item.id === id).selected || 'Порода не обрана'}</Text>
                    <Icon style={style.textColor} name={(isOpen) ? 'arrow-up' : 'arrow-down'}/>
                </Button>
                <Button style={style.buttonDelete} onPress={() => this.deleteItem(id)}>
                    <Icon style={style.deleteIcon} name={"trash"}/>
                </Button>
            </View>
            {(isOpen) ? <View>
                {this.renderForm(id)}
            </View> : null}
        </View>;
    };

    addItem = () => {
        this.setState((prev) => ({
            items: [...prev.items, {id: prev.items.length, isOpen: false, selected: ''}]
        }));
    };

    openCloseItem = (id) => {
        this.setState((prev) => ({
            items: prev.items.map((item) => {
                return (item) ? {...item, isOpen: (item.id === id) ? !item.isOpen : item.isOpen} : null;
            })
        }));
    };

    deleteItem = (id) => {
        this.setState((prev) => ({
            items: prev.items.map((item) => (item && item.id === id) ? null : item)
        }));
    };

    selectValue = (id, value) => {
        this.setState((prev) => ({
            items: prev.items.map((item) => (item && item.id === id) ? {...item, selected: value} : item)
        }));
    };

    render() {
        return <View style={style.containerAcordion}>
            <View style={style.buttonsContainer}>
                <Text style={style.textAddButton}>Порода</Text>
                <Button style={style.addButton} onPress={() => this.addItem()}><Icon style={style.textColor} name={"add-circle"}/></Button>
            </View>
            {this.state.items.map((item) => (item) ? this.getItem(item.id, item.isOpen) : null)}
        </View>;
    }
}

const style = StyleSheet.create({
    containerAcordion: {
        borderWidth: 2,
        borderRadius: 8,
        borderColor: "#ddd",
        width: "96%",
        marginLeft: 5,
        marginBottom: 15
    },
    buttonsContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        backgroundColor: "#ddd",
        alignItems: "center",
    },
    buttonsContainerAccordion: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        backgroundColor: "#ddd",
        alignItems: "center",
        marginTop: 5,
    },
    buttonContent: {
        width: "90%",
        backgroundColor: "#fff",
        borderColor: "#555",
        borderWidth: 1,
        paddingRight: 10
    },
    buttonDelete: {
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: "#ddd",
        borderWidth: 1,
        alignItems: "center",
        borderColor: "transparent",
        width: "10%",
        justifyContent: "center"
    },
    deleteIcon: {
        color: "#000",
        marginLeft: 0,
        marginRight: 0,
    },
    addButton: {
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: "#ddd",
        borderWidth: 1,
        alignItems: "center",
        borderColor: "transparent",
        width: "10%",
        justifyContent: "center"
    },
    textAddButton: {
    //   width: "90%",
      marginLeft: 10
    },
    textColor: {
        color: "#000",
        marginRight: 0,
        marginLeft: 0,
        // margin: "auto"
    },
    pickerStyle: {
        marginLeft: 18,
        elevation: 3,
        paddingRight: 25,
        marginRight: 10,
        marginBottom: 2,
        shadowOpacity: 1.0,
        shadowOffset: {
            width: 1,
            height: 1
        },
        borderWidth: 1,
        shadowRadius: 10,
        backgroundColor: "rgba(255,255,255,1)",
        shadowColor: "#d3d3d3",
        borderRadius: 5,
        flexDirection: "row"
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
});

export default Accordion;
