import * as React from "react";
import {Container, Content, Header, Body, Title, Button, Text, Icon, Footer, Left, FooterTab, Right} from "native-base";
import {ScrollView, StyleSheet, View, Alert} from "react-native";
import ButtonsScrollable from "../../../stories/components/ButtonsScrollable";
import ModalInner from "../../../container/ModalContainer";
import Modal from "react-native-modal";
import style from "./styles.js";

class Markup extends React.Component {
    constructor(props) {
        super();
        this.state = {
            MForm: props.MForm,
            lantCatId: 3,
            maquette: "M01",
            maqByCategory: props.maket_availability.filter(item => item.kakz === 3 && (item.available === 1 || item.available === 2)),
            isVisible: false,
            isVisible2: true,
        };
    }

    componentDidMount() {
        this.findAvailable();
    }

    findAvailable = () => {
        const {selectedKakz, maket_availability, createMakets} = this.props;

        let makets = [];
        let maketsM10 = [];

        maket_availability.map((item) => {
            if (item.kakz === selectedKakz && item.subtable === 0 && item.available !== 0) {
                makets.push({
                    id: Number(item.tabl),
                    availability: item.available,
                    on: item.available === 2,
                });
            }
            if (item.kakz === selectedKakz && item.subtable !== 0 && item.available !== 0) {
                maketsM10.push({
                    id: Number(item.subtable),
                    availability: item.available,
                    on: item.available === 2,
                });
            }
        });

        createMakets(makets, maketsM10);
    };

    getSaws = () => {
        const {saws} = this.props;

        return saws.map((saw) => {
            return {
                id: (saw.on) ? saw.id : null,
                on: saw.on,
            };
        });
    };

    closeModal = () => {
        this.setState({isVisible: false, isVisible2: false});
    };

    render() {
        return (
            <Container>
                <Header style={{backgroundColor: "#333", height: 64}} androidStatusBarColor={"#333"}>
                    <Left>
                        <Button transparent>
                            <Icon name="arrow-back" onPress={() => this.props.navigation.goBack()}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title style={{width: "100%", margin: "auto"}}>{"Лiсництво 1, квартал 1, видiл 1, Поточний"}</Title>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("SidebarM")}>
                            <Icon name="more"/>
                        </Button>
                    </Right>
                </Header>
                <View
                    style={{backgroundColor: "#fff", flexDirection: "row", flex: 1, justifyContent: "space-between"}}
                >
                    <ScrollView style={style.leftButtonsContainer}>
                        <ButtonsScrollable
                            changeForm={this.props.changeForm}
                            data={this.props.makets}
                            flag={"layout"}
                        />
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
                                this.setState({lantCatId: id});
                            }}/>
                        </ScrollView>
                        <Modal
                            isVisible={this.state.isVisible}
                            onSwipeComplete={() => this.setState({isVisible: false})}
                            swipeDirection="left"
                            onBackdropPress={() => this.setState({isVisible: false})}
                        >
                            <View style={{flex: 1, backgroundColor: "#fff"}}>
                                <ModalInner flag={"layout"} close={this.closeModal}/>
                            </View>
                        </Modal>
                        <Modal
                            isVisible={this.state.isVisible2}
                            onSwipeComplete={() => this.setState({isVisible2: false})}
                            swipeDirection="left"
                            onBackdropPress={() => this.setState({isVisible2: false})}
                        >
                            <View style={{flex: 1, backgroundColor: "#fff"}}>
                                <ModalInner flag={"saw"} close={this.closeModal}/>
                            </View>
                        </Modal>
                    </View>
                    <ScrollView style={style.rightButtonsContainer}>
                        <ButtonsScrollable data={this.getSaws()} flag={"saw"} selectSaw={this.props.selectSaw}/>
                    </ScrollView>
                </View>

                <Footer style={{borderTopWidth: 1, borderColor: "#000", height: 75}}>
                    <FooterTab style={{backgroundColor: "#333"}}>
                        <Button
                            vertical style={{
                            width: 75,
                            height: 75,
                            flex: 0,
                            backgroundColor: "#333",
                            borderWidth: 1,
                            borderColor: "#000"
                        }}
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
                        <Button
                            vertical style={style.buttonRightAdd}
                            onPress={() => {
                                this.setState({isVisible2: true});
                            }}
                        >
                            <Icon name="add-circle"/>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

export default Markup;
