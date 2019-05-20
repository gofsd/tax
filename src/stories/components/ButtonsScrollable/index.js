import * as React from "react";
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

    componentWillMount() {
        const { data, flag } = this.props;

        this.createButtons(data, flag)
    }

    createButtons = (data, flag) => {
        let buttons = [];

        if (flag === 'layout') {
            data.M.map((item, index) => {
                buttons.push({
                    id: (item.availability === 2 || item.on) ? item.id : null,
                    flag: flag,
                    isActive: index === 0,
                });
            });

            let isM10 = false;

            data.children.forEach((item) => {
                if (item.availability === 2 || item.on) {
                    isM10 = true
                }
            });

            if (isM10) {
                buttons.push({
                    id: 10,
                    flag: flag,
                    isActive: false,
                });
            }
        }

        if (flag === 'saw') {
            data.map((item, index) => {
                buttons.push({
                    id: item.id,
                    flag: flag,
                    isActive: index === 0,
                });
            })
        }

        if (flag === 'children') {
            data.map((item, index) => {
                buttons.push({
                    id: (item.availability === 2 || item.on) ? item.id : null,
                    flag: flag,
                    isActive: index === 0,
                    isChildren: true,
                });
            });
        }

        buttons.sort((a, b) => {
            return a.id - b.id;
        });

        this.setState({
            buttons: buttons
        });
    };

    handlePress = (flag, i) => {
        const { changeForm, selectSaw } = this.props;

        if (flag === "layout" && this.state.layout !== i) changeForm(`M${(i < 10) ? "0" : ""}${i}`);
        if (flag === 'saw' && this.state.saw !== i) selectSaw(i);
        if (flag === 'children' && this.state.children !== i) changeForm(`M10`);

        this.setState({[flag]: i});
    };

    render () {
        const { flag, data } = this.props;
        const { [flag]: activeID } = this.state;

        return this.state.buttons.map((button) => (button.id) ? <SimpleButton
            id={button.id}
            key={`${button.flag}${button.id}`}
            flag={button.flag}
            isActive={button.id === activeID && button.flag === flag}
            isChildren={button.isChildren}
            children={(button.id === 10 && flag === 'layout') ? data.children : null}
            onPress={this.handlePress}
            changeForm={this.props.changeForm}
        /> : null);
    }
}

export default ButtonsScrollable;
