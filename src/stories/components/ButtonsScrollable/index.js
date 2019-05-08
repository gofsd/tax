import * as React from "react";
import { Button, Text, Icon, View } from "native-base";
import SimpleButton from "../SimpleButton";
import { StyleSheet } from "react-native";


class ButtonsScrollable extends React.Component {
    constructor () {
        super();
        this.state = {
            layout: null,
            saw: null,
            is10sActive: false,
            m10Active: 0,
        };
        this.layout = [];
        this.saw = [];
        this.layoutChildrens = [];
    }

    componentDidMount() {
        const { number, flag } = this.props;

        this.renderButtons(number, flag, 18 );
    }

    createButtons = (number, flag, m10s) => {
        for (let i = 0; i < number; i++) {
            this[flag].push(
                <SimpleButton
                    key={`${flag}${i}`}
                    text={`${(flag === "saw") ? `${i + 1}` : `M${(i < 9) ? "0" : ""}${i + 1}`}`}
                    isActive={false}
                    isChildren={false}
                />
            );
        }
        for (let i = 0; i < m10s; i++) {
            this.layoutChildrens.push(
                <SimpleButton
                    key={`m10${flag}${i}`}
                    text={`M10.${i + 1}`}
                    isActive={false}
                    isChildren={true}
                />
            );
        }
    };

    handlePress = (flag, i) => {
        const {changeForm } = this.props;
        if (flag == "layout") {changeForm(`M${(i < 9) ? "0" : ""}${i + 1}`);}
        if (i === 9) {
            this.setState((prev) => ({
                is10sActive: !prev.is10sActive,
            }));
        }
        this.setState({
            [flag]: i,
        });
    };

    renderButtons = (number, flag, m10s) => {
        const { layout, saw, is10sActive, m10Active } = this.state;
        let buttons = [];
        let buttonsM10 = [];

        for (let i = 0; i < m10s; i++) {
            buttonsM10.push(
                <Button
                    key={`m10${flag}${i}`}
                    style={(m10Active === i) ? style.activeM10 : style.m10Buttons}
                    onPress={() => this.setState({m10Active: i})}
                >
                    <Text style={{fontSize: 16, paddingLeft: 0, paddingRight: 0}}>M10.{i + 1}</Text>
                </Button>
            );
        }

        for (let i = 0; i < number; i++) {
            buttons.push(
                (i === 9 && is10sActive && flag === "layout") ? <View>
                    <Button
                        key={`${flag}${i}`}
                        style={(flag === "layout")
                            ? (layout === i)
                                ? style.activeButton
                                : style.button
                            : (flag === "saw")
                                ? (saw === i)
                                    ? style.activeButton
                                    : style.button
                                : style.button}
                        onPress={() => this.handlePress(flag, i)}
                    >
                        <Text
                            style={{fontSize: 16, paddingRight: 4}}
                        >
                            {`${(flag === "saw") ? `${i + 1}` : `M${(i < 9) ? "0" : ""}${i + 1}`}`}
                        </Text>
                        <Icon name="arrow-up" style={{marginLeft: 0, marginRight: 0, paddingRight: 4}}/>
                    </Button>
                    {buttonsM10}
                </View> : <Button
                    key={`${flag}${i}`}
                    style={(flag === "layout")
                        ? (layout === i)
                            ? style.activeButton
                            : style.button
                        : (flag === "saw")
                            ? (saw === i)
                                ? style.activeButton
                                : style.button
                            : style.button}
                    onPress={() => this.handlePress(flag, i)}
                >
                    <Text
                        style={{fontSize: 16, paddingRight: (i === 9 && flag === "layout") ? 4 : 16}}
                    >
                        {`${(flag === "saw") ? `${i + 1}` : `M${(i < 9) ? "0" : ""}${i + 1}`}`}
                    </Text>
                    {(i === 9 && flag === "layout")
                        ? <Icon name="arrow-down" style={{marginLeft: 0, marginRight: 0, paddingRight: 4}}/> : null}
                </Button>
            );
        }
        return buttons;
    };

    render () {
        const { number, flag } = this.props;
        return this.renderButtons(number, flag, 12);
    }
}

const style = StyleSheet.create({
    button: {
        height: 75,
        width: 75,
        justifyContent: "center",
        backgroundColor: "#333333",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#000",
    },
    activeButton: {
        height: 75,
        width: 75,
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#555",
        borderStyle: "solid",
        borderColor: "#000",
    },
    m10Buttons: {
        height: 60,
        width: 60,
        padding: 0,
        justifyContent: "center",
        backgroundColor: "#333",
        borderStyle: "solid",
        borderWidth: 1,
        marginLeft: 15,
        borderColor: "#000",
    },
    activeM10: {
        height: 60,
        width: 60,
        padding: 0,
        justifyContent: "center",
        backgroundColor: "#555",
        borderStyle: "solid",
        borderWidth: 1,
        marginLeft: 15,
        borderColor: "#000",
    }
});

export default ButtonsScrollable;
