import { connect } from "react-redux";
import React from 'react';
import Modal from "react-native-modal";
import * as Progress from 'react-native-progress';

class ModalInner extends React.Component {
    render() {
        const {visible} = this.props;

        return <Modal
            visible={visible}
            swipeDirection="left"
        >
            <Progress.Circle size={30} indeterminate={true}/>
        </Modal>
    }
}

const mapStateToProps = (state) => ({
    visible: state.modal.visible,
});

export default connect(mapStateToProps)(ModalInner);
