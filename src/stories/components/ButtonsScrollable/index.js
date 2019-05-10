import * as React from "react";
import { Button, Text, Icon, View } from "native-base";
import SimpleButton from "../SimpleButton";
import { StyleSheet } from "react-native";


class ButtonsScrollable extends React.Component {
    constructor () {
        super();
        this.state = {
            layout: 0,
            saw: 0,
            children: 0,
            buttons: [],
        };
    }

    componentDidMount() {
        const { number, flag } = this.props;

        this.createButtons(number, flag);
    }

    createButtons = (number, flag) => {
        let buttons = [];

        for (let i = 0; i < number; i++) {
            buttons.push({
                id: i,
                flag: flag,
                isActive: false,
                isChildren: flag === 'children'
            });
        }

        this.setState({
            buttons: buttons,
        })
    };

    handlePress = (flag, i) => {
        const { changeForm } = this.props;
        if (flag === "layout" && this.state.layout !== i) {changeForm(`M${(i < 9) ? "0" : ""}${i + 1}`);}

        this.setState({[flag]: i});
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
        const {flag} = this.props;
        const { [flag]: activeID } = this.state;

        return this.state.buttons.map((button) => <SimpleButton
            id={button.id}
            key={`${button.flag}${button.id}`}
            flag={button.flag}
            isActive={button.id === activeID && button.flag === flag}
            isChildren={button.isChildren}
            onPress={this.handlePress}
        />);
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
