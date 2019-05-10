import * as React from "react";
import { Button, Text, Icon, View } from "native-base";
import { StyleSheet } from "react-native";
import Modal from 'react-native-modal'

class AddModal extends React.Component {
    state = {
        visible: true
    }
    render() {
        const { setModalVisible, visible } = this.props;
        console.log(this.props, 'from add modal')
        return <Modal
            visible={visible}
            onBackdropPress={() => setModalVisible({visible: !visible})}
        >
            <View style={{ flex: 1, backgroundColor: '#000' }}>
                <Text>I am the modal content!</Text>
            </View>
        </Modal>
    }
}

export default AddModal;
