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
import { StyleSheet } from "react-native";

class ModalInner extends React.Component {
    renderItems = () => {
        const { data, setMakets } = this.props;
        return data.M.map((item) => {
            return (item.availability === 1) ? <View><ListItem key={`list${item.id}`}>
                <Left><Text>{`M${(item.id < 10) ? "0" : ""}${item.id}`}</Text></Left>
                <Body><Text>Тут буде назва макету {`M${(item.id < 10) ? "0" : ""}${item.id}`}</Text></Body>
                <Right>
                    <Switch
                        value={item.on}
                        onValueChange={(e) => {setMakets('M', item.id, e); this.forceUpdate()}}
                    />
                </Right>
            </ListItem>{(item.id === 9)
                ? <View style={{borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#000'}}>{this.renderChildren()}</View>
                : null}</View> : null;
        })
    };

    renderChildren = () => {
        const { data, setMakets } = this.props;
        return data.children.map((item) => {
            return (item.availability === 1) ? <ListItem key={`listchildren${item.id}`}>
                <Left><Text>{`M10.${item.id}`}</Text></Left>
                <Body><Text>Тут буде назва макету {`M10.${item.id}`}</Text></Body>
                <Right>
                    <Switch
                        value={item.on}
                        onValueChange={(e) => {setMakets('children', item.id, e); this.forceUpdate()}}
                    />
                </Right>
            </ListItem> : null;
        })
    };

    renderSaws = () => {
        const { saws, setSaw } = this.props;

        return saws.map((item) => {
            return <ListItem key={`saws${item.id}`}>
                <Left><Text>{`${item.id}`}</Text></Left>
                <Right>
                    <Switch
                        value={item.on}
                        onValueChange={(e) => {setSaw(item.id, e); this.forceUpdate()}}
                    />
                </Right>
            </ListItem>
        })
    };

    render() {
        return <Container>
            <Header style={{backgroundColor: "#333", height: 64}} androidStatusBarColor={"#333"}>
                <Body>
                    <Title style={{width: "100%", margin: "auto"}}>{(this.props.flag === 'layout') ? 'Оберіть можливі макети' : 'Оберіть виділи'}</Title>
                </Body>
            </Header>
            <View style={{flex: -1, flexDirection: "row"}}>
                <Button style={style.buttonPagination} onPress={() => {
                    this.props.unsetAll(this.props.flag);
                    if (this.props.flag === 'layout') this.forceUpdate();
                }}>
                    <Text>Вимкнути всі</Text>
                </Button>
                <Button style={style.buttonPagination} onPress={() => {
                    this.props.setAll(this.props.flag);
                    if (this.props.flag === 'layout') this.forceUpdate();
                }}>
                    <Text>Ввімкнути всі</Text>
                </Button>
            </View>
            <Content>
                {(this.props.flag === 'layout') ? <View>
                    {this.renderItems()}
                </View> : this.renderSaws()}
            </Content>
            <Footer>
                <FooterTab style={{backgroundColor: "#333"}}>
                    <Button vertical onPress={() => this.props.close()}>
                        <Icon name="paper"/>
                        <Text>Підтвердити</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    }
}

const style = StyleSheet.create({
    buttonPagination: {
        justifyContent: "center",
        backgroundColor: "#333333",
        borderStyle: "solid",
        borderWidth: 1,
        flex: 1,
        borderColor: "#000",
    },
});

export default ModalInner;
