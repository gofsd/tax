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
// import {StyleSheet} from "react-native";
import styles from "./styles.js";
import MaquetteForm from "../../../stories/components/MaquetteForm";

class Accordion extends React.Component {
    state = {
        items: [],
    };

    getItem = (id, isOpen) => {
        return <View key={`accordionItem${id}`}>
            <View style={styles.buttonsContainerAccordion}>
                <Button style={styles.buttonContent} onPress={() => this.openCloseItem(id)}>
                    <Text style={styles.textColor}>Тут буде назва обраної породи</Text>
                    <Icon style={styles.textColor} name={(isOpen) ? "arrow-dropup" : "arrow-dropdown"}/>
                </Button>
                <Button style={styles.buttonDelete} onPress={() => this.deleteItem(id)}>
                    <Icon style={styles.deleteIcon} name={"trash"}/>
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
        return <View style={styles.containerAcordion}>
            <View style={styles.buttonsContainer}>
                <Text style={styles.textAddButton}>Порода</Text>
                <Button style={styles.addButton} onPress={() => this.addItem()}><Icon style={styles.textColor} name={"add-circle"}/></Button>
            </View>
            {this.state.items.map((item) => (item) ? this.getItem(item.id, item.isOpen) : null)}
        </View>;
    }
}

export default Accordion;
