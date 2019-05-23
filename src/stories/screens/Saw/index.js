import * as React from "react";
import {
    Container,
    Header,
    Title,
    Content,
    Text,
    Button,
    Icon,
    Left,
    Body,
    Footer,
    FooterTab,
    View
} from "native-base";
import Modal from "react-native-modal";
import {Keyboard} from "react-native";

import styles from "./styles";
import {setForestries} from "../../../actions/init";

class Saw extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isVisible: false,
        };
    }

    componentDidMount() {
        Keyboard.dismiss();
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon
                                active
                                name="arrow-back"
                            />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Синхронізація</Title>
                    </Body>
                </Header>
                <Content>
                    <Button
                        style={{
                            width: "90%",
                            marginLeft: "5%",
                            backgroundColor: "#333",
                            justifyContent: "center",
                            marginTop: 10
                        }}
                        onPress={() => {
                            this.props.select("M00", {KALG: 1, KAIG: 1, KAWN: 1, KAKL: 1, KARA: 1, KAGE: 1, MAPL: 1, MAIS: 1, MARI: 1})
                                .then((result) => {
                                    console.log("FROM SELECT", result)
                                    if (!result) {
                                        console.log('БАЗЫ НЕТ!!!!!!!!!')
                                        this.props.initMetadata();
                                    }
                                });
                            this.props.importForestries();
                            this.props.navigation.navigate("FilterOfDepartment");
                        }}
                    >
                        <Text>Завантажити</Text>
                    </Button>

                    <Button onPress={() => this.setState({isVisible: true})}
                            style={{width: "90%", marginLeft: "5%", justifyContent: "center", marginTop: 10}}>
                        <Text>Вивантажити</Text>
                    </Button>

                    <Modal
                        isVisible={this.state.isVisible}
                        onSwipeComplete={() => this.setState({isVisible: false})}
                        swipeDirection="left"
                        onBackdropPress={() => this.setState({isVisible: false})}>
                        <View>
                            <Header style={{backgroundColor: "#333", height: 64}} androidStatusBarColor={"#333"}>
                                <Body>
                                <Title style={{width: "100%", margin: "auto"}}>{"Вивантаження"}</Title>
                                </Body>
                            </Header>
                            <View style={{backgroundColor: "#fff", height: 700}}>
                                <View style={{backgroundColor: "red", opacity: 0.5, height: 500, width: "100%"}}>
                                    <View style={{backgroundColor: "green", height: 500, width: "100%"}}/>
                                </View>
                            </View>
                            <Footer>
                                <FooterTab style={{backgroundColor: "#333"}}>
                                    <Button vertical>
                                        <Icon name="paper"/>
                                        <Text>Вивантажити</Text>
                                    </Button>
                                </FooterTab>
                            </Footer>
                        </View>
                    </Modal>
                </Content>
            </Container>
        );
    }
}

export default Saw;
