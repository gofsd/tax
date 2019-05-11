import * as React from "react";
import {Container, Content, Header, Body, Title, Button, Text, Icon, Footer, Left, FooterTab, Right} from "native-base";
// import {FooterTab} from "../BlankPage";
import { ScrollView, StyleSheet, View, Alert } from "react-native";
import ButtonsScrollable from "../../../stories/components/ButtonsScrollable";
import ModalInner from '../../../stories/components/ModalInner'
import Modal from 'react-native-modal'

class Login extends React.Component {
//<this.state.MForm maquette={this.state.maquette}  stateIn={"Поточний"} changeLandCategory = {(id) =>{console.log(id, "set category"); this.setState({lantCatId: id});}}/>

    constructor(props) {
        super();
        this.state = {
            MForm: props.MForm,
            lantCatId: 3,
            maquette: "M01",
            maqByCategory: props.maket_availability.filter(item => item.kakz === 3 && (item.available === 1 || item.available === 2)),
            isVisible: false
        };
    }

    render() {
        return (
            <Container>
                <Header style={{backgroundColor: "#333", height: 64}} androidStatusBarColor={"#333"}>
                    <Left>
                        <Button transparent>
                            <Icon name="arrow-back"/>
                        </Button>
                    </Left>
                    <Body>
                    <Title style={{width: "100%", margin: "auto"}}>{"Лiсництво 1, квартал 1, видiл 1, Поточний"}</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="more"/>
                        </Button>
                    </Right>
                </Header>
                <View
                    style={{backgroundColor: "#fff", flexDirection: "row", flex: 1, justifyContent: "space-between"}}
                >
                    <ScrollView style={style.leftButtonsContainer}>
                        <ButtonsScrollable changeForm={this.props.changeForm} number={18} flag={"layout"}/>
                    </ScrollView>
                    <View style={{flex: 1}}>
                        <View style={{flex: -1, flexDirection: "row"}}>
                            <Button style={style.buttonPagination}>
                                <Text>Попередня</Text>
                            </Button>
                            <Button style={style.buttonPagination}>
                                <Text>Поточна</Text>
                            </Button>
                        </View>
                        <ScrollView style={{padding: 10}}>
                            <this.state.MForm stateIn={"Поточний"} changeLandCategory={(id) => {
                                console.log(id, "set category");
                                this.setState({lantCatId: id});
                            }}/>
                        </ScrollView>
                        <Modal
                            isVisible={this.state.isVisible}
                            onSwipeComplete={() => this.setState({ isVisible: false })}
                            swipeDirection="left"
                            onBackdropPress={() => this.setState({ isVisible: false })}
                        >
                            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                                <ModalInner/>
                                <Text>{this.props.prop}</Text>
                            </View>
                        </Modal>
                    </View>
                    <ScrollView style={style.rightButtonsContainer}>
                        <ButtonsScrollable number={18} flag={"saw"}/>
                    </ScrollView>
                </View>

                <Footer style={{borderTopWidth: 1, borderColor: '#000', height: 75}}>
                    <FooterTab style={{backgroundColor: "#333"}}>
                        <Button
                            vertical style={{width: 75, height: 75, flex: 0, backgroundColor: '#333', borderWidth: 1, borderColor: '#000'}}
                            onPress={() => {
                                this.setState({isVisible: true});
                            }}
                        >
                            <Icon name="add-circle"/>
                        </Button>
                        <Button vertical>
                            <Icon name="add-circle"/>
                            <Text>Додати</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="trash"/>
                            <Text>Видалити</Text>
                        </Button>
                        <Button vertical>
                            <Icon active name="paper"/>
                            <Text>Зберегти</Text>
                        </Button>
                        <Button vertical style={{width: 75, height: 75, flex: 0, backgroundColor: '#333', borderWidth: 1, borderColor: '#000'}}>
                            <Icon name="add-circle"/>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
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
    leftButtonsContainer: {
        height: 850,
        width: 75,
        flexGrow: 0,
        flexShrink: 0,
        overflow: "scroll",
        backgroundColor: "#000",
    },
    rightButtonsContainer: {
        minHeight: 850,
        width: 75,
        flexGrow: 0,
        flexShrink: 0,
        overflow: "scroll",
        backgroundColor: "#000",
    }
});

export default Login;
