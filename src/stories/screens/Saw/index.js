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


import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
}
export interface State {}
class Saw extends React.Component<Props, State> {
  constructor(props) {
    super();
    this.state = {
      isVisible: false,
    };
}
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon
                active
                name="arrow-back"
                onPress={() => this.props.navigation.navigate("BlankPage")}
              />
            </Button>
          </Left>
          <Body>
            <Title>Синхронізація</Title>
          </Body>
        </Header>
        <Content>
          <Button style={{width: "90%", marginLeft: "5%", backgroundColor: "#333", justifyContent: "center", marginTop: 10}}>
            <Text>Завантажити</Text>
          </Button>

          <Button onPress={() => this.setState({ isVisible: true })} style={{width: "90%", marginLeft: "5%", justifyContent: "center", marginTop: 10}}>
            <Text>Вивантажити</Text>
          </Button>

          <Modal
            isVisible={this.state.isVisible}
            onSwipeComplete={() => this.setState({ isVisible: false })}
            swipeDirection="left"
            onBackdropPress={() => this.setState({ isVisible: false })}>
            <View>
            <Header style={{backgroundColor: "#333", height: 64}} androidStatusBarColor={"#333"}>
                <Body>
                    <Title style={{width: "100%", margin: "auto"}}>{"Вивантаження"}</Title>
                </Body>
            </Header>
            <Content style={{backgroundColor: "#fff", flex: 1, height: 700}}/>
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
