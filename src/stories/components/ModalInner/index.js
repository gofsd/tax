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
    Right
} from "native-base";

class ModalInner extends React.Component {
    renderItems = () => {
        const { data, setMakets } = this.props;
        return data.M.map((item) => {
            return (item.availability === 1) ? <ListItem key={`list${item.id}`}>
                <Body><Text>{`M${(item.id < 10) ? "0" : ""}${item.id}`}</Text></Body>
                <Right>
                    <Switch
                        value={item.on}
                        onValueChange={(e) => {setMakets('M', item.id, e); this.forceUpdate()}}
                    />
                </Right>
            </ListItem> : null;
        })
    };

    renderChildren = () =>{
        const { data, setMakets } = this.props;
        return data.children.map((item) => {
            return (item.availability === 1) ? <ListItem key={`listchildren${item.id}`}>
                <Body><Text>{`M10.${item.id}`}</Text></Body>
                <Right>
                    <Switch
                        value={item.on}
                        onValueChange={(e) => {setMakets('children', item.id, e); this.forceUpdate()}}
                    />
                </Right>
            </ListItem> : null;
        })
    };

    componentDidMount() {
    }

    render() {
        return <Container>
            <Header style={{backgroundColor: "#333", height: 64}} androidStatusBarColor={"#333"}>
                <Body>
                    <Title style={{width: "100%", margin: "auto"}}>{'Оберіть можливі макети'}</Title>
                </Body>
            </Header>
            <Content>
                {this.renderItems()}
                <Header style={{backgroundColor: "#333", height: 64}} androidStatusBarColor={"#333"}>
                    <Body>
                    <Title style={{width: "100%", margin: "auto"}}>{'Оберіть можливі макети M10'}</Title>
                    </Body>
                </Header>
                {this.renderChildren()}
            </Content>
            <Footer>
                <FooterTab style={{backgroundColor: "#333"}}>
                    <Button vertical>
                        <Icon name="paper"/>
                        <Text>Підтвердити</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    }
}

export default ModalInner;
