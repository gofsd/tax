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
import {StyleSheet} from 'react-native';
import MaquetteForm from '../../../stories/components/MaquetteForm';

class Accordion extends React.Component {
    state = {
        items: [],
    };

    getItem = (id, isOpen) => {
        return <View key={`accordionItem${id}`}>
            <View style={style.buttonsContainer}>
                <Button style={style.buttonContent} onPress={() => this.openCloseItem(id)}>
                    <Text style={style.textColor}>Тут буде назва обраної породи</Text>
                    <Icon style={style.textColor} name={(isOpen) ? 'arrow-up' : 'arrow-down'}/>
                </Button>
                <Button style={style.buttonDelete} onPress={() => this.deleteItem(id)}>
                    <Icon style={style.deleteIcon} name={'trash'}/>
                </Button>
            </View>
            {(isOpen) ? <View>
                <MaquetteForm/>
            </View> : null}
        </View>
    };

    addItem = () => {
        this.setState((prev) => ({
            items: [...prev.items, {id: prev.items.length, isOpen: false}]
        }));
    };

    openCloseItem = (id) => {
        this.setState((prev) => ({
            items: prev.items.map((item) => {
                return (item) ? {...item, isOpen: (item.id === id) ? !item.isOpen : item.isOpen} : null
            })
        }));
    };

    deleteItem = (id) => {
        this.setState((prev) => ({
            items: prev.items.map((item) => (item && item.id === id) ? null : item)
        }));
    };

    render() {
        return <View>
            <View style={style.buttonsContainer}>
                <Text>Порода</Text>
                <Button style={style.addButton} onPress={() => this.addItem()}><Icon style={style.textColor} name={'add'}/></Button>
            </View>
            {this.state.items.map((item) => (item) ? this.getItem(item.id, item.isOpen) : null)}
        </View>
    }
}

const style = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
        width: '100%',
    },
    buttonContent: {
        width: '90%',
        backgroundColor: '#fff',
        borderColor: '#555',
        borderWidth: 1,
    },
    buttonDelete: {
        width: '10%',
        backgroundColor: '#fff',
        borderColor: '#555',
        borderWidth: 1,
    },
    deleteIcon: {
        color: '#000',
        marginLeft: 15,
        marginRight: 0,
    },
    addButton: {
        height: 20,
        backgroundColor: '#fff',
        borderColor: '#555',
        borderWidth: 1,
        marginLeft: 10,
    },
    textColor: {
        color: '#000'
    },
});

export default Accordion;
