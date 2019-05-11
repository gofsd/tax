import * as React from "react";
import { Button, Text, Icon, View } from "native-base";
import { StyleSheet } from "react-native";
import ButtonScrollable from '../ButtonsScrollable'

class SimpleButton extends React.Component {
    render() {
        const { isActive, isChildren, onPress, id, flag, children } = this.props;
        if (id === null) return null;

        const isM10 = id === 10 && !isChildren && flag !== 'saw';
        const styleButton = (isActive && isChildren)
            ? style.activeM10
            : (isChildren)
                ? style.m10Buttons
                : (isActive)
                    ? style.activeButton
                    : style.button;

        return <View>
            <Button
                style={styleButton}
                onPress={() => onPress(flag, id)}
                key={`${flag}${id}`}
            >
                {console.log('key', `${flag}${id}`)}
                <Text style={(isM10) ? style.textM10 : {fontSize: 16, paddingLeft: 0, paddingRight: 0}}>
                    {`${(flag === 'children') ? `M10.${id}` : (flag === "saw") ? `${id}` : `M${(id < 10) ? "0" : ""}${id}`}`}
                </Text>
                {(isM10) ? <Icon name={`${(isActive) ? 'arrow-down' : 'arrow-up'}`} style={{marginLeft: 0, marginRight: 0, paddingRight: 4}}/> : null}
            </Button>
            {(isM10 && isActive) ? <ButtonScrollable data={children} flag={'children'}/> : null}
        </View>
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
    },
    textM10: {
        fontSize: 16,
        paddingRight: 4
    }
});

export default SimpleButton;
