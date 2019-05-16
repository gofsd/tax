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
} from "native-base";
import {StyleSheet} from "react-native";
import MaquetteForm from "../../../stories/components/MaquetteForm";

class Accordion extends React.Component {
    state = {
        items: [],
    };

    getItem = (id, isOpen) => {
        return <View key={`accordionItem${id}`}>
            <View style={style.buttonsContainerAccordion}>
                <Button style={style.buttonContent} onPress={() => this.openCloseItem(id)}>
                    <Text style={style.textColor}>Тут буде назва обраної породи</Text>
                    <Icon style={style.textColor} name={(isOpen) ? "arrow-dropup" : "arrow-dropdown"}/>
                </Button>
                <Button style={style.buttonDelete} onPress={() => this.deleteItem(id)}>
                    <Icon style={style.deleteIcon} name={"trash"}/>
                </Button>
            </View>
            {(isOpen) ? <View>
                <MaquetteForm/>
            </View> : null}
        </View>;
    };

    addItem = () => {
        this.setState((prev) => ({
            items: [...prev.items, {id: prev.items.length, isOpen: false}]
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
});

export default Accordion;
