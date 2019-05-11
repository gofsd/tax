import * as React from "react";
import { Button, Text, Icon, View } from "native-base";
import SimpleButton from "../SimpleButton";


class ButtonsScrollable extends React.Component {
    constructor () {
        super();
        this.state = {
            layout: 1,
            saw: 1,
            children: 1,
            buttons: [],
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const { data, flag } = nextProps;

        this.createButtons(data, flag)
    }

    createButtons = (data, flag) => {
        let buttons = [];

        data.map((item) => {
            buttons.push({
                id: (flag === 'saw') ? item : (item.availability === 2) ? item.id : null,
                flag: flag,
                isActive: item.id === 1,
                isChildren: flag === 'children'
            });
        });

        if (this.props.children && this.props.children.length > 0) {
            buttons.push({
                id: 10,
                flag: flag,
                isActive: false,
            });
        }

        buttons.sort((a, b) => {
            return a.id - b.id
        });

        this.setState({
            buttons: buttons
        })
    };

    handlePress = (flag, i) => {
        const { changeForm } = this.props;
        if (flag === "layout" && this.state.layout !== i) {changeForm(`M${(i < 10) ? "0" : ""}${i}`);}

        this.setState({[flag]: i});
    };

    render () {
        const { flag, children } = this.props;
        const { [flag]: activeID } = this.state;

        return this.state.buttons.map((button) => (button.id) ? <SimpleButton
            id={button.id}
            key={`${button.flag}${button.id}`}
            flag={button.flag}
            isActive={button.id === activeID && button.flag === flag}
            isChildren={button.isChildren}
            children={children}
            onPress={this.handlePress}
        /> : null);
    }
}

export default ButtonsScrollable;
