import * as React from "react";
import { Button, Text, Icon, View, Container, Footer, FooterTab, Header, Content } from "native-base";
import { StyleSheet } from "react-native";
import Modal from 'react-native-modal'

class ModalInner extends React.Component {

    render() {
        return <Container>
            <Header>

            </Header>
            <Content>

            </Content>
            <Footer>
                <FooterTab>
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
