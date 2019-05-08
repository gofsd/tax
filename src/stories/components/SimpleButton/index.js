import * as React from "react";
import { Button, Text, Icon, View } from "native-base";
import { StyleSheet } from "react-native";

class SimpleButton extends React.Component {
    render() {
        const { text, isActive, isChildren } = this.props;

        const styleButton = (isActive && isChildren)
            ? style.activeM10
            : (isChildren)
                ? style.m10Buttons
                : (isActive)
                    ? style.activeButton
                    : style.button;

        return <Button style={styleButton}>
            <Text style={{fontSize: 16, paddingLeft: 0, paddingRight: 0}}>{text}</Text>
        </Button>
    }
}

const style = StyleSheet.create({
    button: {
        height: 75,
        width: 75,
        justifyContent: 'center',
        backgroundColor: '#333333',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000',
    },
    activeButton: {
        height: 75,
        width: 75,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#555',
        borderStyle: 'solid',
        borderColor: '#000',
    },
    m10Buttons: {
        height: 60,
        width: 60,
        padding: 0,
        justifyContent: 'center',
        backgroundColor: '#333',
        borderStyle: 'solid',
        borderWidth: 1,
        marginLeft: 15,
        borderColor: '#000',
    },
    activeM10: {
        height: 60,
        width: 60,
        padding: 0,
        justifyContent: 'center',
        backgroundColor: '#555',
        borderStyle: 'solid',
        borderWidth: 1,
        marginLeft: 15,
        borderColor: '#000',
    }
});

export default SimpleButton;
