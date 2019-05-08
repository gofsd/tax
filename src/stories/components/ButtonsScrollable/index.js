import * as React from "react";
import { Button, Text } from "native-base";
import { StyleSheet } from "react-native";


class ButtonsScrollable extends React.Component {
    state = {
        layout: null,
        saw: null,
    };

    handlePress = (flag, i) => {
        this.setState({
            [flag]: i,
        })
    };

    renderButtons = (number, flag) => {
        const { layout, saw } = this.state;
        let buttons = [];

        for (let i = 0; i < number; i++) {
            buttons.push(
                <Button
                    key={`${flag}${i}`}
                    style={(flag === 'layout')
                        ? (layout === i)
                            ? style.activeButton
                            : style.button
                        : (flag === 'saw')
                            ? (saw === i)
                                ? style.activeButton
                                : style.button
                            : style.button}
                    onPress={() => this.handlePress(flag, i)}
                >
                    <Text style={{fontSize: 16}}>{`${(flag === 'saw') ? `${i + 1}` : `M${(i < 9) ? '0' : ''}${i + 1}`}`}</Text>
                </Button>
            )
        }
        return buttons
    };

    render () {
        const { number, flag } = this.props;
        return this.renderButtons(number, flag)
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
});

export default ButtonsScrollable;
